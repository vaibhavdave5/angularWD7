import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseGridComponentComponent } from './course-grid-component/course-grid-component.component';
import { ModuleListComponentComponent } from './module-list-component/module-list-component.component';
import { LessonTabComponentComponent } from './lesson-tab-component/lesson-tab-component.component';
import { TopicPillComponentComponent } from './topic-pill-component/topic-pill-component.component';
import { WidgetListComponentComponent } from './widget-list-component/widget-list-component.component';
import {RouterModule, Routes} from "@angular/router";
import { routing } from './app.routing';
import { CourseEditorComponent } from './course-editor/course-editor.component';
import { HeadingWidgetComponent } from './heading-widget/heading-widget.component';
import { LinkWidgetComponent } from './link-widget/link-widget.component';
import { ListWidgetComponent } from './list-widget/list-widget.component';
import { ParaWidgetComponent } from './para-widget/para-widget.component';
import { ImgWidgetComponent } from './img-widget/img-widget.component';
import { ModulelistComponent } from './modulelist/modulelist.component';
import { LessontabComponent } from './lessontab/lessontab.component';
import { TopicpillComponent } from './topicpill/topicpill.component';
import { WidgetlistComponent } from './widgetlist/widgetlist.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponentComponent,
    ModuleListComponentComponent,
    LessonTabComponentComponent,
    TopicPillComponentComponent,
    WidgetListComponentComponent,
    CourseEditorComponent,
    HeadingWidgetComponent,
    LinkWidgetComponent,
    ListWidgetComponent,
    ParaWidgetComponent,
    ImgWidgetComponent,
    ModulelistComponent,
    LessontabComponent,
    TopicpillComponent,
    WidgetlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
