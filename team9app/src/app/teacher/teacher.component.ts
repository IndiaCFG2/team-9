import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submitValues(obj){
    console.log(obj);
    this.router.navigate(['teacher/dashboard']);
  }

}
