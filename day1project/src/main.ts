import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

// import { Employee } from "./demo";
// console.log("From main.");

// let e: Employee = new Employee();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));