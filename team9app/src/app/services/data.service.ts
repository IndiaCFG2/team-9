import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc: HttpClient) { }

  submitCourse(obj){
    return this.hc.post('/admin/addcourse', obj);
  }
  getBoard(obj){
    return this.hc.get('/admin/getBoard', obj);
  }
  getCourses(obj){
    return this.hc.get('/admin/getcourse', obj);
  }
  enableCourse(obj){
    return this.hc.post('/admin/enablecourse', obj);
  }
  getStudentCourses(obj){
    return this.hc.post('/admin/getstudentcourses', obj);
  }
  incStCounter(obj){
    return this.hc.post('/admin/stinccounter', obj)
  }
  incTCounter(obj){
    return this.hc.post('/admin/tinccounter', obj);
  }

  getGrade(){
    return this.hc.get('/getRdData');
  }

  
}
