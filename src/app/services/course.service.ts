import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  findAllCourses = () => {
    return fetch('http://localhost:8080/api/courses', {
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }).then(response => response.json());
  }
}
