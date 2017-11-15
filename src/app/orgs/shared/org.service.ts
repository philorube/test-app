  import { Injectable } from '@angular/core';
  import { HttpClient, HttpErrorResponse } from '@angular/common/http';
  import { catchError, tap, map } from 'rxjs/operators';
  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/observable/throw';
  import { IOrg } from '../shared/org';
  import { IRepo } from '../../shared/repo';
import { take } from 'rxjs/operators/take';
  
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

    getOrgRepos(orgName: string): Observable<IRepo[]> {
      return this.httpClient.get<IRepo[]>(this.orgApiUrl + orgName + '/repos?per_page=1000')
      .pipe(
        map(data => data.sort(function(a, b) { return b.stargazers_count - a.stargazers_count; })),
        // take(100),
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
    }

    private handleError(err: HttpErrorResponse) {
      console.log(err.message);
      return Observable.throw(err.message);
    }
  }


