import { ResumeDashboardComponent } from './resume-dashboard/resume-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component:ResumeDashboardComponent},
  {path:"resume",component:ResumeDashboardComponent},
  {path:"**",component:ResumeDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }