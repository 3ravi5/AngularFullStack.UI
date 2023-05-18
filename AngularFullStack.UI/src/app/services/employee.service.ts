import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  basiApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.basiApiUrl + '/api/Employees');
  }

  addEmployee(employeeData: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.basiApiUrl + '/api/Employees', employeeData);
  }

  getEmployeeById(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.basiApiUrl + '/api/Employees/' + id);
  }

  updateEmployee(id: string, updateReqest: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.basiApiUrl + '/api/employees/' + id, updateReqest);
  }

  deleteEmployee(id: string): Observable<Employee> {
    return this.http.delete<Employee>(this.basiApiUrl + '/api/Employees/' + id);
  }
}
