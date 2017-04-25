import { NicknameService } from './nickname.service';
import { Component } from '@angular/core';

import { Message } from './message';
import { MessageService } from './message.service';

@Component({
    moduleId: module.id,
    selector: 'incoming',
    templateUrl: './incoming.component.html',
    styleUrls: ['./incoming.component.css'],
    providers: [MessageService, NicknameService ]
})

export class IncomingComponent {
    private messages: Message[] = new Array();
    private loginMessage: Message = {
        type: 'message',
        text: {
            text: 'You successfully logged as'
            
        }
    
    }
    constructor(private messageService: MessageService, private nicknameService: NicknameService) {
     //   this.messages.push(loginMessage);
        messageService.newMessages.subscribe(msg => {
            if (msg.type === 'message') {
                this.messages.push(msg);
            }
        });
    }
}

