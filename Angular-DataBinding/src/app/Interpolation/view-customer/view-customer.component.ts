import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  obj:Customer;
  

  constructor() { 
    this.obj={CName:'Ram', CEmail:'Ram@gmail.com',CMobile:123456,CCity:'Hyderabad',CAddress:'Arundelpet'}
  }

  ngOnInit() {
  }

}
