import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: any[] = [];

  constructor() { }

  getEmployees() {
    return this.employees;
  }

  addEmployee(employee: any) {
    this.employees.push(employee);
  }

  updateEmployee(id: string, updatedEmployee: any): void {
    const index = this.employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
    }
  }

  deleteEmployee(id: string) {
    this.employees = this.employees.filter(emp => emp.id !== id);
  }
}