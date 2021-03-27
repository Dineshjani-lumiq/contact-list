import { NgModule } from '@angular/core';
import {EmployeeComponent} from './employee/employee.component';
import {ListComponent}  from './list/list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'homepage',component:EmployeeComponent},
   {path:'listof',component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[EmployeeComponent,ListComponent]
