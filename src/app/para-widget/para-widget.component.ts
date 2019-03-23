import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-para-widget',
  templateUrl: './para-widget.component.html',
  styleUrls: ['./para-widget.component.css']
})
export class ParaWidgetComponent implements OnInit {

  constructor() { }

  @Input()
  text: string

  ngOnInit() {
  }

}
