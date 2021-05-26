import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AgentsComponent} from './agents/agents.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {PropertyComponent} from './property/property.component';
import {SingleAgentComponent} from './single-agent/single-agent.component';
import {SinglePropertyComponent} from './single-property/single-property.component';
import {HouseComponent} from './house/house.component';
import {ApartmentComponent} from './apartment/apartment.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'agents', component: AgentsComponent },
  {path: 'single-agent/:id', component: SingleAgentComponent },
  {path: 'property', component: PropertyComponent },
  {path: 'house', component: HouseComponent },
  {path: 'apartment', component: ApartmentComponent },
  {path: 'single-property/:id', component: SinglePropertyComponent },
  {path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
