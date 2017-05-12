import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BehenceService } from './services/behence.service';
import { ProjectModule } from "./project/project.module";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    ProjectModule,
    AppRoutingModule
  ],
  providers: [BehenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
