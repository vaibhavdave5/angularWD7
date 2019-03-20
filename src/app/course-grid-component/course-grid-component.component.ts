import { Component, OnInit } from '@angular/core';
import {CourseService} from "../services/course.service";

@Component({
  selector: 'app-course-grid-component',
  templateUrl: './course-grid-component.component.html',
  styleUrls: ['./course-grid-component.component.css']
})
export class CourseGridComponentComponent implements OnInit {
  courses = []
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.findAllCourses().
    then(courses => this.courses = courses)

  }


}
