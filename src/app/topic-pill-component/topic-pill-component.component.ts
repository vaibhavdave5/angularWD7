import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TopicService} from "../services/topic.service";

@Component({
  selector: 'app-topic-pill-component',
  templateUrl: './topic-pill-component.component.html',
  styleUrls: ['./topic-pill-component.component.css']
})
export class TopicPillComponentComponent implements OnInit {

  moduleId = -1
  courseId = -1
  lessonId = -1

  topics = []

  constructor(private service: TopicService, private route: ActivatedRoute) {

    this.route.paramMap.subscribe((params) => {
      this.moduleId = parseInt(params.get("moduleId"))
      this.courseId = parseInt(params.get("courseId"))
      this.lessonId = parseInt(params.get("lessonId"))
    })
  }

  ngOnInit() {
    this.service.findAllTopics(this.lessonId).then((topics)=>{
      this.topics = topics
    })
  }

}
