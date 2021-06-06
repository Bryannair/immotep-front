import {Property} from './property';

export interface Agent {
  id?: number;
  name: string;
  email: string;
  portable: string;
  properties: Property[];
}
