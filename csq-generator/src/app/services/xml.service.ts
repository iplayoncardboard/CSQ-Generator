import { Injectable } from '@angular/core';
import { create } from 'xmlbuilder2'
import { CSQList, CSQ, DateTime } from '../models'
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class XmlService {

  constructor() { }

  generateXML(csqList: CSQList){
    const root = create({version: csqList.xmlVersion.toString()+'.0', encoding: csqList.encoding})
      .ele(csqList.title)
      this.addCSQs(root, csqList.listOfCSQ)
    

    const xml = root.end({ prettyPrint: true });
    const blob = new Blob([xml],{type: 'text.xml'});
    
    this.saveFile(blob, csqList.title);
  }

  saveFile(blob:Blob, title:string){
    const date = new Date().toString()
    const fileName = title+date+'.xml'
    saveAs(blob, fileName);
  }

  addCSQs(xmlHeader, csqList: CSQ[]){
    
    csqList.forEach(csq => {
      let temp = xmlHeader.ele('CSQ').txt(csq.title)
      this.addDateTimes(temp, csq.dateTimeList)
      temp.up()
    })
  }

  addDateTimes(xmlHeader, dateTimeList: DateTime[]){
     dateTimeList.forEach((dateTime, i) =>{
       xmlHeader.ele(`HolidayDate${i+1}`)
       .ele(`Date`)
       .txt(`${this.parseDate(dateTime.startDate)}`).up()
       .ele('StartTime')
       .txt(`${this.parseTime(dateTime.startTime)}`).up()
       .ele('EndTime')
       .txt(`${this.parseTime(dateTime.endTime)}`).up();
     });
  }

  parseDate(date:Date){
    let dateString;
    let month = date.getMonth()+1
    let day = date.getDate();
    dateString = `${this.formatDigits(month.toString())}/${this.formatDigits(day.toString())}/${date.getFullYear()}`
    return dateString
  }

  parseTime(time:string){
    return time;
  }

  formatDigits(string: string){
    return string.length < 2 ? '0'+string : string 
  }
   
  importXML(){

  }

}
