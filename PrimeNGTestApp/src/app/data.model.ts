export interface Tab {
    header: string;
    displayed: boolean;
    class: string;
    content: any;
}


export interface Data {

    id: number;
    data: number;
    path: string;
    future: string;
}

export interface DataSet {
    data: Data[],   
    state: number,  //sorted?
    sortedRow: string
}