import { TestBed } from "@angular/core/testing";
import { SignupComponent } from "./signup.component";
import { MysignComponent } from "../../shared/mysign/mysign.component";

describe("SignUP component Test", () => {
    it("SHould create instance of signup component", ()=> {
        TestBed.configureTestingModule({
            declarations: [SignupComponent, MysignComponent]
        })
        let f = TestBed.createComponent(SignupComponent);

        expect(f).toBeDefined();
    })

})