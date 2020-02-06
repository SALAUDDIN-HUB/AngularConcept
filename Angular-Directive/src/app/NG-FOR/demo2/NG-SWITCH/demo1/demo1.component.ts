import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  item:any[]=[
    {name:"one",val:1},
    {name:"two",val:2},
    {name:"three",val:3}
  ];
  selectedValue:string= 'one';

  constructor() { }

  ngOnInit() {
  }

}
