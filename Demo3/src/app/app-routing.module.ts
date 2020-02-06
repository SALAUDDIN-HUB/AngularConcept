import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstpageComponent } from './Demo/firstpage.component';
import { SecondpageComponent } from './Demo/secondpage.component';

const routes: Routes = [{path:'secondpage',component:SecondpageComponent},
{path:'firstpage',component:FirstpageComponent},{path:"",redirectTo:"/firstpage",pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
