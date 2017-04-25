import { Injectable } from "@angular/core";
import { Subject, Observable, Observer } from 'rxjs/Rx';

@Injectable()
export class WebSocketService {
    private subject: Subject<MessageEvent>;

    public connect(url: string): Subject<MessageEvent> {
        if (!this.subject) {
            this.subject = this.create(url);
        }
        return this.subject;
    }

    private create(url: string): Subject<MessageEvent> {
        let ws = new WebSocket(url);

        let observable = Observable.create((obs: Observer<MessageEvent>) => {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);

            return ws.close.bind(ws);
        });

        let observer = {
            next: (data: Object) => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            },
        };
        return Subject.create(observer, observable);
    }
}

// import { Injectable } from "@angular/core";
// import { Subject, Observable, Subscription } from 'rxjs/Rx';
// import { WebSocketSubject } from "rxjs/observable/dom/WebSocketSubject";

// @Injectable()
// export class WebSocketService {
//     private ws: WebSocketSubject<Object>;
//     private socket: Subscription;
//     private url: string;

//     public message: Subject<Object> = new Subject();
//     public opened: Subject<boolean> = new Subject();

//     public close(): void{
//         this.socket.unsubscribe();
//         this.ws.complete();
//     }

//     public sendMessage(message: string): void{
//         this.ws.next(message);
//     }

//     public start(url: string): void{
//         let self = this;

//         this.url = url;
//         this.ws = Observable.webSocket (this.url);
//         this.socket = this.ws.subscribe({
//             next: ( data:MessageEvent) => {
//                 if(data [ 'type'] == 'welcome') {
//                     self.opened.next (true);
//                 }
//                 this.message.next(data);

//             },
//             error: () => {
//                 self.opened.next( false);
//                 this.message.next( {type: 'closed'});
//                 self.socket.unsubscribe();
//                 setTimeout ( () => {
//                     self.start(self.url );
//                 }, 1000);
//             },

//             complete: () => {
//                 this.message.next ({type: 'closed'});
//             }
//         });
//     }
// }