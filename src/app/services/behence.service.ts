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
  
  getProject(id) {
    return this.http.get(`${this.urlBase}/projeto/${id}`)
       .map(data => data.json());
  }
  getCommentsProject(id) {
    return this.http.get(`${this.urlBase}/projeto/${id}/comments`)
       .map(data => data.json());
  }

}