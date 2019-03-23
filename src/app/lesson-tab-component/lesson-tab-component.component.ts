import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LessonService} from "../services/lesson.service";

@Component({
  selector: 'app-lesson-tab-component',
  templateUrl: './lesson-tab-component.component.html',
  styleUrls: ['./lesson-tab-component.component.css']
})
export class LessonTabComponentComponent implements OnInit {

  moduleId = -1
  courseId = -1
  lessons = []
  constructor(private service: LessonService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.moduleId = parseInt(params.get("moduleId"))
      this.courseId = parseInt(params.get("courseId"))
      this.ngOnInit()
    })
  }

  ngOnInit() {
    this.service.findAllLessons(this.moduleId).then((lessons)=>{
      this.lessons = lessons
    })
  }

}
