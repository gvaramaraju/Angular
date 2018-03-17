import { Component, OnInit } from '@angular/core';
import { Student } from '../student'
@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  social = ['facebook', 'google', 'pinterest', 'twitter']
  students = [['a','1','a@a.com'],['b','2','b@b.com'],['c', '3', 'c@c.com']]
  list_students = [new Student(1,'a',1,'a@a.com'), new Student(2,'b',2,'b@b.com'), new Student(3,'c',3,'c@c.com')]

}
