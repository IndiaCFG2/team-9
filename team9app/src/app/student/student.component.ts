import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';



interface Grades {
  value: string;
  viewValue: string;
}

interface Schools {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  
  grade: any;
  subject: any;
  courseObj: Array<Object>;
  week1: any;
  week2: any;
  week3: any;
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




  constructor(private ds:DataService) { }

  ngOnInit(): void {
    
  }
  submitForm(obj){

  }
  

  getValues(){
    let sendObj = {
      schoolName:this.schoolName,
      grade: this.grade,
      subject: this.subject
    }
    this.ds.getStudentCourses(sendObj).subscribe((res) => {
      if(res["message"]=="Error while getting"){
        alert('Error');
      } else {
        this.courseObj = res["reqObj"];
        this.courseObj.forEach(el => {
          if(el["week"]=='W1'){
            this.week1.push(el);
          } else if(el["week"]=='W2'){
            this.week2.push(el);
          } else {
            this.week3.push(el);
          }
        })
      }
    });
  }

}
