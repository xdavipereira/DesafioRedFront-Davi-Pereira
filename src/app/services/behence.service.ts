import { Injectable } from '@angular/core';
import { Headers, Http,RequestOptions, Jsonp } from '@angular/http';

import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';


@Injectable()
export class BehenceService {

    constructor(public http: Http){ }

    urlBase = 'http://localhost:3000';
 
  getProjects() {
    return this.http.get(`${this.urlBase}/projetos`)
       .map(data => data.json());
  }
  
  getProject(id: number) {
    return this.http.get(`${this.urlBase}/projeto/${id}`)
       .map(data => data.json());
  }

  getCommentsProject(id: number) {
    return this.http.get(`${this.urlBase}/projeto/${id}/comments`)
       .map(data => data.json());
  }

  getUsers() {
    return this.http.get(`${this.urlBase}/users`)
       .map(data => data.json());
  }

  getUser(id: number) {
    return this.http.get(`${this.urlBase}/user/${id}`)
       .map(data => data.json());
  
}
  getUserProjects(id: number) {
    return this.http.get(`${this.urlBase}/user/${id}/projects`)
       .map(data => data.json());
  }

}