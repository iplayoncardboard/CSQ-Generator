import { Component, OnInit } from '@angular/core';
import {CSQList} from './models'
import {MasterListService} from './services/master-list.service';
import { XmlService } from './services/xml.service'
import { Observable } from 'rxjs';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddCsqHeaderModalComponent } from './components/add-csq-header-modal/add-csq-header-modal.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'csq-generator';
  masterList: CSQList;
  
  constructor(
    private masterListService: MasterListService,
    private xmlService: XmlService,
    private dialog: MatDialog
    ) {
    this.masterList = this.masterListService.createNewList();
    console.log(this.masterList)
  }



  createNewCSQList(){
    this.masterList = this.masterListService.createNewList();
  }

  addCSQ(){
    const dialogRef = this.dialog.open(AddCsqHeaderModalComponent);
      dialogRef.afterClosed().subscribe(res => {
        if(res.title){
            this.masterListService.addNewListHeader(this.masterList, res.title, res.notes);
        }
      });
  }

  onRemoveListHeader(event){
    this.masterList = this.masterListService.removeListHeader(this.masterList, event);
  }
  onAddNewDateTimeEntry(event){
    this.masterList = this.masterListService.newDateTime(this.masterList, event, null);
  }
  onUpdateDateTime(event){
    console.log(event)
    this.masterList = this.masterListService.updateDateTime(this.masterList, event.csqIndex, event.dateTimeIndex, event.data)
    console.log(this.masterList);
  }
  onCopyDateTime(event){
    this.masterList =this.masterListService.CopyDateTime(this.masterList, event.csqIndex)
  }
  onRemoveDateComponent(event){
    this.masterList = this.masterListService.removeDateTime(this.masterList, event.csqIndex, event.dateTimeIndex);
    console.log(this.masterList);
  }
  onSaveListEvent()
  {
    this.xmlService.generateXML(this.masterList);
  }
}
