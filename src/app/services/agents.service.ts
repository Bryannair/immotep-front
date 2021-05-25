import { Injectable } from '@angular/core';
import {BaseApi} from '../interfaces/base-api';
import {Agent} from '../interfaces/agent';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AgentsService extends BaseApi{

  constructor(private http: HttpClient) {
    super();
  }
    // @ts-ignore
    findAll(searchParams?: any): Observable<HttpResponse<Agent[]>> {
      return this.http.get<Agent[]>(this.SERVER_URL + 'agents', {headers: this.httpHeaders, observe: 'response'});
    }
    find(id: number): Observable<HttpResponse<Agent>> {
      return this.http.get<Agent>(this.SERVER_URL + 'agents/' + id, {headers: this.httpHeaders, observe: 'response'});
    }
}
