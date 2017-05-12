import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ProjectsListComponent } from "./projects_list/projects_list.component";
import { ProjectComponent} from './project/project.component'

import { ProjectRoutingModule } from './project-routing.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectRoutingModule
  ],
  declarations: [
      ProjectsListComponent,
      ProjectComponent
  ],
  providers: [ ]
})

export class ProjectModule {}