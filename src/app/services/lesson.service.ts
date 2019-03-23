import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor() { }

  findAllLessons = (mid) => {
    return fetch('https://quiet-reaches-17710.herokuapp.com/api/module/'+mid+'/lesson', {
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }).then(response => response.json());
  }
}
