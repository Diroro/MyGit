import { Component} from '@angular/core';
import { Message } from './message';
import { IncomingComponent } from './incoming.component';
import { MessageService } from './message.service';

import { NicknameService } from './nickname.service'; 

@Component({
    moduleId: module.id,
    selector: 'main-app',
    templateUrl: './main.component.html',

    styleUrls: ['./main.component.css'],
    providers: [MessageService, NicknameService]
})
// try to route ON INIT to login  - e.g using loginService  -  isLogged();
//todo  AUTOMATICAL SCROLLING 
export class MainComponent{

    
    title = 'My Chat';
    private username: string;
    private password: string;
    private message = {
        type: 'message',
        text: {
            text: '',
            authorName: 'Default Nick Name',
        },
    }
    constructor(private messageService: MessageService, private nicknameService: NicknameService) {

    };


    
    private login() {
        //  this.messageService.newMessages.next(this.authMessage);
    }

    private onSubmit() {
        this.message.text.authorName=this.nicknameService.getNickName();
        if (this.message.text.text) {
            
            this.messageService.newMessages.next(this.message);
            this.message.text.text = '';
        }
    }
}
