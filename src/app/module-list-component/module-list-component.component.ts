import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-list-component',
  template: `
    <p>
      module-list-component works!
    </p>
  `,
  styleUrls: ['./module-list-component.component.css']
})
export class ModuleListComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
