import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-csq-title',
  templateUrl: './csq-title.component.html',
  styleUrls: ['./csq-title.component.css']
})
export class CsqTitleComponent implements OnInit {
  @Input() title: string;
  @Input() version: string;
  @Input() encoding: string;

  constructor() { }

  ngOnInit(): void {
  }

}
