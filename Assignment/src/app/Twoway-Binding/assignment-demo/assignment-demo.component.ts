import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/Models/details';

@Component({
  selector: 'app-assignment-demo',
  templateUrl: './assignment-demo.component.html',
  styleUrls: ['./assignment-demo.component.css']
})
export class AssignmentDemoComponent implements OnInit {
item:Details;
UserName:string="ADMIN";
Password:string='12345';
output:string;
  constructor() {
    this.item=new Details();
   }

  ngOnInit() {
  }
  public login(uname:string,pass:string)
  {
    if(this.item.UserName=="ADMIN"&&this.item.Password=='12345')
    {
    this.output="login successful";
    }
    else{
      this.output="login Unsuccessful";
    }
    
  }

}
