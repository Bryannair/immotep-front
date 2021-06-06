import {Component, OnInit} from '@angular/core';
import {PropertiesService} from '../services/properties.service';
import {ActivatedRoute} from '@angular/router';
import {mergeMap, map} from 'rxjs/operators';
import {Property} from '../interfaces/property';
import {Agent} from '../interfaces/agent';
import {AgentsService} from '../services/agents.service';


@Component({
  selector: 'app-single-property',
  templateUrl: './single-property.component.html',
  styleUrls: ['./single-property.component.css']
})
export class SinglePropertyComponent implements OnInit {
  properties: Property;
  agents: Agent;

  constructor(private activatedRoute: ActivatedRoute,
              protected propertiesService: PropertiesService,
              protected agentsService: AgentsService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        mergeMap(params => {
          return this.propertiesService.find(params['id']);
        })
      )
      .subscribe(res => this.properties = res.body);
    this.activatedRoute.params
      .pipe(
        mergeMap(params => {
          return this.agentsService.find(params['id']);
        })
      )
      .subscribe(res => this.agents = res.body);
  }
}
