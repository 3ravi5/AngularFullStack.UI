import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees()
      .subscribe({
        next: (response) => {
          this.employees = response;
        },
        error: (response) => {
          console.log(response)
        }
      })
  }
}
