import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer';

@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {
item:Customer
  constructor() {
    this.item=new Customer();
    this.item.CName="Ram"
    this.item.CEmail="Ram@gmail.com";
    this.item.CMobile=123456;
    this.item.CCity="Chennai";
    this.item.CAddress="Perungudi";
    
  }

  ngOnInit() {
  }

}
