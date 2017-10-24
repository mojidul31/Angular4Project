import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {ModalModule} from "ng2-modal";

import { AppComponent } from './app.component';
import{AlertModule } from 'ngx-bootstrap';
import { EmployeeItemComponent } from './employee-item/employee-item.component';
import { EmployeeMenuComponent } from './employee-menu/employee-menu.component';
import { HomeComponent } from './views/home.component';
import { JavaComponent } from './views/java.component';
import { AndroidComponent } from './views/android.component';
import { EntryEmployeeComponent } from './views/entryEmployee.component';
import { EmpModalComponent } from './views/empModal.component';
import { routes } from './app.route';
import { DepartmentComponent } from './department/department.component';
import { CustomerComponent } from './customer/customer.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeItemComponent,
    EmployeeMenuComponent,
    HomeComponent,
    JavaComponent,
    AndroidComponent,
    EntryEmployeeComponent,
    EmpModalComponent,
    DepartmentComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]    
    AlertModule.forRoot(),
    HttpModule,
    RouterModule.forRoot(routes),
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
