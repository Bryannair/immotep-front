import {Component, HostBinding, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  scrolled;
  @HostListener('window:scroll', ['$event'])
  // tslint:disable-next-line:typedef
  onWindowScroll($event) {
    const numb = window.scrollY;
    if (numb >= 100){
      this.scrolled = 0;
    }
    else {
      this.scrolled = 1;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
