import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import * as CanvasJS from './canvasjs.min';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
// import * as grade from './grade_df.json';

interface Boards {
  value: string;
  viewValue: string;
}

interface Grades {
  value: string;
  viewValue: string;
}

interface Subjects {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  grade: Object;
  hl: any;

  inputBoard : Boards[] = [{
    value: 'CBSE',
    viewValue: 'CBSE',
  },
  {
    value:'KSB',
    viewValue:'Karnataka',
  },
  {
    value: 'MSB',
    viewValue: 'Maharashtra',
  },
  {
    value: 'TSB',
    viewValue: 'Telangana',
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
  bw: any;

  constructor(private ds:DataService, private http: HttpClient) { }

  gradeData = {};
  ngOnInit(): void {
    this.getGradeData();
  }

  async getGradeData(){
    // this.ds.getGrade().subscribe((res) => {
    //   this.gradeData = res["jsonData"];
    //   this.renderGrade();
    //   console.log(this.gradeData);
    // });
    let data = await axios.get('http://localhost:2500/admin/getRdData');
    let data2 = await axios.get('http://localhost:2500/admin/getHlData');
    let data3 = await axios.get('http://localhost:2500/admin/getBWData');
    console.log(data);
    this.grade = data.data;
    console.log(this.grade);
    this.hl = data2.data;
    console.log(this.hl);
    this.bw = data3.data;
    this.renderGrade();
    this.renderHL();
    this.renderBW();
  }

  submitCourse(obj){
    console.log(obj);
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

  renderHL(){
    var chart = new CanvasJS.Chart("hl", {
      animationEnabled: true,
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      title: {
        text: "TECH"
      },
      axisY: {
        title: "# of Clicks",
        includeZero: false
      },
      axisX: {
        title: "Tech"
      },
      data: [{
        type: "column",
        yValueFormatString: "#,##0",
        dataPoints: [
          { label: this.hl["jsonData"][0]["Type"], y: this.hl["jsonData"][0]['Total'] },
          { label: this.hl["jsonData"][1]["Type"], y: this.hl["jsonData"][1]['Total'] },
        ]
      }]
    });
    chart.render();
  }
  renderBW(){
    var chart = new CanvasJS.Chart("bw", {
      animationEnabled: true,
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      title: {
        text: "Boards"
      },
      axisY: {
        title: "# of Clicks",
        includeZero: false
      },
      axisX: {
        title: "Boards"
      },
      data: [{
        type: "column",
        yValueFormatString: "#,##0",
        dataPoints: [
          { label: this.bw["jsonData"][0]["Board"], y: this.bw["jsonData"][0]['Total'] },
          { label: this.bw["jsonData"][1]["Board"], y: this.bw["jsonData"][1]['Total'] },
          { label: this.bw["jsonData"][2]["Board"], y: this.bw["jsonData"][2]['Total'] },
          { label: this.bw["jsonData"][3]["Board"], y: this.bw["jsonData"][3]['Total'] },
        ]
      }]
    });
    chart.render();
  }
        // [
        //   { name:this.hl["jsonData"][0]["Type"], y:this.hl["jsonData"][0]["Total"]},
        //   { name:this.hl["jsonData"][1]["Type"], y:this.hl["jsonData"][1]["Total"],}
        // ]
    //   }]
    // });
    // chart.render();

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
          { label: "Grade-1", y: this.grade["jsonData"][0]['Total'] },
          { label: "Grade-2", y: this.grade["jsonData"][1]['Total'] },
          { label: "Grade-3", y: this.grade["jsonData"][2]['Total'] },
          { label: "Grade-4", y: this.grade["jsonData"][3]['Total'] },
          { label: "Grade-5", y: this.grade["jsonData"][4]['Total'] },
        ]
      }]
    });
    chart.render();
  }



}
