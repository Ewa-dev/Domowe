import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { EmployeesService } from './employees/employees-list/shared/employees.service';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }



