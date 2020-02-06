import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { DemoComponent } from './Interpolation/demo/demo.component';
import { DemoComponent } from './Twoway-Binding/demo/demo.component';
//import { ViewComponent } from './Interpolation/view/view.component';
//import { ViewCustomerComponent } from './Interpolation/view-customer/view-customer.component';
import { ViewComponent } from './Property-Binding/view/view.component';
import {  ViewcustomerComponent } from './Property-Binding/viewcustomer/viewcustomer.component';
import { EventdemoComponent } from './Event-Binding/eventdemo/eventdemo.component';
import { Eventdemo1Component } from './Event-Binding/eventdemo1/eventdemo1.component';
import { EmployeeDemoComponent } from './Twoway-Binding/employee-demo/employee-demo.component';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ViewComponent,
    ViewcustomerComponent,
    EventdemoComponent,
    Eventdemo1Component,
    EmployeeDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [EmployeeDemoComponent]
})
export class AppModule { }
