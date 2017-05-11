import { Injectable } from '@angular/core';
import { Headers, Http,RequestOptions, Jsonp } from '@angular/http';

import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';


@Injectable()
export class BehenceService {

    constructor(public http: Http){ }

    urlBase = 'http://localhost:3000';
 
  getUsers() {
    return this.http.get(`${this.urlBase}/projetos`)
       .map(data => data.json());
  }

}