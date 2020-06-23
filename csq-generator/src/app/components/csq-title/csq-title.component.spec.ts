import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsqTitleComponent } from './csq-title.component';

describe('CsqTitleComponent', () => {
  let component: CsqTitleComponent;
  let fixture: ComponentFixture<CsqTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsqTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsqTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
