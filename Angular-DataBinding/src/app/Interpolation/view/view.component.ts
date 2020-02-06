import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  obj: { Sid: number; Sname: string; Age: number; };

  constructor() {
    this.obj={Sid:1,Sname:'Ram',Age:23};
   }

  ngOnInit() {
  }

}
