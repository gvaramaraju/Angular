import { Component } from '@angular/core';
import {FormGroup,FormArray,FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb: FormBuilder){
    this.dateForm = this.fb.group({
      dates: this.fb.array([
      ])
    })
  }
  dates : FormArray 
  dateForm : FormGroup
  createDateField(){
    return this.fb.group({
      date:''
    }) 
  }
  addDateField(){
    this.dates = this.dateForm.get('dates') as FormArray;
    this.dates.push (this.createDateField());
  }
  deleteDateField(i){
    this.dates = this.dateForm.get('dates') as FormArray;
    this.dates.removeAt(i);
  }
   


}
