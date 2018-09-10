
import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  template: '<h3>This is my first component</h3><app-header></app-header>'
  // styleUrls: ['./app.component.css']
})
export class Appcomponent {
  constructor() {
    console.log("AppComponent constructor");
  }
}