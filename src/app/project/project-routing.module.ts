import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from "./projects_list/projects_list.component";
import { ProjectComponent } from "./project/project.component";

const projectRoutes: Routes = [
  { path: 'projects',        component: ProjectsListComponent },
  { path: 'project/:id',        component: ProjectComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(projectRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectRoutingModule { }