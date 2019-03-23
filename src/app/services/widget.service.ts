import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  constructor() { }

  findAllWidgets = (wid) => {
    return fetch('https://quiet-reaches-17710.herokuapp.com/api/topic/'+wid+'/widget', {
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }).then(response => response.json());
  }
}
