import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo2';
  UserName:string="Ram";
  Customer:any[]=[{"name":'Raj',"country":'India',"age":23},
  {"name":'Ram',"country":'UK',"age":24},
  {"name":'Ravi',"country":'USA',"age":25}];

StudentbyCountry:any[]=[{
  "country":"India","student":[{"name":"jay","age":23},{"name":"Ram","age":24},{"name":"Raj","age":25}]},
  {"country":"USA","student":[{"name":"jay","age":23},{"name":"Ram","age":24},{"name":"Raj","age":25}]}
];
}