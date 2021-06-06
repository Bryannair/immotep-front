import {Component, OnInit} from '@angular/core';
import {PropertiesService} from '../services/properties.service';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {PropertyStatus, PropertyType} from '../interfaces/property';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  properties;
  activatedRoute;
  propertiesFilter;
  selectedFilter;
  p = 1;

  constructor(private propertiesService: PropertiesService, activatedRoute: ActivatedRoute) {
    this.activatedRoute = activatedRoute;
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.propertiesService.findAll()
      .pipe(
        map(res => res.body
        ))
      .subscribe(res => this.onSucces(res), err => this.onError(err));
  }

  // tslint:disable-next-line:typedef
  onSucces(res) {
    this.properties = res.filter(property => property === property);
    this.propertiesFilter = [...this.properties];
    // [... this.blabla] copie la valeur mais ne partage pas la même valeurs actuelle
  }

  // tslint:disable-next-line:typedef
  onError(err) {
  }

  // tslint:disable-next-line:typedef
  onFilter() {
    switch (this.selectedFilter) {
      case '1' : {
        this.propertiesFilter = this.properties.filter(property => property.price > 0 && property.price <= 100000);
        break;
      }
      case '2' : {
        this.propertiesFilter = this.properties.filter(property => property.price > 100000 && property.price <= 200000);
        break;
      }
      case '3' : {
        this.propertiesFilter = this.properties.filter(property => property.price > 200000);
        break;
      }
      case '4' : {
        this.propertiesFilter = this.properties.filter(property => property.status === PropertyStatus.LOUER);
        break;
      }
      case '5' : {
        this.propertiesFilter = this.properties.filter(property => property.status === PropertyStatus.VENDRE);
        break;
      }
      case '6' : {
        this.propertiesFilter = this.properties.filter(property => property.type === PropertyType.MAISON);
        break;
      }
      case '7' : {
        this.propertiesFilter = this.properties.filter(property => property.type === PropertyType.APPARTEMENT);
        break;
      }
      default:
    }
  }
  // tslint:disable-next-line:typedef
  isSold(property) {
    return property.status === PropertyStatus.VENDRE;
  }
  // tslint:disable-next-line:typedef
  isRent(property){
    return property.status === PropertyStatus.LOUER;
  }

}
