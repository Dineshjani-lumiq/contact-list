import {Router} from '@angular/router'
import { Component,AfterViewInit } from '@angular/core';
import { NgForm ,FormGroup,FormArray,FormControl,Validators,ReactiveFormsModule} from '@angular/forms';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Article } from './contactlist';

declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements AfterViewInit {
  
   
 constructor(public employeeService: EmployeeService) { }
 allArticles?: Article[];
 usrNameChanges?: string;
  usrNameStatus?: string;
  formSubmitted = false;
   isValidFormSubmitted = false;
 unamePattern = "^[ a-zA-Z\-\']+$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  userForm = new FormGroup({
	name: new FormControl('', [Validators.pattern(this.unamePattern),Validators.minLength(5)] ),
skills: new FormArray([
new FormControl('', [Validators.minLength(5),Validators.pattern(this.emailPattern)]),
new FormControl('',Validators.pattern(this.emailPattern)),


])
,
	address: new FormControl('', Validators.required),
  message: new FormControl('', Validators.required),
	gender: new FormControl('male'),
users: new FormArray([
         
           
	   new FormControl('',Validators.pattern(this.mobnumPattern))
        ])
  });
  


  get userName(): any {
    return this.userForm.get('name');
  }
  ngAfterViewInit(): void {
        this.userForm.get('name')?.valueChanges.subscribe(data => this.usrNameChanges = data);
	this.userForm.get('name')?.statusChanges.subscribe(data => this.usrNameStatus = data);
  }  
  onFormSubmit(): void {
    console.log(this.userForm.value);
     var mp={
       address: this.userForm?.get('address')?.value,
email: this.userForm.get('skills')?.value,
message: this.userForm?.get('message')?.value,
name: this.userForm?.get('name')?.value,
phonenumber: this.userForm?.get('users')?.value,

_id: ""
    }
    console.log(this.users);
    this.employeeService.postEmployee(mp).subscribe((res) => {
        
       
      
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
   
this.refreshEmployeeList();
    this.formSubmitted = true;
     this.isValidFormSubmitted = true;
    if(this.userForm.valid) {
	this.logData();
	this.resetForm();
    } else {
	this.formSubmitted = false;
    }
  }
  resetForm() { 
    this.userForm.reset();
  }  
usernameExists(){

}

refreshEmployeeList() {
  
    this.employeeService.getEmployeeList().subscribe((res) => {
      console.log("jay shree ram");
      console.log(res); 
      this.allArticles?.push(res);
      console.log(JSON.stringify(res));
      this.employeeService.employees = res as Employee[];
      
    });
  }


  

  get users(): FormArray { 
    return this.userForm.get('users') as FormArray; 
  }
  get skills():FormArray{
return this.userForm.get('skills') as FormArray;
  }
  addUserField() { 
    this.users.push(new FormControl('',Validators.pattern(this.mobnumPattern))); 
  }
  deleteUserField(index: number) {
    if(this.users.length>1){
    this.users.removeAt(index);}

  }
  logData() {

    
	
	
  }



/*export function existingUsernameValidator(employeeService: EmployeeService ): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return employeeService.checkt(control.value).pipe(
        map(exist => {
           return exist ? {"usernameExists": true} : null;
        }
      ));
 };
} 
*/


}