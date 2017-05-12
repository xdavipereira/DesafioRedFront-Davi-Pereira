import {Component, Input} from '@angular/core';


@Component({
  selector: 'project-component',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.styl']
})

export class ProjectComponent {
  @Input() name;

  constructor() {}
}
