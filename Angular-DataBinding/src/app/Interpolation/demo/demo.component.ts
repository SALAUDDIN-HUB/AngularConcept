import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
name:string="ram";
class:string="IT";
age:Number=23;
  constructor() { }

  ngOnInit() {
  }

}
