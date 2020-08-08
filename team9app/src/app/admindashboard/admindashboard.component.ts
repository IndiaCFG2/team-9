import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private ds:DataService) { }

  ngOnInit(): void {
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



}
