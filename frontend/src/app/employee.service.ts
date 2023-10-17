import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = 'http://localhost:8080/employee';

  employee: Employee = {};

  constructor(private http: HttpClient) { }

  save(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}/save`, emp, {
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  }

  async getEmployees(): Promise<Employee[]> {
    // this.http.get<Employee[]>(`${this.baseUrl}/employee`);
    let data = await fetch(`${this.baseUrl}`);
    return await data?.json();
  }


  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

}
