import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Property} from '../interfaces/property';
import {BaseApi} from '../interfaces/base-api';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService extends BaseApi {
  properties;

  constructor(private http: HttpClient) {
    super();
  }

  // @ts-ignore
  findAll(searchParams?: any): Observable<HttpResponse<Property[]>> {
    return this.http.get<Property[]>(this.SERVER_URL + 'properties', {headers: this.httpHeaders, observe: 'response'});
  }

  find(id: number): Observable<HttpResponse<Property>> {
    return this.http.get<Property>(this.SERVER_URL + 'properties/' + id, {headers: this.httpHeaders, observe: 'response'});
  }
}
