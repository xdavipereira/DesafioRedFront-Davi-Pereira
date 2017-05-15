import { Component,OnInit, AfterViewInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { BehenceService } from "../services/behence.service";

import { Observable } from 'rxjs';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';


@Component({
  selector: 'user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.styl']
})

export class UserComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private behanceService: BehenceService
  ) {}

  user: Array<any>;
  userProjects: Array<any>;

  ngOnInit(){
    let id = +this.route.snapshot.params['id'];
    console.log(id);
    this.getDataFromUser(id);
  }

  getDataFromUser(id: number){
    this.behanceService.getUser(id)
      .flatMap(data => {
        this.user = data.user;
        return this.behanceService.getUserProjects(data.user.id);
      })
      .subscribe(data => {
        this.userProjects = data.projects;
    });
  }
}

