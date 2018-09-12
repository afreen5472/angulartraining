import { Injectable } from "../../../../node_modules/@angular/core";


@Injectable()
export class LoginService {
    private userData:string = "Visitor";
    private isLoggedIn:boolean = false;

    getIsLoggedIn() {
        return this.isLoggedIn;
    }
    setIsLoggedIn(newVal:boolean) {
        this.isLoggedIn = newVal;
    }
    getUserData() {
        return this.userData;
    }
    setUserData(newVal:string) {
        this.userData = newVal;
    }
}