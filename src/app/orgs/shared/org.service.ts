  import { Injectable } from '@angular/core';
  import { HttpClient, HttpErrorResponse } from '@angular/common/http';
  import { catchError, tap } from 'rxjs/operators';
  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/observable/throw';
  import { IOrg } from '../shared/org';
  
  @Injectable()
  export class OrgService {

    private orgApiUrl = 'https://api.github.com/orgs/';

    constructor(private httpClient: HttpClient) { }
    
    getOrg(name: string): Observable<IOrg> {
        return this.httpClient.get<IOrg>(this.orgApiUrl + name)
        .pipe(
          tap(data => console.log('All: ' + JSON.stringify(data))),
          catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
      console.log(err.message);
      return Observable.throw(err.message);
    }
  }


