import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AgentsComponent } from './agents/agents.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SingleAgentComponent } from './single-agent/single-agent.component';
import { SinglePropertyComponent } from './single-property/single-property.component';
import { PropertyComponent } from './property/property.component';
import {HttpClientModule} from '@angular/common/http';
import { BodyClassDirective } from './directives/body-class.directive';
import { HouseComponent } from './house/house.component';
import {FormsModule} from '@angular/forms';
import { ApartmentComponent } from './apartment/apartment.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    AgentsComponent,
    AboutComponent,
    ContactComponent,
    SingleAgentComponent,
    SinglePropertyComponent,
    PropertyComponent,
    BodyClassDirective,
    HouseComponent,
    ApartmentComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgxPaginationModule
    ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
