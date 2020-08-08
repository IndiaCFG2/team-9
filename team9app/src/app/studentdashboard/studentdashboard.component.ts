import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

  incCounter(obj){
    this.ds.incStCounter(obj).subscribe((res) => {
      if(res["message"]=="Error"){
        console.log('Error while increasing counter');
      } else {
        console.log('Successfully increased count');
      }
    })
  }

}
