import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  schoolName: any;
  grade: any;
  subject: any;
  courseObj: Array<Object>;
  week1: any;
  week2: any;
  week3: any;
  constructor(private ds:DataService) { }

  ngOnInit(): void {
    
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
