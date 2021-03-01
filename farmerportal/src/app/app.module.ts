import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandcontractComponent } from './landcontract/landcontract.component';
import { LandrentingComponent } from './landrenting/landrenting.component';
import { LandfarmingComponent } from './landfarming/landfarming.component';
import { IndustryComponent } from './industry/industry.component';
import { IndustryFromComponent } from './industry-from/industry-from.component';
import { HttpClientModule} from '@angular/common/http';
import { HouseholdComponent } from './household/household.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LandcontractComponent,
    LandrentingComponent,
    LandfarmingComponent,
    IndustryComponent,
    IndustryFromComponent,
    HouseholdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

