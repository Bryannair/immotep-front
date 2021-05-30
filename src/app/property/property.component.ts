import {Component, OnInit} from '@angular/core';
import {PropertiesService} from '../services/properties.service';
import {ActivatedRoute} from '@angular/router';
import {mergeMap} from 'rxjs/operators';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  properties;
  activatedRoute;
  p = 1;

  constructor(private propertiesService: PropertiesService, activatedRoute: ActivatedRoute) {
    this.activatedRoute = activatedRoute;
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        mergeMap(params => {
          // @ts-ignore
          return this.propertiesService.findAll();
        })
      )
      .subscribe(res => this.properties = res.body);
  }
}
