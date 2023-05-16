import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees: Employee[] = []

  ngOnInit() {
    this.employees = [{
      name: "Test",
      email: "test@email.com",
      phone: 91273007,
      address: "Kolkata, WB",
      salary: 78340,
      department: "IT"
    },
    {
      name: "Test2",
      email: "test1@email.com",
      phone: 6454643,
      address: "Indore, MP",
      salary: 93432,
      department: "Account"
    },
    {
      name: "Test3",
      email: "test3@email.com",
      phone: 983643,
      address: "Banglaore, Karnataka",
      salary: 58637,
      department: "HR"
    }
    ]
  }
}
