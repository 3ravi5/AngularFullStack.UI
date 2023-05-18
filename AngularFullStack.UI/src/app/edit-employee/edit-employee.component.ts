import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  updateEmployeeRequest: Employee = {
    id: "",
    name: "",
    email: "",
    phone: 0,
    address: "",
    salary: 0,
    department: ""
  }

  ngOnInit() {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.employeeService.getEmployeeById(id).subscribe({
            next: (response) => {
              this.updateEmployeeRequest = response;
            }
          })
        }
      }
    })
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.updateEmployeeRequest.id, this.updateEmployeeRequest).subscribe({

    })
  }

  deleteRequest(id: string) {
    this.employeeService.deleteEmployee(id).subscribe({
      next: (response) => {
        this.router.navigate(['employees']);
      }
    })
  }
}
