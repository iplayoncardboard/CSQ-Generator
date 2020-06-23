import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { CsqHeaderComponent } from './csq-header.component';

describe('CsqHeaderComponent', () => {
  let component: CsqHeaderComponent;
  let fixture: ComponentFixture<CsqHeaderComponent>;
  let headerDe: DebugElement
  let headerEl: HTMLElement
  let mockData = {   
    title: 'New CSQ',
    notes: "Notes",
    dateTimeList: []}
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsqHeaderComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsqHeaderComponent);
    component = fixture.componentInstance;
    headerDe = fixture.debugElement;
    headerEl = fixture.nativeElement;
    component.data = mockData;
    component.title = 'New CSQ';
    fixture.detectChanges();
    
    
  });

  it('should create', () => {
    component.data.title = 'New CSQ';
    component.title = 'New CSQ';
    expect(component).toBeTruthy();
  });
});
