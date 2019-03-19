import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseGridComponentComponent } from './course-grid-component/course-grid-component.component';
import { ModuleListComponentComponent } from './module-list-component/module-list-component.component';
import { LessonTabComponentComponent } from './lesson-tab-component/lesson-tab-component.component';
import { TopicPillComponentComponent } from './topic-pill-component/topic-pill-component.component';
import { WidgetListComponentComponent } from './widget-list-component/widget-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponentComponent,
    ModuleListComponentComponent,
    LessonTabComponentComponent,
    TopicPillComponentComponent,
    WidgetListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
