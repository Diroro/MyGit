import { Injectable } from '@angular/core';
import { Data, Tab, DataSet } from './data.model';


@Injectable()

export class DataService {

    constructor() {

    }

    public sortDataSet(uDataSet, prop: string): void {
        // let uDataSet = dataSet;
        uDataSet.sortedRow = 0;
        let compare = function (a: any, b: any): number {
            let c = a[prop],
                d = b[prop];
            return ((c < d) ? 1 : ((c > d) ? -1 : 0))
        }
        let backCompare = function(a: any, b: any):number{
            return -1*compare(a,b);
        }
       
        if (uDataSet.state === 0 || uDataSet.state === -1) {
            uDataSet.data.sort(backCompare);
            uDataSet.state = 1;
        } else {
            uDataSet.data.sort(compare);
            uDataSet.state = -1;
        }
        uDataSet.sortedRow = prop;

    }

    
    public markerIsSorted(o, prop: string): string {
        return (o.sortedRow === prop ? (o.state === 1 ? '^' : (o.state === -1 ? 'v' : '')) : '');
    }

    private randomString = (length) => {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    public generateData(index: number): Data[] {
        let datas: Data[] = [];
        for (let i = 0; i < 10; i++) {
            datas[i] = {
                id: i + 1 + 10 * index,
                data: Math.floor(Math.random() * 100000),
                path: this.randomString(10) + index,
                future: this.randomString(6) + index,
            }
        }

        return datas;

    }

   
     public generateDataSet() {
        let dataSet1: DataSet = {
            data: this.generateData(0),
            state: 0,
            sortedRow: ''
        }
        let dataSet2:DataSet = {
            data: this.generateData(1),
            state: 0,
            sortedRow: ''
        }
        return [dataSet1, dataSet2];

    }
    getTabs(): Tab[] {
        return [
            {
                header: 'My Tab One',
                displayed: true,
                class: 'tab_header_selected',
                content: this.generateDataSet()[0],
            },
            {
                header: 'My Tab Two',
                displayed: false,
                class: 'tab_header',
                content: this.generateDataSet()[1],
            }


        ];
    }
}


