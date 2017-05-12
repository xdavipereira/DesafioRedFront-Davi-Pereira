import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';

import {
  Router,
  ActivatedRoute,
  Params
} from '@angular/router';

import { BehenceService } from "../../services/behence.service";
import 'rxjs/add/operator/switchMap';

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

  ngOnInit(){
    let id = +this.route.snapshot.params['id'];
    this.getProject(id);
  }

  getProject(id){
    this.behanceService.getProject(id).subscribe((response) =>{ 
                  this.project = response.project;
                  console.log(this.project);
    });
  }

}

