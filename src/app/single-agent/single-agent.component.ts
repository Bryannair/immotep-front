import { Component, OnInit } from '@angular/core';
import {mergeMap} from 'rxjs/operators';
import {Agent} from '../interfaces/agent';
import {ActivatedRoute} from '@angular/router';
import {AgentsService} from '../services/agents.service';

@Component({
  selector: 'app-single-agent',
  templateUrl: './single-agent.component.html',
  styleUrls: ['./single-agent.component.css']
})
export class SingleAgentComponent implements OnInit {
  agents: Agent;
  constructor(private activatedRoute: ActivatedRoute, protected agentsService: AgentsService) { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.activatedRoute.params
      .pipe(
        mergeMap(params => {
          return this.agentsService.find(params['id']);
        })
      )
      .subscribe(res =>  this.agents = res.body);
  }
}
