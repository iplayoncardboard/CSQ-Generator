import { Injectable } from '@angular/core';
import { CSQList, CSQ, DateTime } from '../models';


@Injectable({
  providedIn: 'root'
})
export class MasterListService {

  constructor() { }

  list: CSQList 

  createNewList(): CSQList{
    return {
      title: "NewList",
      xmlVersion: 1.0,
      encoding:"ISO-8859-1",
      listOfCSQ: []
    }    
  }

  addNewListHeader(csqList: CSQList, title: string, notes: string){
    let newListHeader: CSQ = { 
    title: title,
    notes: notes,
    dateTimeList:[]
    }
    csqList.listOfCSQ.push(newListHeader);
  } 

  removeListHeader(masterList: CSQList, index: number){
    masterList.listOfCSQ.splice(index, 1);
  }

  

  newDateTime(csqList:CSQList, csqIndex: number, values?: DateTime){

    const tempDate = new Date()
    tempDate.setHours(12);
    tempDate.setMinutes(0);
      csqList.listOfCSQ[csqIndex].dateTimeList.push({    
        startDate: (values && values.startDate) ? values.startDate : tempDate,
        startTime: (values && values.startTime)? values.startTime : '12:00:00',
        endDate: (values && values.endDate)? values.endDate : tempDate,
        endTime: (values && values.endTime)? values.endTime : '12:00:00'})
  }

  removeDateTime(csqList:CSQList, csqIndex: number, dateTimeIndex: number){
    csqList.listOfCSQ[csqIndex].dateTimeList.splice(dateTimeIndex,1);
  }

  updateDateTime(csqList:CSQList, csqIndex: number, dateTimeIndex: number, replacementValue:DateTime){
    csqList.listOfCSQ[csqIndex].dateTimeList.splice(dateTimeIndex,1,replacementValue);
  }

  CopyDateTime(csqList: CSQList, csqIndex: number){
    const lastDateTimeIndex = (csqList.listOfCSQ[csqIndex].dateTimeList.length) -1
    const tempValues = csqList.listOfCSQ[csqIndex].dateTimeList[lastDateTimeIndex]
    this.newDateTime(csqList, csqIndex, tempValues)
  }
}
