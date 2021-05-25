import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CssstateService {
  state: Subject<string> = new Subject<string>();

  constructor() { }

  setCssState(state: string): void {
    this.state.next(state);
  }
}
