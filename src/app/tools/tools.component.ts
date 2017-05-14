import {
  Component,
  Input
} from '@angular/core';


@Component({
  selector: 'tools-component',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.styl']
})

export class ToolsComponent {

  @Input() tools: any;

}

