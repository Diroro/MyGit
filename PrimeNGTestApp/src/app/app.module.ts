import { LogoutMessageComponent } from './logout-message.component';

import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MenuComponent } from './menu.component';
import { TabsComponent } from './tabs.component';
import { ExportTabComponent } from './export-tab.component';
import { DataTableComponent } from './datatable.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TabsComponent,
    DataTableComponent,
    ExportTabComponent,
    LogoutMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
