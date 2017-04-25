import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { IncomingComponent } from './incoming.component';

import { MessageService } from './message.service';
import { WebSocketService } from './websocket.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    MainComponent,
    IncomingComponent,
    AppComponent,
    LoginComponent
  ],
  providers: [MessageService, WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
