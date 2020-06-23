import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder} from '@angular/forms'
import { CsqDateComponent } from './csq-date.component';


describe('CsqDateComponent', () => {
  let component: CsqDateComponent;
  let fixture: ComponentFixture<CsqDateComponent>;
  let fb: FormBuilder 
  let mockData = {
    startDate: new Date,
    startTime: '12:00:00',
    endDate: new Date(),
    endTime: '12:00:00'
}
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsqDateComponent ],
      providers:[FormBuilder],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    fb = TestBed.get(FormBuilder)

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsqDateComponent);
    component = fixture.componentInstance;
    component.data = mockData
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
