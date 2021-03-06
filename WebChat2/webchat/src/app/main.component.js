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
var nickname_service_1 = require('./nickname.service');
var MainComponent = (function () {
    function MainComponent(messageService, nicknameService) {
        this.messageService = messageService;
        this.nicknameService = nicknameService;
        this.title = 'My Chat';
        this.message = {
            type: 'message',
            text: {
                text: '',
                authorName: 'Default Nick Name',
            },
        };
    }
    ;
    MainComponent.prototype.login = function () {
        //  this.messageService.newMessages.next(this.authMessage);
    };
    MainComponent.prototype.onSubmit = function () {
        this.message.text.authorName = this.nicknameService.getNickName();
        if (this.message.text.text) {
            this.messageService.newMessages.next(this.message);
            this.message.text.text = '';
        }
    };
    MainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'main-app',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.css'],
            providers: [message_service_1.MessageService, nickname_service_1.NicknameService]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, nickname_service_1.NicknameService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map