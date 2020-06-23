import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DateTime } from 'src/app/models';
import { interval, Observable  } from 'rxjs'
import { debounce } from 'rxjs/operators';

@Component({
  selector: 'app-csq-date',
  templateUrl: './csq-date.component.html',
  styleUrls: ['./csq-date.component.css']
})
export class CsqDateComponent implements OnInit {
  @Input() data: DateTime;
  @Input() index: number;
  @Output() removeDateComponent = new EventEmitter();
  @Output() updateDateTime = new EventEmitter();
  dateForm:FormGroup
  formChange: Observable<any>  
  
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.dateForm = this.fb.group({
      startTime:[this.data.startTime],
      endTime: [this.data.endTime],
      startDate: [this.data.startDate],
      endDate:[this.data.endDate]
    })

    this.formChange = this.dateForm.valueChanges
    this.formChange.pipe(debounce(()=> interval(1000)))
    .subscribe(res=>{
      this.updateComponentData(res);
    })
  }

  removeThisComponent(){
    const removeData = {
      dateTimeIndex: this.index
    }
    this.removeDateComponent.emit(removeData)
  }

  updateComponentData(data:DateTime){
    const event = {
      dateTimeIndex: this.index,
      data: data
    }
    this.updateDateTime.emit(event)
  }

}
