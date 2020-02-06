import { Component, OnInit } from '@angular/core';
import { Project } from '../Models/project';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.css']
})
export class Demo4Component implements OnInit {
  list:Project[]=[];
  projectid:number;
    projectname:string;
    projectDomain:string;
    projectStartDate:Date;
    projectEndDate:Date;
    item:Project;


  constructor() { }

  ngOnInit() {
  }
  public submit()
  {
    this.item=new Project();
    this.item.projectid=this.projectid;
    this.item.projectname=this.projectname;
    this.item.projectDomain=this.projectDomain;
    this.item.projectStartDate=this.projectStartDate;
    this.item.projectEndDate=this.projectEndDate;
    this.list.push(this.item);

  }

}
