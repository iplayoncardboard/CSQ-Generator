import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {ImportModalComponent} from '../import-modal/import-modal.component'
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
@Output()emitNewList = new EventEmitter();
@Output()saveListEvent = new EventEmitter();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openImportDialog(){
    this.dialog.open(ImportModalComponent);
  }
  emitNewListEvent(){
    this.emitNewList.emit();
  }

  emitSaveListEvent(){
    this.saveListEvent.emit();
  }
}
