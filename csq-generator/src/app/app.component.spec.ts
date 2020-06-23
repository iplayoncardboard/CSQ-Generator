import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import {MasterListService} from './services/master-list.service';
import { XmlService } from './services/xml.service'

describe('AppComponent', () => {
  let fixture
  let component
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ OverlayModule, MatDialogModule ],
      declarations: [ AppComponent ],
      providers:[ MatDialog, OverlayModule, MasterListService, XmlService ],
      schemas:[NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
     fixture = TestBed.createComponent(AppComponent);
     component = fixture.componentInstance
     fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'csq-generator'`, () => {
    expect(component.title).toEqual('csq-generator');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('csq-generator app is running!');
  // });

});
