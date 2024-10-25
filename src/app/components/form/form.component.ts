import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  employeeForm: FormGroup;
  employee: any = null; // Para almacenar los datos del empleado

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private router: Router) {
    this.employeeForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', Validators.required],
      departamento: ['', Validators.required],
      jefe: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      salario: ['', Validators.required],
      comisiones: ['', Validators.required],
      manager: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Recibe el estado enviado desde el componente de la lista
    if (history.state && history.state.employee) {
      this.employee = history.state.employee;
      this.populateForm();
    }
  }

  // Método para cargar los datos del empleado en el formulario
  populateForm(): void {
    this.employeeForm.patchValue({
      id: this.employee.id,
      nombre: this.employee.nombre,
      apellido: this.employee.apellido,
      email: this.employee.email,
      celular: this.employee.celular,
      departamento: this.employee.departamento,
      jefe: this.employee.jefe,
      fechaNacimiento: this.employee.fechaNacimiento,
      salario: this.employee.salario,
      comisiones: this.employee.comisiones,
      manager: this.employee.manager
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      if (this.employee) {
        // Si ya existe un empleado, lo actualiza
        this.employeeService.updateEmployee(this.employee.id, this.employeeForm.value);
      } else {
        // Si no existe, añade un nuevo empleado
        this.employeeService.addEmployee(this.employeeForm.value);
      }
      this.router.navigate(['/employees']); // Redirige a la lista de empleados
    }
  }
}