import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-link-widget',
  templateUrl: './link-widget.component.html',
  styleUrls: ['./link-widget.component.css']
})
export class LinkWidgetComponent implements OnInit {

  @Input()
  linkURL: string

  @Input()
  linkText: string

  constructor() { }

  ngOnInit() {
  }

}
