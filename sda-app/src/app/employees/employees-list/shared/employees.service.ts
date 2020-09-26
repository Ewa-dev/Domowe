import { EMPLOYEES } from "./mock-employees";
import { Employee } from "./employee.model";
import { Injectable } from "@angular/core";

@Injectable()
export class EmployeesService {
  getEmployees(): Promise<Employee[]> {
    return Promise.resolve(EMPLOYEES);
  }
}



