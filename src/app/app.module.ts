import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router'
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
//import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
//import { UserlistComponent } from './userlist/userlist.component';
//import { UserlistComponent } from './userlist/userlist.component';
//import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    //BodyComponent,
    FooterComponent,
    //UserlistComponent,
    routingComponents,
    //UserlistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
