import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
 
  getValues(val:any){
    console.log(val);
  }
}
