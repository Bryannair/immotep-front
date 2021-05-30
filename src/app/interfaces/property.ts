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
  properties: string;
}

export interface Agent {
  id?: number;
  name: string;
  email: string;
  portable: string;
}

export enum PropertyType {
  MAISON = 'Maison',
  APPARTEMENT = 'Appartement'
}

export enum PropertyStatus {
  VENDRE = 'À vendre',
  LOUER = 'À louer'
}
