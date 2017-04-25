"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Rx_1 = require('rxjs/Rx');
var WebSocketService = (function () {
    function WebSocketService() {
    }
    WebSocketService.prototype.connect = function (url) {
        if (!this.subject) {
            this.subject = this.create(url);
        }
        return this.subject;
    };
    WebSocketService.prototype.create = function (url) {
        var ws = new WebSocket(url);
        var observable = Rx_1.Observable.create(function (obs) {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        var observer = {
            next: function (data) {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            },
        };
        return Rx_1.Subject.create(observer, observable);
    };
    WebSocketService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], WebSocketService);
    return WebSocketService;
}());
exports.WebSocketService = WebSocketService;
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
//# sourceMappingURL=websocket.service.js.map