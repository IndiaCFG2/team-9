import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import * as CanvasJS from './canvasjs.min';
import { HttpClient } from '@angular/common/http';
// import * as grade from './grade_df.json';


@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  grade: Object;

  constructor(private ds:DataService, private http: HttpClient) { }

  gradeData = {};
  ngOnInit(): void {
    this.getGradeData();
  }

  getGradeData(){
    this.ds.getGrade().subscribe((res) => {
      this.gradeData = res["jsonData"];
      this.renderGrade();
      console.log(this.gradeData);
    });
  }

  submitCourse(obj){
    obj["enable"] = 0
    obj["schools"] = []
    this.ds.submitCourse(obj).subscribe((res) => {
      if(res["message"]=="Error while inserting"){
        console.log(res["message"]);
        alert(res["message"]);
      } else {
        alert('Successfully added');
      }
    });
  }

  renderGrade(){


    var chart = new CanvasJS.Chart("grade", {
      animationEnabled: true,
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      title: {
        text: "Grade"
      },
      axisY: {
        title: "# of Clicks",
        includeZero: false
      },
      axisX: {
        title: "Grade"
      },
      data: [{
        type: "column",
        yValueFormatString: "#,##0",
        dataPoints: [
          { label: "Grade-1", y: this.grade[0]['Total'] },
          { label: "Grade-2", y: this.grade[1]['Total'] },
          { label: "Grade-3", y: this.grade[2]['Total'] },
          { label: "Grade-4", y: this.grade[3]['Total'] },
          { label: "Grade-5", y: this.grade[4]['Total'] },
        ]
      }]
    });
    chart.render();
  }



}
