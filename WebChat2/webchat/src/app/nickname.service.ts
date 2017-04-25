import { Injectable } from "@angular/core";

let nickname: string = 'DefaultNickName';

@Injectable()
export class NicknameService {

   public setNickName(name: string){
       nickname=name;
   }

   public getNickName(){
       return nickname;
   }

}