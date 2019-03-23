import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-img-widget',
  templateUrl: './img-widget.component.html',
  styleUrls: ['./img-widget.component.css']
})
export class ImgWidgetComponent implements OnInit {

  constructor() { }

  @Input()
  url: string

  ngOnInit() {
  }

}
