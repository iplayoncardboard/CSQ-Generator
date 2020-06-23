import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, Validators} from '@angular/forms'
import { EventEmitter } from '@angular/core'
import { CSQ } from '../../models';
@Component({
  selector: 'app-add-csq-header-modal',
  templateUrl: './add-csq-header-modal.component.html',
  styleUrls: ['./add-csq-header-modal.component.css']
})
export class AddCsqHeaderModalComponent implements OnInit {

headerForm = this.fb.group({
  name: ['', Validators.required],
  notes: ['']
})
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  
  clearNameField(){
    this.headerForm.setValue({name:''})
  }

  clearNotesField(){
    this.headerForm.setValue({notes:''})
  }

}
