import { PriceInfo } from "./card";
import { InfoPillType } from "./slider";

export interface ProductsType {
  id: number;
  name: string;
  price: PriceInfo;
  image: string;
  category: string;
  bg?: string;
  rating: number;
}
export interface toursType {
  id: number;
  name: string;
  price: PriceInfo;
  category: string;
  bg: string;

  title?: string;
  rating: number;
  infoPills: InfoPillType[]
}
export interface eventsType {
  id: number;
  name: string;
  price: number;
  category: string;
  bg: string;
  rating: number;
  infoPills: InfoPillType[]
}

