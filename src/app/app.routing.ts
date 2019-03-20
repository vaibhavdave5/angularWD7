import { Routes, RouterModule } from '@angular/router';
import {CourseGridComponentComponent} from "./course-grid-component/course-grid-component.component";
import {ModuleListComponentComponent} from "./module-list-component/module-list-component.component";
import {CourseEditorComponent} from "./course-editor/course-editor.component";

const appRoutes: Routes = [
  { path: 'course', component: CourseGridComponentComponent },
  { path: '', component: CourseGridComponentComponent },
  { path: 'course/:id', component: CourseEditorComponent },
  { path: 'course/:courseId/:moduleId/:lessonId/:topicId', component: CourseEditorComponent },
  { path: 'course/:courseId/:moduleId', component: CourseEditorComponent },
  { path: 'course/:courseId/:moduleId/:lessonId', component: CourseEditorComponent }
];
export const routing = RouterModule.forRoot(appRoutes);
