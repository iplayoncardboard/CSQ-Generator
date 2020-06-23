import {CSQ} from './csq'
export interface CSQList{
    title: string;
    xmlVersion: number;
    encoding:string;
    listOfCSQ: CSQ[];
}