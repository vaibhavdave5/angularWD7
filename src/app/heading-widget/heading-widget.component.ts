import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heading-widget',
  templateUrl: './heading-widget.component.html',
  styleUrls: ['./heading-widget.component.css']
})
export class HeadingWidgetComponent implements OnInit {

  constructor() { }

  @Input()
  title: string

  ngOnInit() {
  }

}
