import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Subject, Observable, Subscription } from 'rxjs/Rx';
import { Message } from './message';
import { IncomingComponent } from './incoming.component';
import { MessageService } from './message.service';
import { NicknameService } from './nickname.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [MessageService, NicknameService]
})

export class LoginComponent {

    // todo NICKNAME
    isLoggedIn: boolean = false;
    private loginBtnText = "LOGIN";
    private errorMessage = '';

    private nickname: string;
    private authMessage =
    {
        type: 'authorize',
        text: {
            user: '',
            password: '',
        }
    };

    constructor(private router: Router, private messageService: MessageService, private nicknameService: NicknameService) {

        //todo status messages
    }
    //  private loginResponse: Message;
    //   private login() {
    //     this.messageService.newMessages.next(this.authMessage);
    //     // todo  WAIT FOR RESPONSE TILL 5 SECONDS
    //     this.messageService.newMessages.subscribe(msg => {
    //       if (msg.type === 'authorize') {
    //         this.loginResponse = msg;
    //         if (this.loginResponse.text["success"] === true) {
    //           this.isLoggedIn = true;
    //           this.nicknameService.setNickName(this.nickname);
    //           this.router.navigate(['/main']);
    //           //todo CHECK HOW TO SET VARIABLES IN NAVIGATE()
    //         } else {
    //           this.errorMessage = `Failed to connect:\n Incorrect username or password.`;
    //         }
    //       }
    //     });
    //   }




    // private loginResponse: Observable<Message>;


    //

    private userName = this.authMessage.text.user;
    private password = this.authMessage.text.password;

    private newLogin(): void {

        //
        // todo validation
        //
        this.messageService.setCredentials(this.userName, this.password);
        
        this.messageService.loginHandler.subscribe((value)=>{console.log(value)});
       

        this.messageService.isLogged.subscribe(
            data => {
                if (data) {
                    this.isLoggedIn = data;
                    this.nicknameService.setNickName(this.nickname);
                    this.router.navigate(['/main']);
                }
                else {
                    this.errorMessage = `Unable to connect:\n Incorrect username or password.`;
                }
            },
        );
         this.messageService.loginHandler.next(true);
    }
    //     this.messageService.newLogin(this.authMessage.text.user,
    //         this.authMessage.text.password)
    //         .subscribe(
    //         data => {
    //             if (data) {
    //                 this.isLoggedIn = data;
    //                 this.nicknameService.setNickName(this.nickname);
    //                 this.router.navigate(['/main']);
    //             }
    //             else {
    //                 this.errorMessage = `Failed to connect:\n Incorrect username or password.`;
    //             }
    //         },
    //         error => {
    //             this.errorMessage = error;
    //         }
    //         );
    // }


    //
    // private login() {

    //   this.messageService.login(this.authMessage).subscribe(msg => {

    //     if (msg.type === 'authorize') {
    //       if (msg.text["success"] === true) {
    //         this.isLoggedIn = true;
    //         this.nicknameService.setNickName(this.nickname);
    //         this.router.navigate(['/main']);
    //       } else {
    //         this.errorMessage = `Failed to connect:\n Incorrect username or password.`;
    //       }

    //     }
    //   });

    //   // this.messageService.newMessages.next(this.authMessage);
    //   // todo  WAIT FOR RESPONSE TILL 5 SECONDS
    // }

    private gotoMainApp(): void {
        this.loginBtnText = "LOGIN...";
        this.errorMessage = '';
        this.newLogin();
        this.loginBtnText = "LOGIN";
    }
}