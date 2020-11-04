import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OurDriverComponent } from './our-driver/our-driver.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path : '', component : LandingPageComponent }, 
  {path : 'dash', component : DashboardComponent },  
  {path : 'driver', component : OurDriverComponent }, 
  {path : 'about', component : AboutComponent }, 
  {path : '', component : LandingPageComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
