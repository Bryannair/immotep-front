import {Component, OnInit} from '@angular/core';
import {filter, mergeMap} from 'rxjs/operators';
import {PropertiesService} from '../services/properties.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  properties;
  activatedRoute;

  constructor(private propertiesService: PropertiesService, activatedRoute: ActivatedRoute) {
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        mergeMap(params => {
          // @ts-ignore
          return this.propertiesService.findAll();
        })
          // ,
        // filter(properties => properties.type === 'Maison')
      )
      .subscribe(res => this.properties = res.body);
  }
}
