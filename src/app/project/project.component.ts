import { Component,OnInit, AfterViewInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { BehenceService } from "../services/behence.service";

import { Observable } from 'rxjs';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';


@Component({
  selector: 'project-component',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.styl']
})

export class ProjectComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private behanceService: BehenceService
  ) {}

  project: Array<any>;
  comments: Array<any>;
  userProjects: Array<any>;

  ngOnInit(){
    let id = +this.route.snapshot.params['id'];
    this.getDataFromProject(id);
  }

  getDataFromProject(id: number){
      this.behanceService.getProject(id)
      .flatMap(data => {
        this.project = data.project;
        return this.behanceService.getUserProjects(data.project.creator_id);
      
    }).flatMap(data => {
        this.userProjects = data.projects;
        return this.behanceService.getCommentsProject(id);
    
    })
      .subscribe(data => {
        this.comments = data.comments;
  
    });
  }
}

