import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor() {
    this.phone = '1234568790';
    this.email = 'name@name.com';
   }

  ngOnInit() {
  }

  name = "Raju";
  title = "Angular App";
  phone : string;
  email : string;




}
