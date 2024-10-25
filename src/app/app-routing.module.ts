import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { EmployeeslistComponent } from './components/employeeslist/employeeslist.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'employees', component: EmployeeslistComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
