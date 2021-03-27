import { from } from 'rxjs';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {MaterialModule} from './material/material.module'
import {AppRoutingModule,routingComponents} from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
  routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
     ReactiveFormsModule,
     AppRoutingModule,
     RouterModule,
     MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
