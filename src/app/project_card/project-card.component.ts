import { Component, Input } from '@angular/core';


@Component({
    selector: 'project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.styl']
})


export class ProjectCardComponent {
  constructor() {}

  @Input()  projects: Array<any>;

}