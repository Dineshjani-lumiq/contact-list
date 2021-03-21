import { Component,AfterViewInit } from '@angular/core';
import { NgForm ,FormGroup,FormArray,FormControl,Validators,ReactiveFormsModule} from '@angular/forms';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements AfterViewInit {
  /*
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
phonePattern="[- +()0-9]+";

  constructor(public employeeService: EmployeeService) { }
   userForm = new FormGroup({
    users: new FormArray([
      new FormControl('Mahesh'),
      new FormControl('Krishna'),
      new FormControl()
    ])
  });
  get users(): FormArray { 
     return this.userForm.get('users') as FormArray; 
  }
  addUserField() { 
    console.log("ram");
     this.users.push(new FormControl()); 
  }
  deleteUserField(index: number) {
     this.users.removeAt(index);
  }
  ngOnInit() {
    this.resetForm();
    this.refreshEmployeeList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.employeeService.selectedEmployee = {
      _id: "",
      name: "",
      email: "",
      phonenumber:[],
      address: "",
      message:""
    }
  }


  onSubmit(form: NgForm) {
    if (form.value._id == "") {
    var mp={
       address: "jg",
email: "djani_be17@thapar.edu",
message: "vhvv",
name: "thor",
phonenumber: "54641303",
_id: ""
    }
      this.employeeService.postEmployee(mp).subscribe((res) => {
        console.log(form.value);
        this.resetForm(form);
      
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
    });
  }

  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeeList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
  */
 constructor(public employeeService: EmployeeService) { }
 usrNameChanges?: string;
  usrNameStatus?: string;
  formSubmitted = false;
   isValidFormSubmitted = false;
 unamePattern = "^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  userForm = new FormGroup({
	name: new FormControl('', ),
email: new FormControl('', [Validators.email,Validators.pattern(this.emailPattern)]),
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
     var mp={
       address: this.userForm?.get('address')?.value,
email: this.userForm?.get('email')?.value,
message: this.userForm?.get('message')?.value,
name: this.userForm?.get('name')?.value,
phonenumber: this.users.value,
_id: ""
    }
    console.log(this.users);
    this.employeeService.postEmployee(mp).subscribe((res) => {
        
       
      
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });

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



  
  setAge() { 
    this.userForm.get('age')?.setValue('20');
  }  
  setCountry() { 
    this.userForm?.get('address')?.get('country')?.setValue('India');
  }    
  get users(): FormArray { 
    return this.userForm.get('users') as FormArray; 
  }
  addUserField() { 
    this.users.push(new FormControl()); 
  }
  deleteUserField(index: number) {
    if(this.users.length>1){
    this.users.removeAt(index);}

  }
  logData() {
    console.log(this.userForm.value);
	 console.log('Name:' + this.userForm?.get('name')?.value);
	 console.log('Age:' + this.userForm.get('age')?.value);	 
	 console.log('Gender:'+ this.userForm?.get('gender')?.value);	 
	 console.log('Profile:'+this.userForm?.get('profile')?.value);	 

	 //print address
	 let addressFG = this.userForm?.get('address');
	 console.log('House Number: ' + addressFG?.get('houseNumber')?.value);	 
	 console.log('City:' + addressFG?.get('city')?.value);
	 console.log('Country:' + addressFG?.get('country')?.value);
	
	//Iterate FormArray
	 for(let i = 0; i < this.users.length; i++) {
	   console.log(this.users.at(i).value);
	 }
         // Gives complete address
	 console.log(addressFG?.value); 
         //Checks address validation	 
	 console.log(addressFG?.valid); 
         // Gives complete FormArray data	 
	 console.log(this.users?.value); 
         //Checks FormArray validation	 	
	 console.log(this.users?.valid); 	 
         // Gives Complete form data	 	 
	 console.log(this.userForm?.value); 
         // checks Complete form validation	 	 
	 console.log(this.userForm?.valid);	 
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