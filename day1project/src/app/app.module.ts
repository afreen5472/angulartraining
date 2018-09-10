import { NgModule } from "@angular/core";
import { Appcomponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { BrowserModule} from "@angular/platform-browser";
import { LoginModule } from "./login/login.module";
import { ShoppingModule } from "./shopping/shopping.module";

@NgModule({
    //registration
    declarations: [Appcomponent, HeaderComponent],
    bootstrap: [Appcomponent],
    imports: [BrowserModule, LoginModule, ShoppingModule]
})
export class AppModule {
    constructor() {
        console.log("AppModule costructor.");
    }
}