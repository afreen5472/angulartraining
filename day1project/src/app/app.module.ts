import { NgModule } from "@angular/core";
import { Appcomponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { BrowserModule} from "@angular/platform-browser";
import { LoginModule } from "./login/login.module";
import { ShoppingModule } from "./shopping/shopping.module";
import { SharedComponent } from './shared/shared.component';
import { ProductsComponent } from "./shopping/products/products.component";
import { CartitemsComponent } from "./shopping/cartitems/cartitems.component";

@NgModule({
    //registration
    declarations: [Appcomponent, HeaderComponent, SharedComponent, ProductsComponent, CartitemsComponent],
    bootstrap: [Appcomponent],
    imports: [BrowserModule, LoginModule]
})
export class AppModule {
    constructor() {
        console.log("AppModule costructor.");
    }
}