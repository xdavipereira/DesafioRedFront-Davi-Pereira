import { Component, AfterViewInit } from '@angular/core';
import { BehenceService } from '../services/behence.service'


@Component({
    selector: 'projects_list',
    templateUrl: './projects_list.component.html',
    styleUrls: ['./projects_list.component.styl']
})


export class ProjectsListComponent implements AfterViewInit {
    constructor(private behenceService: BehenceService) {}

  projects: any;

  ngAfterViewInit(){
    this.getProjetos();
  }

  getProjetos(){
            this.behenceService.getUsers().subscribe(data => {
              this.projects = data.projects;
              console.log(this.projects);
            })
  }

}