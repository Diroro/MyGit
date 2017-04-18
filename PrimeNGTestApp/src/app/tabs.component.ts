import { Component } from '@angular/core';
import { Tab } from './data.model';

import { DataService } from './data.service';
import { ExportTabComponent } from './export-tab.component';

@Component({
    moduleId: module.id,
    selector: 'tabs-component',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css', './app.component.css']
})
export class TabsComponent {
  
    selectedTab: number = 0;

    constructor(private ds: DataService) {
     
    }

    tabs: Tab[] = this.ds.getTabs();

    
    changeTab() {
        for (let tab of this.tabs) {
            tab.displayed = !tab.displayed;
            tab.class = tab.displayed ? 'tab_header_selected' : 'tab_header';
        }
    }

    selectTab(index: number) {
        if (this.selectedTab != index) {
            this.selectedTab = index;
            this.changeTab();
        }
    }
  
   
}