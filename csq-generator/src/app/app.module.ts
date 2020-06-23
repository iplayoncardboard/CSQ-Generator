import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalErrorHandlerService } from './services/global-error-handler.service'
import { MaterialModule } from './material.module';
import { NavComponent } from './components/nav/nav.component';
import { ImportModalComponent } from './components/import-modal/import-modal.component';
import { CsqHeaderComponent } from './components/csq-header/csq-header.component';
import { CsqTitleComponent } from './components/csq-title/csq-title.component';
import { CsqDateComponent } from './components/csq-date/csq-date.component';
import { AddCsqHeaderModalComponent } from './components/add-csq-header-modal/add-csq-header-modal.component';
import { XmlService, MasterListService } from './services'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ImportModalComponent,
    CsqHeaderComponent,
    CsqTitleComponent,
    CsqDateComponent,
    AddCsqHeaderModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [{provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    XmlService, MasterListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
