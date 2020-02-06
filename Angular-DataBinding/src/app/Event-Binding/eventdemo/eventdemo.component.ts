import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdemo',
  templateUrl: './eventdemo.component.html',
  styleUrls: ['./eventdemo.component.css']
})
export class EventdemoComponent implements OnInit {
name:string;
  constructor() {}

  ngOnInit() {
  }
  public setName()
  {
    this.name="Ram";
  }
  public Greet(val:string)
{
  this.name=val;

}

}
