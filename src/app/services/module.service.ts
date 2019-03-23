import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor() { }

  findAllModules = (cid) => {
    return fetch('https://quiet-reaches-17710.herokuapp.com/api/course/'+cid+'/modules', {
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }).then(response => response.json());
  }

}
