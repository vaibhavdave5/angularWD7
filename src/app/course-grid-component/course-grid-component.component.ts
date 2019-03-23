import { Component, OnInit } from '@angular/core';
import {CourseService} from "../services/course.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-course-grid-component',
  templateUrl: './course-grid-component.component.html',
  styleUrls: ['./course-grid-component.component.css']
})
export class CourseGridComponentComponent implements OnInit {
  courses = []
  courseId = -1
  constructor(private courseService: CourseService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.courseId = parseInt(params.get("courseId"))
      this.ngOnInit()
    })
  }

  ngOnInit() {
    this.courseService.findAllCourses().
    then(courses => this.courses = courses)

  }


}
