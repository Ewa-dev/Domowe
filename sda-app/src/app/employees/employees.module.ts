import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesService } from './employees-list/shared/employees.service';


@NgModule({
  declarations: [EmployeesListComponent],
  imports: [CommonModule],
  exports: [EmployeesListComponent],
  providers: [EmployeesService],
})
export class EmployeesModule {}





