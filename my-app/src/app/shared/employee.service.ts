import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable,of, from } from 'rxjs';

import { map } from 'rxjs/operators';

import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  selectedEmployee: Employee={
    _id: '',
    name: '',
    email:[''],
    address:'',
    phonenumber:[''],
    message:''
  };
  employees?: Employee[];
  readonly baseURL = 'http://localhost:8555/employees';

  constructor(private http: HttpClient) { }

  postEmployee(emp?: Employee) {
    console.log("received");
    console.log(emp);
    return this.http.post(this.baseURL, emp);
  }
  checkt(){
    
  }
  getEmployeeList() {

    return this.http.get(this.baseURL);
  }

  putEmployee(emp: Employee) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}