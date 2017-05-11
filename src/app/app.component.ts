import { Component, OnInit,AfterViewInit } from '@angular/core';
import { BehenceService } from './behence.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements AfterViewInit {
  
  constructor(private behenceService: BehenceService){
  }

  projects: any;

  ngAfterViewInit(){
    // this.openModal();
  }

  openModal(){
            this.behenceService.getUsers().subscribe(data => {
              this.projects = data.projects;
              console.log(this.projects);
            })
  }

}
