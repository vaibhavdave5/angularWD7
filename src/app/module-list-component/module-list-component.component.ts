import { Component, OnInit } from '@angular/core';
import {ModuleService} from "../services/module.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-module-list-component',
  templateUrl: './module-list-component.component.html',
  styleUrls: ['./module-list-component.component.css']
})
export class ModuleListComponentComponent implements OnInit {

  constructor(private service: ModuleService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.moduleId = parseInt(params.get("moduleId"))
      this.courseId = parseInt(params.get("courseId"))
      this.ngOnInit()
    })
  }
  modules = []
  moduleId = -1
  selectedModule = -1
  courseId = -1

  ngOnInit() {
    this.service.findAllModules(this.moduleId).then((modules)=>{
      this.modules = modules
    })
  }

  selectColor = (module) =>{

    if(module.id === this.moduleId){
      return 'alert alert-dismissible alert-success'
    }
    return 'alert alert-dismissible alert-info'

  }


}
