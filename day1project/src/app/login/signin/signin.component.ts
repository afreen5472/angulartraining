import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'sign-in',
  template: `<h4>Welcome {{signInUser}}</h4>
  <my-sign [title]="signInHeading" (myEvent)="handleMyEvent($event)"></my-sign>`,
})
export class SigninComponent implements OnInit, OnDestroy {

  constructor() { 
    console.log("SigninComponent constructor");
  }
  
  signInUser = "Guest";
  signInHeading = "Sign In";

  handleMyEvent(obj) {
    this.signInUser = obj.usr;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("My Sign destroy");
  }

}
