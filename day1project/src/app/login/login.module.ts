import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from './../shared/shared.module';

let loginRoutes = [
  {path: "signin", component:SigninComponent},
  {path: "signup", component: SignupComponent}
]
@NgModule({
  declarations: [LoginComponent, SigninComponent, SignupComponent],
  imports: [RouterModule.forChild(loginRoutes), SharedModule]
})
export class LoginModule { 
  constructor() {
    console.log('LoginModule constructor');
  }
}
