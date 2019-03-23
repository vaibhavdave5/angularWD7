import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }

  findAllTopics = (lid) => {
    return fetch('http://localhost:8080/api/lesson/'+lid+'/topic', {
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }).then(response => response.json());
  }
}
