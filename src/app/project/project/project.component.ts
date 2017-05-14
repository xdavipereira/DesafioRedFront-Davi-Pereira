import {
  Component,
  OnInit,
  AfterViewInit,
} from '@angular/core';

import {
  Router,
  ActivatedRoute,
  Params
} from '@angular/router';


import { BehenceService } from "../../services/behence.service";
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs';


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

  project: any;
  comments: any;

  ngOnInit(){
    let id = +this.route.snapshot.params['id'];
    // this.getDataFromProject(id);
    this.getProject(id);
    this.getCommentsProject(id);
  }

  getDataFromProject(id ){
      Observable.forkJoin([ this.behanceService.getProject(id), this.behanceService.getCommentsProject(id)])
        .subscribe(results => {
          let project = results[0];
          let comments = results[1];
          console.log("oi");
        });
  }

  getProject(id){
    this.behanceService.getProject(id).subscribe((response) =>{ 
                  this.project = response.project;
                  console.log(this.project);
    });
  }

  getCommentsProject(id){
        this.behanceService.getCommentsProject(id).subscribe((response) =>{ 
                  this.comments = response.comments;
                  console.log(this.comments);
    });
  }

}

