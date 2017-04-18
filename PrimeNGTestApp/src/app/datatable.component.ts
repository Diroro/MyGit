import { Component, Input } from '@angular/core';
import { DataService } from './data.service';
import { Data, Tab } from './data.model'; 


@Component({
    moduleId: module.id,
    selector: 'data-table',
    template: ` <div *ngIf='currentTab'>
                 <table class='data'>
                <thead>
                    <th class='th'>
                        <p (click)='sortDataSet(currentTab.content,"id")'>ID {{markerIsSorted(currentTab.content,"id")}}</p>
                    </th>
                    <th class='th'>
                        <p (click)='sortDataSet(currentTab.content,"data")'>DATA {{markerIsSorted(currentTab.content,"data")}}</p>
                    </th>
                    <th class='th'>
                        <p (click)='sortDataSet(currentTab.content,"path")'>PATH {{markerIsSorted(currentTab.content,"path")}}</p>
                    </th>
                    <th class='th'>
                        <p (click)='sortDataSet(currentTab.content,"future")'>FUTURE {{markerIsSorted(currentTab.content,"future")}}</p>
                    </th>
                </thead>
                <tbody>
                    <tr class='tr' *ngFor="let row of currentTab.content.data; let rowNum=index;" [className]='rowsClass[rowNum]' (click)='toggleRowClass(rowNum)'>
                        <td class='td'>{{row.id}}</td>
                        <td class='td'>{{row.data}}</td>
                        <td class='td'>{{row.path}}</td>
                        <td class='td'>{{row.future}}</td>
                    </tr>
                </tbody>
            </table>
            </div>`,
    // templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class DataTableComponent {
    @Input() currentTab: Tab;
    markerIsSorted = function (tab, col) { }//this.ds.markerIsSorted;
    sortDataSet = function (tab, col) { }// this.ds.sortDataSet;

    onRowSelect(i: number, row) {
    }

    toggleRowClass(rowNum) {
        let id = this.currentTab['content']['data'][rowNum]['id'];
        this.rowsClass[rowNum] =
            (this.rowsClass[rowNum] != 'greenRow' &&
                this.rowsClass[rowNum] != 'redRow') ?
                (id >= 5 && id <= 7) ? 'greenRow' : id > 7 ? 'redRow' : 'whiteRow' : 'whiteRow';
    }

    //todo CORRECT COLORS AFTER SORTING;
    onRowUnselect(event) {
        //todo;
    }
    public rowsClass = [];
}