import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProjectsListComponent } from "./projects/projects_list.component";
import { BehenceService } from './services/behence.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BehenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
