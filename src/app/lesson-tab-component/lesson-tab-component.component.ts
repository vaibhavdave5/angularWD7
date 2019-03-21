import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lesson-tab-component',
  templateUrl: './lesson-tab-component.component.html',
  styleUrls: ['./lesson-tab-component.component.css']
})
export class LessonTabComponentComponent implements OnInit {

  moduleId = -1
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      console.log(params)
      this.moduleId = parseInt(params.get("moduleId"))
    })
  }

  ngOnInit() {
  }

}
