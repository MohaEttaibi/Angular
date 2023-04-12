import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable()
export class DataService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getAll() {
    // return this.http.get(this.url).catch(this.handlerError);
    return this.http
      .get(this.url)
      .map((response) => JSON.stringify(response))
      .catch(this.handlerError);
  }

  create(resource) {
    // return Observable.throw(new AppError());

    return this.http
      .post(this.url, JSON.stringify(resource))
      .map((response) => JSON.stringify(response))
      .catch(this.handlerError);
  }

  update(resource) {
    return this.http
      .patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .map((response) => JSON.stringify(response))
      .catch(this.handlerError);
  }

  delete(id) {
    // return Observable.throw(new AppError());
    return this.http
      .delete(this.url + '/' + id)
      .map((response) => JSON.stringify(response))
      .catch(this.handlerError);
  }

  private handlerError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(JSON.stringify(error)));
    if (error.status === 404) return Observable.throw(new NotFoundError());
    return Observable.throw(new AppError(JSON.stringify(error)));
  }
}
