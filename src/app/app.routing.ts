import { Routes,RouterModule, PreloadAllModules } from "@angular/router";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserGuardService } from './user-guard.service';
import { AddtaskreactiveComponent } from './displaytask/addtaskreactive/addtaskreactive.component';
import { DisplaytaskComponent } from './displaytask/displaytask.component';
import { EdittaskreactiveComponent } from './displaytask/edittaskreactive/edittaskreactive.component';
import { EdittaskComponent } from './displaytask/edittask/edittask.component';
import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { DemoComponent } from './demo/demo.component';

const arr : Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'tasks',component:DisplaytaskComponent},
  {path:'edittask/:id',component:EdittaskComponent},

  {path:'addtaskreactive',component:AddtaskreactiveComponent},
  {path:'edittaskreactive/:id',component:EdittaskreactiveComponent},
  {path:'signup2',component:SignupReactiveDemoComponent},
  {path:'demo',component:DemoComponent},
  {path:'customer',data:{preload:true},loadChildren:'./customer/customer.module#CustomerModule'},
  {path:'user1',loadChildren:'./users/users.module#UsersModule'},
  {path:'product',canLoad:[UserGuardService],loadChildren:'./productdisplay/product.module#ProductModule'},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'**',redirectTo:'/pagenotfound'}
];

export const routing=RouterModule.forRoot(arr,{preloadingStrategy:PreloadAllModules});
