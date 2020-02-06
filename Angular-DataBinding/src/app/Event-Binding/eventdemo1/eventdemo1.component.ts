import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdemo1',
  templateUrl: './eventdemo1.component.html',
  styleUrls: ['./eventdemo1.component.css']
})
export class Eventdemo1Component implements OnInit {
num1:number;
num2:number;
res:number;
  constructor() { }

  ngOnInit() {
  }
  public Add(n1:number,n2:number)
  {
    this.num1=n1;
    this.num2=n2;
   this. res=Number(n1)+Number(n2);
  }
  public Sub(n1:number,n2:number)
  {
    this.num1=n1;
    this.num2=n2;
    this.res=n1-n2;
  }

}
