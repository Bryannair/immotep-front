import {Component, OnInit} from '@angular/core';
import {AgentsService} from '../services/agents.service';
import {ActivatedRoute} from '@angular/router';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
  agents;
  activatedRoute;

  constructor(private agentsService: AgentsService, activatedRoute: ActivatedRoute ) {
    this.activatedRoute = activatedRoute;
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        mergeMap(params => {
          // @ts-ignore
          return this.agentsService.findAll();
        })
      )
      .subscribe(res => this.agents = res.body);
  }
}
