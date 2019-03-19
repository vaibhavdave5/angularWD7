import { Routes, RouterModule } from '@angular/router';
import {CourseGridComponentComponent} from "./course-grid-component/course-grid-component.component";
import {ModuleListComponentComponent} from "./module-list-component/module-list-component.component";

const appRoutes: Routes = [
  { path: 'course', component: CourseGridComponentComponent },
  { path: 'module', component: ModuleListComponentComponent }
];
export const routing = RouterModule.forRoot(appRoutes);
