import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder} from '@angular/forms'
import { AddCsqHeaderModalComponent } from './add-csq-header-modal.component';

describe('AddCsqHeaderModalComponent', () => {
  let component: AddCsqHeaderModalComponent;
  let fixture: ComponentFixture<AddCsqHeaderModalComponent>;
  let fb: FormBuilder;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCsqHeaderModalComponent ],
      providers: [FormBuilder],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

  fb = TestBed.get(FormBuilder);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCsqHeaderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
