import {Directive, ElementRef} from '@angular/core';
import {CssstateService} from '../services/cssstate.service';

@Directive({
  selector: '[appBodyClass]'
})
export class BodyClassDirective {

  constructor(el: ElementRef, private bodyClassService: CssstateService) {
    this.bodyClassService.state.subscribe(val => el.nativeElement.className = val);
  }

}
