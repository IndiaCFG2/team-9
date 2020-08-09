import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path:'/', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'student', component:StudentComponent},
  {path:'teacher', component:TeacherComponent},
  {path:'about', component:AboutComponent},
  {path:'admin', component:AdminComponent},
  {path:'aboutus', component:AboutComponent},
  {path:'student/dashboard', component:StudentdashboardComponent},
  {path:'teacher/dashboard', component:TeacherdashboardComponent},
  {path:'admin/dashboard', component:AdmindashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
