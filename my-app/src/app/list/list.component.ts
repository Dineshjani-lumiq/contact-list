import { Employee } from './../shared/employee.model';
import { EmployeeService } from './../shared/employee.service';
import { Component, OnInit } from '@angular/core';
 import { MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSortModule } from "@angular/material/sort";
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
   providers: [EmployeeService]

})
export class  ListComponent implements OnInit {
  

dataSource: Employee[]=[];
  constructor(public employeeService: EmployeeService) { 
    
  }
  

  ngOnInit() {
     

    this.refreshEmployeeList();
  }


  refreshEmployeeList() {
    
      this.employeeService.getEmployeeList().subscribe(
        posts => { this.employeeService.employees = posts as Employee[];
          this.dataSource=posts as Employee[];
         }
    );
    
   
  }

  
}

