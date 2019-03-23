import { Routes, RouterModule } from '@angular/router';
import {CourseGridComponentComponent} from "./course-grid-component/course-grid-component.component";
import {CourseEditorComponent} from "./course-editor/course-editor.component";
import {WidgetlistComponent} from "./widgetlist/widgetlist.component";
import {LessontabComponent} from "./lessontab/lessontab.component";
import {ModulelistComponent} from "./modulelist/modulelist.component";
import {TopicpillComponent} from "./topicpill/topicpill.component";

const appRoutes: Routes = [
  { path: 'course', component: CourseGridComponentComponent },
  { path: '', component: CourseGridComponentComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: TopicpillComponent},
  { path: 'course/:courseId/module/:moduleId', component: ModulelistComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: LessontabComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/widget', component: WidgetlistComponent }
];
export const routing = RouterModule.forRoot(appRoutes);
