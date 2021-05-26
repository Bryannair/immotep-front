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
export enum PropertyType {
  MAISON = 'Maison',
  APPARTEMENT = 'Appartement'
}
export enum PropertyStatus {
  VENDRE = 'À vendre',
  LOUER = 'À louer'
}
