import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-lesson-tab-component',
  templateUrl: './lesson-tab-component.component.html',
  styleUrls: ['./lesson-tab-component.component.css']
})
export class LessonTabComponentComponent implements OnChanges {

  @Input() major: number;
  @Input() minor: number;
  changeLog: string[] = [];

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {

  }

}
