import { Component, OnInit } from '@angular/core';
import {WidgetService} from "../services/widget.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-widget-list-component',
  templateUrl: './widget-list-component.component.html',
  styleUrls: ['./widget-list-component.component.css']
})
export class WidgetListComponentComponent implements OnInit {

  moduleId = -1
  courseId = -1
  lessonId = -1
  topicId = -1
  widgets = []
  constructor(private service: WidgetService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.moduleId = parseInt(params.get("moduleId"))
      this.courseId = parseInt(params.get("courseId"))
      this.topicId = parseInt(params.get("topicId"))
      this.lessonId = parseInt(params.get("lessonId"))
      this.ngOnInit()
    })
  }

  ngOnInit() {
    this.service.findAllWidgets(this.topicId).then((widgets)=>{
      console.log(widgets)
      this.widgets = widgets
    })
  }

}
