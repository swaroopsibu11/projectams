import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from './body/body.component'
import { UserlistComponent } from './userlist/userlist.component';
//import { userlistComponent } from './userlist/userlist.component';
//import { userlistComponent } from './userlist/userlist.component';
//import { userlistComponent } from './userlist/userlist.component';
//import { from } from 'rxjs';

const routes: Routes = [{path:"newuser", component:BodyComponent},
{path:"userlist", component:UserlistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
export const routingComponents = [BodyComponent,UserlistComponent];
