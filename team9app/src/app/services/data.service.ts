import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc: HttpClient) { }

  submitCourse(obj){
    return this.hc.post('/addcourse', obj);
  }
  getBoard(obj){
    return this.hc.get('/getBoard', obj);
  }
  getCourses(obj){
    return this.hc.get('/getcourse', obj);
  }
  enableCourse(obj){
    return this.hc.post('/enablecourse', obj);
  }
  getStudentCourses(obj){
    return this.hc.post('/getstudentcourses', obj);
  }
  incStCounter(obj){
    return this.hc.post('/stinccounter', obj)
  }
  incTCounter(obj){
    return this.hc.post('/tinccounter', obj);
  }
  
}
