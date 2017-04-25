import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, Subscription } from 'rxjs/Rx';
import { Message } from './message';
import { WebSocketService } from './websocket.service';


const url = 'ws://localhost:3013';

// @Injectable()
// export class MessageService {
//     public newMessages: Subject<Message>;
//     public loginMessages: Subject<Message>;

//     constructor(wsService: WebSocketService) {
//         this.newMessages = <Subject<Message>>wsService
//             .connect(url)
//             .map((response: MessageEvent): Message => {
//                 let data = JSON.parse(response.data);
//                 return data;
//             });
//     }
// }


@Injectable()
export class MessageService {

    public isLoginRequested: boolean = false;
    public newMessages: Subject<Message> = new Subject;
    public loginMessage: Subject<Message> ;
    private ws: WebSocketService;
    public isLogged: Observable<boolean> = Observable.from([false]);
    public loginHandler: BehaviorSubject<boolean>;

    private userName: string;
    private password: string;

    public setCredentials(username: string, password: string): void {
        this.userName = username;
        this.password = password;
    }

    constructor(wsService: WebSocketService) {
        this.loginHandler = new BehaviorSubject(false);
        this.ws = wsService;
        this.loginHandler.subscribe(
            (event) => {
                if (event) {
                    // this.isLogged=this.newLogin(this.userName, this.password);
                    let authMessage = {
                        type: 'authorize',
                        text: {
                            user: this.userName,
                            password: this.password,
                        }
                    };

                    this.newMessages.subscribe((value) => {
                        if (Object.hasOwnProperty.call(value,'type')) {
                            if (value.type === 'authorize'){
                             this.isLogged = value.text['success'];
                            } else {
                            this.sendMessage(authMessage);                       
                        };
                        } else {
                            this.sendMessage(authMessage);                       
                        };
                    });

                    this.newMessages = <Subject<Message>>this.ws
                        .connect(url)
                        .map((response: MessageEvent): Message => {
                            let data = JSON.parse(response.data);
                            return data;
                        })


                }

            }
        )
    }

    // constructor(wsService: WebSocketService) {
    //     this.ws = wsService;
    //     this.loginHandler.subscribe(
    //         event => {
    //             if (event){
    //                 this.newLogin(event.userName, event.passWord);
    //             }
    //         }
    //     )
    // }



    public connect(): Observable<any> {
        return this.newMessages = <Subject<Message>>this.ws
            .connect(url)
            .map((response: MessageEvent): Message => {
                let data = JSON.parse(response.data);
                console.log('Connected');
                return data;
            });//.catch(this.errorHandler());
    }
    // private errorHandler(): any {
    // }
    public sendMessage(message: Message): void {
        this.newMessages.next(message);
    }



    public newLogin(userName: string, userPassword: string): Observable<any> {
        let authMessage = {
            type: 'authorize',
            text: {
                user: userName,
                password: userPassword,
            }
        }
        // Observable.combineLatest
        return this.connect().switchMap(() => {
            console.log('Sending authMessage...');
            this.newMessages.next(authMessage);
            console.log('AuthMessage is sent.');
            return this.newMessages.switchMap(msg => {
                if (msg.type === 'authorize') {
                    console.log('Getting response: ' + msg);
                    return Observable.from(msg.text['success']);
                }
            })
        })
    }



    // public login(loginMessage: Message): Observable<Message> {
    //     let message: Message;
    //     this.connect().subscribe(() => {
    //         this.newMessages.
    //         this.newMessages.next(loginMessage);
    //         this.newMessages.subscribe(msg => { 
    //             message = msg;
    //         });
    //     })

    // }
} 
