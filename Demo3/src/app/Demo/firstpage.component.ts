import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  title:string="FirstPage"
  name:string="User"
  

  constructor() { }

  ngOnInit() {
  }

}
