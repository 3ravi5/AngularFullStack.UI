import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  constructor(private employeeService: EmployeeService, private router: Router) { }
  employeeRequest: Employee = {
    id: "00000000-0000-0000-0000-000000000000",
    name: "",
    email: "",
    phone: 0,
    address: "",
    salary: 0,
    department: ""
  }

  addEmployee() {
    this.employeeService.addEmployee(this.employeeRequest).subscribe({
      next: (response) => this.router.navigate(['employees'])
    })
  }
}
