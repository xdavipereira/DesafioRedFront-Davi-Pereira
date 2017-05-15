import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { UserComponent } from "./user.component";
import { UserRoutingModule } from './user-routing.module'
import { ToolsComponent } from '../tools/tools.component'
import { ProjectCardComponent } from '../project_card/project-card.component'
import { SharedModule } from "../shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    UserRoutingModule
  ],
  declarations: [
      UserComponent,

  ],
  providers: [ ]
})

export class UserModule {}