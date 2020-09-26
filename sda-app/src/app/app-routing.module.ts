import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';

const routes: Routes = [
  { path: "employees-list", component: EmployeesListComponent },
  { path: "**", component: EmployeesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
