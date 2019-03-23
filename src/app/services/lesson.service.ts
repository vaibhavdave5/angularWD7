import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor() { }

  findAllLessons = (mid) => {
    return fetch('http://localhost:8080/api/module/'+mid+'/lesson', {
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }).then(response => response.json());
  }
}
