import {PropertyType} from './property';

export interface Agent {
  id?: number;
  name: string;
  email: string;
  portable: string;
}

export interface Property {
  id?: number;
  title: string;
  slug: string;
  describe: string;
  price: string;
  type: PropertyType;
  status: string;
  area: string;
  rooms: string;
}
