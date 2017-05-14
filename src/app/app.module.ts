import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";

import { BehenceService } from './services/behence.service';
import { ProjectModule } from "./project/project.module";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProjectModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  entryComponents: [],
  providers: [BehenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
