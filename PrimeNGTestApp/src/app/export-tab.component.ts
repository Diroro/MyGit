
import { Component, Input } from '@angular/core';
import { Tab } from './data.model';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
    moduleId: module.id,
    selector: 'export-tab',
    template: ` 
    <button (click) = 'openExportConfirmMessage()' class='export_btn'>Ex </button>
      <div [ngClass] = 'exportMsgWrapperClass' class='export_msg_wrapper'>
        <div class='export_msg'>
            <p> Do you want to export the current tab?</p>
            <button class='export_btn_confirm' (click)='exportAsCsv(currentTab)'> Ok </button>
            <button class='export_btn_cancel' (click)='closeExportConfirmMessage()'> Cancel </button>
        </div>
    </div>
    `,
    styles: [`
    
    .export_btn_confirm, .export_btn_cancel{
    margin: auto;
    display:block;
    width: 100px;
    height: 40px;
    margin-top: 20px;
    border: 1px solid RGBA(0,0,0,0.3);
    font-size: 16px;
}

.export_btn{
    float:right;
    width: 40px;
    height: 40px;
    color: black;
    font-size: 16px;

}
.export_btn, .export_msg{
    
    border: 1px solid RGBA(0,0,0,0.3);
    background-color: whitesmoke;
}
.export_msg{
    height: 200px;
    width: 300px;
    margin: auto;
    margin-top: 100px;
   
}

.export_msg_wrapper{
    position:fixed;
    background-color: RGBA(0,0,0,0.5);
    width:100%;
    height: 100%;
    top:0;
    left:0;
}

.export_msg_wrapper_opened{
    visibility: visible;
    opacity: 1;
}

.export_msg_wrapper_closed{
    display:none;
    visibility: none;
    opacity:0;
}

.export_msg p{
    text-align: center;
    margin-top:20px;

}`]
})
export class ExportTabComponent {
    @Input() currentTab: Tab;

    exportMsgWrapperClass = 'export_msg_wrapper_closed';

    exportAsCsv(tab:Tab) {
        new Angular2Csv(tab.content.data, 'Daily Report '+this.getToday());
        this.closeExportConfirmMessage();
    }

    getToday(){
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1;
        let yyyy = today.getFullYear();
        let dds = (dd<10? '0' : '')+ dd;
        
        let mms = (mm<10? '0' : '')+ mm;
        return yyyy+'-'+mms+'-'+dds;
    }

    openExportConfirmMessage() {
        this.exportMsgWrapperClass = 'export_msg_wrapper_opened';
    }

    closeExportConfirmMessage() {
        this.exportMsgWrapperClass = 'export_msg_wrapper_closed';
    }


}