import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { Interceptordemo } from './interceptordemo';
import { HomeComponent } from './home/home.component';

import { routing } from "./app.routing";

import { UserModule } from './userdisplay/user.module';
import { ProductModule } from './productdisplay/product.module';
import { AppCustomPreloader } from "./appcustompreloader";
import { AddtaskreactiveComponent } from './displaytask/addtaskreactive/addtaskreactive.component';
import { DisplaytaskComponent } from './displaytask/displaytask.component';
import { EdittaskreactiveComponent } from './displaytask/edittaskreactive/edittaskreactive.component';
import { EdittaskComponent } from './displaytask/edittask/edittask.component';
import { CustomerModule } from './customer/customer.module';
import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { DemoComponent } from './demo/demo.component';
import { Product1Component } from './product1/product1.component';
import { Product1Module } from './product1/product1.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PagenotfoundComponent,
    LoginComponent,
    HomeComponent,
    AddtaskreactiveComponent,
    DisplaytaskComponent,
    EdittaskreactiveComponent,
    EdittaskComponent,
    SignupReactiveDemoComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    UserModule,
    ProductModule,
    FormsModule,
    CustomerModule,
    Product1Module


  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:Interceptordemo,multi:true},
    AppCustomPreloader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
