import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { 
    console.log('LoginComponent constructor');
  }

  ngOnInit() {
  }

}

@Component({
  template : "<h2>You have logged Out..</h2>"
})
export class SignOutComponent {
  constructor(private ls:LoginService) {}

  ngOnInit() {
    this.ls.setIsLoggedIn(false);
  }
}

@Component({
  template: "<h1>Invalid credentials !!</h1>"
})
export class ErrorComponent {

}
