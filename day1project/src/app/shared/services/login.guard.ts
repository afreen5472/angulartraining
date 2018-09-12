import { Injectable } from "../../../../node_modules/@angular/core";
import { CanActivate } from "../../../../node_modules/@angular/router";
import { LoginService } from "./login.service";

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private ls:LoginService) {}

    canActivate() {
        return this.ls.getIsLoggedIn();
    }
}