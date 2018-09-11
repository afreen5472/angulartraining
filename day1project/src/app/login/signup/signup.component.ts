import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sign-up',
  template: '<my-sign></my-sign>'
})
export class SignupComponent implements OnInit {

  constructor() {
    console.log("SignupComponent constructor");
   }

  ngOnInit() {
  }

}
