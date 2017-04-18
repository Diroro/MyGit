import { Component, Input } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'logout-message',
    template: ` 
    <button (click) = 'openLogoutConfirmMessage()' class='logout_link'>Logout</button>
      <div [ngClass] = 'logoutMsgWrapperClass' class='logout_msg_wrapper'>
        <div class='logout_msg'>
            <p> Do you want to log out?</p>
            <button class='btn_confirm' (click)='closeLogoutConfirmMessage()'>GO!</button>
            <button class='btn_cancel' (click)='closeLogoutConfirmMessage()'> Cancel </button>
        </div>
    </div>
    `,
    styles: [`
    
*{
    box-sizing: border-box;
    border: 0px;
    font-family:  'PT Sans',Arial, sans-serif;
    padding: 0;
    margin: 0;
}
    .btn_confirm, .btn_cancel{
    margin: auto;
    display:block;
    width: 100px;
    height: 40px;
    margin-top: 20px;
    border: 1px solid RGBA(0,0,0,0.3);
    font-size: 16px;
}

.logout_link{
   background-color:white;
   font-size:16px;

}
.logout_btn, .logout_msg{
    
    border: 1px solid RGBA(0,0,0,0.3);
    background-color: whitesmoke;
}
.logout_msg{
    height: 200px;
    width: 300px;
    margin: auto;
    margin-top: 100px;
   
}

.logout_msg_wrapper{
    position:fixed;
    background-color: RGBA(0,0,0,0.5);
    width:100%;
    height: 100%;
    top:0;
    left:0;
}

.logout_msg_wrapper_opened{
    visibility: visible;
    opacity: 1;
}

.logout_msg_wrapper_closed{
    display:none;
    visibility: none;
    opacity:0;
}

.logout_msg p{
    text-align: center;
    margin-top:20px;
    

}`]
})
export class LogoutMessageComponent {
    logoutMsgWrapperClass = 'logout_msg_wrapper_closed';
    @Input() link='';
   
    openLogoutConfirmMessage() {
        this.logoutMsgWrapperClass = 'logout_msg_wrapper_opened';
    }

    closeLogoutConfirmMessage() {
        this.logoutMsgWrapperClass = 'logout_msg_wrapper_closed';
    }


}