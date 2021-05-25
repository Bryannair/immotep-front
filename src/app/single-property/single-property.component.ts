import {Component, OnInit} from '@angular/core';
import {PropertiesService} from '../services/properties.service';
import {ActivatedRoute} from '@angular/router';
import {mergeMap, map} from 'rxjs/operators';
import {Property} from '../interfaces/property';


@Component({
  selector: 'app-single-property',
  templateUrl: './single-property.component.html',
  styleUrls: ['./single-property.component.css']
})
export class SinglePropertyComponent implements OnInit {
  properties: Property;
  constructor(private activatedRoute: ActivatedRoute, protected propertiesService: PropertiesService) {
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        mergeMap(params => {
          return this.propertiesService.find(params['id']);
        })
      )
      .subscribe(res =>  this.properties = res.body);
  }
}
