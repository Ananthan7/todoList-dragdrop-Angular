import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SpinnerComponent } from './spinner/spinner.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'spinner', component:SpinnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
