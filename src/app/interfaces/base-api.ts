import {HttpHeaders} from '@angular/common/http';

export abstract class BaseApi {
  private readonly _SERVER_URL = 'https://rinck.bes-webdeveloper-seraing.be/ei/api/immotep/';

  // tslint:disable-next-line:variable-name
  private _httpHeaders = new HttpHeaders({
    'Content-Type':  'application/json',
    Accept: 'application/json'
  });

  get SERVER_URL(): string {
    return this._SERVER_URL;
  }


  get httpHeaders(): HttpHeaders {
    return this._httpHeaders;
  }

}
