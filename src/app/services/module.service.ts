import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor() { }

  findAllModules = (cid) => {
    return fetch('http://localhost:8080/api/course/'+cid+'/modules', {
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }).then(response => response.json());
  }

}
