import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
  /*{path:'aboutus',component:AboutusComponent},
  {path:'home',component:HomeComponent},
  {path:'becomechef',component:BecomechefComponent},
  {path:'menu', component:MenuComponent},
  {path:'becomerider',component:BecomeriderComponent},
  {path:'cart',component:CartComponent},
  {path:'chefdashboard', component:ChefdashboardComponent},
  {path:'riderdashboard',component:RiderdashboardComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
