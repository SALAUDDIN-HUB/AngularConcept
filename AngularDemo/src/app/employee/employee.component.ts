import { Component, OnInit } from '@angular/core';
import { InterpolationConfig } from '@angular/compiler';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent 
{
  firstName:string="Raj";
  lastName:string="ram";
  Email:string="abc@gmail.com";
  Age:Number=20;
  getStyle():void
  {
    let styles={'font-style':'italic', 'color':'brown'}

  }

}
  

