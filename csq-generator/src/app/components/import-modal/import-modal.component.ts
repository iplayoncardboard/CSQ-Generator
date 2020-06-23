import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-import-modal',
  templateUrl: './import-modal.component.html',
  styleUrls: ['./import-modal.component.css']
})
export class ImportModalComponent implements OnInit {

  constructor() { }
  fileLocation = new FormControl('Choose a location');
  clearFileLocation(){
    this.fileLocation.setValue('');
  }
  ngOnInit(): void {
  }

}
