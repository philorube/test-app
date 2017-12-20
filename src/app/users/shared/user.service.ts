import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { filter, tap, catchError, map } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { User } from '../shared/user';


@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://api.github.com/repos/microsoft/typescript/contributors')
        .map(data => data)
        .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
