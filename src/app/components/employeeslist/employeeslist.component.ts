import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html', 
  styleUrls: ['./employeeslist.component.css']
})
export class EmployeeslistComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

  deleteEmployee(id: string): void {
    this.employeeService.deleteEmployee(id);
    this.employees = this.employeeService.getEmployees(); // Refrescar la lista
  }

  editEmployee(employee: any): void {
    this.router.navigate(['/form'], { state: { employee } });
  }
}