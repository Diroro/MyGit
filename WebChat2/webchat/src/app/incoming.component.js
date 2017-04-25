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
var core_1 = require('@angular/core');
var message_service_1 = require('./message.service');
var IncomingComponent = (function () {
    function IncomingComponent(messageService) {
        var _this = this;
        this.messageService = messageService;
        this.messages = new Array();
        messageService.newMessages.subscribe(function (msg) {
            if (msg.type === 'message') {
                _this.messages.push(msg);
            }
        });
    }
    IncomingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'incoming',
            templateUrl: './incoming.component.html',
            styleUrls: ['./incoming.component.css'],
            providers: [message_service_1.MessageService]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], IncomingComponent);
    return IncomingComponent;
}());
exports.IncomingComponent = IncomingComponent;
//# sourceMappingURL=incoming.component.js.map