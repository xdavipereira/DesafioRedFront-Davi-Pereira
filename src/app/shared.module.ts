import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ToolsComponent } from './tools/tools.component'
import { ProjectCardComponent } from './project_card/project-card.component'


@NgModule({
   imports: [CommonModule,RouterModule],
   declarations: [ToolsComponent, ProjectCardComponent],
   providers: [],
   exports: [ToolsComponent, ProjectCardComponent],
})

export class SharedModule { }