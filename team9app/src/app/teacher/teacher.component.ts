import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Subjects {
  value: string;
  viewValue: string;
}

interface Grades {
  value: string;
  viewValue: string;
}

interface Schools {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
   grade: Object;
  hl: any;

  schoolName : Schools[] = [{
  value: 'A1',
  viewValue: 'School-1',
},
{
  value:'A2',
  viewValue:'School-2',
},
{
  value: 'A3',
  viewValue: 'School-3',
}
]


  inputGrade : Grades[] = [{
  value: 'G1',
  viewValue: 'Grade-1',
},
{
  value:'G2',
  viewValue:'Grade-2',
},
{
  value: 'G3',
  viewValue: 'Grade-3',
},
{
  value: 'G4',
  viewValue: 'Grade-4',
},
{
  value: 'G5',
  viewValue: 'Grade-5'
}
]


inputSubject : Subjects[] = [{
  value: 'ENG',
  viewValue: 'English',
},
{
  value:'MATH',
  viewValue:'Maths',
},
{
  value: 'EVS',
  viewValue: 'EVS',
},
]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submitValues(obj){
    console.log(obj);
    this.router.navigate(['teacher/dashboard']);
  }

}
