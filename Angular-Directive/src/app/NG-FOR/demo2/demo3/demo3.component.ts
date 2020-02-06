import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {
list:Student[]=[];
Sid:number;
Sname:string;
Std:string;
Age:number;
item:Student
stds:string[]=["1","2","3"]
val:boolean=true
  constructor() {
    this.list=[{Sid:1,Sname:'Ram',Std:'IT',Age:22},
    {Sid:1,Sname:'Ramu',Std:'Cse',Age:23},
      
    {Sid:1,Sname:'Ravi',Std:'IT',Age:24},
    {Sid:1,Sname:'Rami',Std:'Ece',Age:25}
  
  ]
    
   }

  ngOnInit() {
  }
  public add()
  {
    this.item=new Student();
    this.item.Sid=this.Sid;
    this.item.Sname=this.Sname;
    this.item.Std=this.Std;
    this.item.Age=this.Age;
    this.list.push(this.item);

  }
  public set()
  {
    this.val=!this.val;

  }

}
