import { Component, OnInit } from '@angular/core';
import { Student } from '../student'

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  } 
  // Change counter = 0 to see the output
  counter = 2 ;
  students = [new Student(1,'a',1,'a@a.com')]
  
}
