import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-teacherdashboard',
  templateUrl: './teacherdashboard.component.html',
  styleUrls: ['./teacherdashboard.component.css']
})
export class TeacherdashboardComponent implements OnInit {
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

openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

  getValues(){
    let sendObj = {
      schoolName:this.schoolName,
      grade: this.grade,
      subject: this.subject
    }
    this.ds.getCourses(sendObj).subscribe((res) => {
      if(res["message"]=="Error while getting"){
        alert('Error');
      } else {
        this.courseObj = res["arrObj"];
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

  enableCourse(courseName) {
    let courseObj = {
      courseName,
      schoolName: this.schoolName
    }
    this.ds.enableCourse(courseObj).subscribe((res) => {
      if(res["message"]=="Error while updating"){
        alert("Error while updating");
    } else {
        alert("Successfully updated");
    }
    })
  }

  incCounter(obj){
    this.ds.incTCounter(obj).subscribe((res) => {
      if(res["message"]=="Error"){
        console.log('Error while increasing counter');
      } else {
        console.log('Successfully increased count');
      }
    })
  }




  

}
