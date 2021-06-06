import {Agent} from './agent';

export interface Property {
  id?: number;
  title: string;
  slug: string;
  describtion: string;
  price: string;
  type: PropertyType;
  status: string;
  area: string;
  rooms: string;
  agents: Agent[];
}


export enum PropertyType {
  MAISON = 'Maison',
  APPARTEMENT = 'Appartement'
}

export enum PropertyStatus {
  VENDRE = 'À vendre',
  LOUER = 'À louer'
}
