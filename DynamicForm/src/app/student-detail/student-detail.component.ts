import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { states, types, Address } from '../data-model'

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor(private fb : FormBuilder) { 
    this.createStudentForm();
  }

  ngOnInit() {
  }

  studentForm : FormGroup;
  states = states;
  types = types;
  createStudentForm(){
    this.studentForm = this.fb.group({
      name : ['', Validators.required],
      addresses : this.fb.group(new Address())
    })

  } 
  


} 
