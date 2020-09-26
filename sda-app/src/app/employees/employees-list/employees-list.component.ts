import { Component, OnInit } from "@angular/core";

import { Employee } from "./shared/employee.model";
import { EmployeesService } from "./shared/employees.service";

@Component({
  selector: "app-employees-list",
  templateUrl: "./employees-list.component.html",
  styleUrls: ["./employees-list.component.scss"],
  providers:  [ EmployeesService ]
})
export class EmployeesListComponent implements OnInit {
  employee: Employee[] = [];

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  private loadEmployees(): void {
    this.employeesService
      .getEmployees()
      .then(employees => (this.employee = employees));
    }
}

