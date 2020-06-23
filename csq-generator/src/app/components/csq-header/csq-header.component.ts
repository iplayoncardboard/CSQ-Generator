import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CSQ } from 'src/app/models';

@Component({
  selector: 'app-csq-header',
  templateUrl: './csq-header.component.html',
  styleUrls: ['./csq-header.component.css']
})
export class CsqHeaderComponent implements OnInit {
 
  @Input() data:CSQ;
  @Input() index: number;
  @Output() removeListHeader = new EventEmitter();
  @Output() removeDateComponent = new EventEmitter();
  @Output() addNewDateTimeEntry = new EventEmitter();
  @Output() updateDateTime = new EventEmitter();
  @Output() copyDateTime = new EventEmitter();
  title:string;
  notes: string;
 
  constructor() { }

  ngOnInit(): void {
    this.title = this.data.title;
    this.notes = this.data.notes;
  }

  addNewDateTime(){
    this.addNewDateTimeEntry.emit(this.index);
  }

  onUpdateDateTime(event){
    this.updateDateTime.emit({...event, csqIndex: this.index});
  }

  onRemoveDateComponent(event){
    const removeObj = { ...event,
      csqIndex: this.index
    }
    this.removeDateComponent.emit(removeObj);
  }

  copyLastDateTime(){
    this.copyDateTime.emit({csqIndex: this.index});
  }

  removeThisCSQ(){
    this.removeListHeader.emit(this.index)
  }

}
