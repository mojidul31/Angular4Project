import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import{AlertModule } from 'ngx-bootstrap';
import { EmployeeItemComponent } from './employee-item/employee-item.component';
import { EmployeeMenuComponent } from './employee-menu/employee-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeItemComponent,
    EmployeeMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]    
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
