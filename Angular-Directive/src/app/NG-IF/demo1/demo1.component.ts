import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
val:boolean=true
  constructor() { }

  ngOnInit() {
  }
  public Set()
  {
    this.val=!this.val;
  }

}
