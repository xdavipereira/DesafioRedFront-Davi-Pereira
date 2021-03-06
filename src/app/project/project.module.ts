import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ProjectsListComponent } from "../projects_list/projects_list.component";
import { ProjectComponent} from '../project/project.component'

import { ProjectRoutingModule } from './project-routing.module'
import { ToolsComponent } from '../tools/tools.component'
import { ProjectCardComponent } from '../project_card/project-card.component'
import { SharedModule } from "../shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProjectRoutingModule
  ],
  declarations: [
      ProjectsListComponent,
      ProjectComponent
  ],
  exports: [],
  providers: [ ]
})

export class ProjectModule {}