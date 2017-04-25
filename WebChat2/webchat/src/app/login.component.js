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
var router_1 = require('@angular/router');
var message_service_1 = require('./message.service');
var nickname_service_1 = require('./nickname.service');
var LoginComponent = (function () {
    function LoginComponent(router, messageService, nicknameService) {
        this.router = router;
        this.messageService = messageService;
        this.nicknameService = nicknameService;
        // todo NICKNAME
        this.isLoggedIn = false;
        this.loginBtnText = "LOGIN";
        this.errorMessage = '';
        this.authMessage = {
            type: 'authorize',
            text: {
                user: '',
                password: '',
            }
        };
        //todo status messages
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.messageService.newMessages.next(this.authMessage);
        // todo  WAIT FOR RESPONSE TILL 5 SECONDS
        this.messageService.newMessages.subscribe(function (msg) {
            if (msg.type === 'authorize') {
                _this.loginResponse = msg;
                if (_this.loginResponse.text["success"] === true) {
                    _this.isLoggedIn = true;
                    _this.nicknameService.setNickName(_this.nickname);
                    _this.router.navigate(['/main']);
                }
                else {
                    _this.errorMessage = "Failed to connect:\n Incorrect username or password.";
                }
            }
        });
    };
    LoginComponent.prototype.gotoMainApp = function () {
        this.loginBtnText = "LOGIN...";
        this.errorMessage = '';
        this.login();
        this.loginBtnText = "LOGIN";
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            providers: [message_service_1.MessageService, nickname_service_1.NicknameService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, message_service_1.MessageService, nickname_service_1.NicknameService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map