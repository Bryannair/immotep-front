import {Component, OnInit} from '@angular/core';
import {PropertiesService} from '../services/properties.service';
import {ActivatedRoute} from '@angular/router';
import {PropertyStatus, PropertyType} from '../interfaces/property';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  properties;
  propertiesFilter;
  selectedFilter;
  activatedRoute;
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
    this.properties = res.filter(property => property.type === PropertyType.MAISON);
    this.propertiesFilter = [...this.properties];
    // [... this.blabla] copie la valeur mais ne partage pas la même valeurs actuelle
  }

  // tslint:disable-next-line:typedef
  onError(err) {
  }

  // tslint:disable-next-line:typedef
  onFilter() {
    console.log(this.selectedFilter);
    switch (this.selectedFilter) {
      case '1' : {
        this.propertiesFilter = this.properties.filter(property => property.price > 0 && property.price <= 100000);
        console.log(this.propertiesFilter);
        break;
      }
      case '2' : {
        this.propertiesFilter = this.properties.filter(property => property.price > 100000 && property.price <= 200000);
        console.log(this.propertiesFilter);
        break;
      }
      case '3' : {
        this.propertiesFilter = this.properties.filter(property => property.price > 200000);
        console.log(this.propertiesFilter);
        break;
      }
      case '4' : {
        this.propertiesFilter = this.properties.filter(property => property.status === PropertyStatus.LOUER);
        console.log(this.propertiesFilter);
        break;
      }
      case '5' : {
        this.propertiesFilter = this.properties.filter(property => property.status === PropertyStatus.VENDRE);
        console.log(this.propertiesFilter);
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
