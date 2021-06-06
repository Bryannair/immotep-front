import {Component, OnInit} from '@angular/core';
import {mergeMap} from 'rxjs/operators';
import {Agent} from '../interfaces/agent';
import {ActivatedRoute} from '@angular/router';
import {AgentsService} from '../services/agents.service';
import {PropertiesService} from '../services/properties.service';

@Component({
  selector: 'app-single-agent',
  templateUrl: './single-agent.component.html',
  styleUrls: ['./single-agent.component.css']
})
export class SingleAgentComponent implements OnInit {
  agents: Agent;
  properties;
  p = 1;
  // tslint:disable-next-line:max-line-length
  constructor(private activatedRoute: ActivatedRoute, protected agentsService: AgentsService, protected propertiesService: PropertiesService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        mergeMap(params => {
          return this.agentsService.find(params['id']);
        })
      )
      .subscribe(res => this.agents = res.body);
  }
}
