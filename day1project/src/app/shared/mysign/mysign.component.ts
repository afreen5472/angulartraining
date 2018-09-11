import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'my-sign',
  template: `<h3>{{title}}</h3>
  <form>
    Username: <input type="text", placeholder="Enter user name" #frmUsr><br>
    Password: <input type="password", placeholder="Enter password *#frmPwd">
    <button type="button" class="btn btn-primary" (click)="handleButtonclick(frmUsr.value, frmPwd.value)">Submit</button>
  </form>
  `
})
export class MysignComponent implements OnInit {

  constructor() { 
    console.log("MysignComponent constrctor");
  }

  @Input()
  title:String;

  @Output()
  myEvent = new EventEmitter();
  handleButtonclick(usr, pwd):void {
    console.log("handleButtonclick");
    this.myEvent.emit({usr, pwd});
  }


  ngOnInit() {
  }

}
