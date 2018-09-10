import { Component } from '@angular/core';

@Component({
    selector: "app-header",
    template: "Header Component"
})
export class HeaderComponent {
    constructor(){
        console.log("Header Component!!!");
    }
}