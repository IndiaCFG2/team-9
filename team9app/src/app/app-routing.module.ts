import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'student', component:StudentComponent},
  {path:'teacher', component:TeacherComponent},
  {path:'about', component:AboutComponent},
  {path:'admin', component:AdminComponent},
  {path:'aboutus', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
