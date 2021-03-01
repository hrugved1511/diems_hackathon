import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HouseholdComponent } from './household/household.component';
import { IndustryFromComponent } from './industry-from/industry-from.component';
import { IndustryComponent } from './industry/industry.component';
import { LandcontractComponent } from './landcontract/landcontract.component';
import { LandfarmingComponent } from './landfarming/landfarming.component';
import { LandrentingComponent } from './landrenting/landrenting.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'industry',component:IndustryComponent},
  {path:'landcontract',component:LandcontractComponent},
  {path:'industryform',component:IndustryFromComponent},
  {path:'landrenting',component:LandrentingComponent},
  {path:'landfarming',component:LandfarmingComponent},
  {path:'household',component:HouseholdComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
