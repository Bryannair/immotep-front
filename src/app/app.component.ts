import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ImmoTep';
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
  // tslint:disable-next-line:typedef
  onActivate() {
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 500); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 100);
  }
}
