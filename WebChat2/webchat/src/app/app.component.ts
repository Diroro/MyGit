import { Component, OnInit } from '@angular/core';
import { Message } from './message';
import { IncomingComponent } from './incoming.component';
import { MessageService } from './message.service';
import { Router } from '@angular/router';
//todo "adding"

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `<div class="main_window">
    <div class="chat_name">Chat</div>
    <router-outlet></router-outlet>
    </div>`,
  styleUrls:['./app.component.css']
})
export class AppComponent {
}
