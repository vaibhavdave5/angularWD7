import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }

  findAllTopics = (lid) => {
    return fetch('https://quiet-reaches-17710.herokuapp.com/api/lesson/'+lid+'/topic', {
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }).then(response => response.json());
  }
}
