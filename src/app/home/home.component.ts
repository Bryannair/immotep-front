import {Component, OnInit} from '@angular/core';
import {mergeMap} from 'rxjs/operators';
import {PropertiesService} from '../services/properties.service';
import {ActivatedRoute} from '@angular/router';
import {AgentsService} from '../services/agents.service';
import {Subscription} from 'rxjs';
import {CssstateService} from '../services/cssstate.service';
import {trigger} from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  properties = [];
  agents = [];
  constructor(
    private propertiesService: PropertiesService, protected agentsService: AgentsService, protected bodyClassService: CssstateService) {
  }

// tslint:disable-next-line:typedef
  ngOnInit() {
    this.bodyClassService.setCssState('home');
    this.propertiesService.findAll()
      .subscribe(res => this.properties = res.body);
    this.agentsService.findAll()
      .subscribe(agentResponse => this.agents = agentResponse.body);
  }

}
