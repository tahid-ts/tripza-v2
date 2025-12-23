// import { IconType } from "react-icons";
import { PriceInfo } from "./card";

export interface BannerDataType {
  id: number;
  title: string;
  description: string;
  image: string;
}
export interface ReviewSliderType {
  id: number;
  text?: string;
  author?: string;
  rating?: number;
}

export interface InfoPillType {
  icon?: React.ReactNode;
  text?: string;
}

export interface ExpertlyCraftedType {
  id: number;
  image: string;
  title: string;
  description: string;
  price?: PriceInfo;
  infoPills: InfoPillType[];
}
export interface MoreTravelStoriesType {
  id: number;
  image: string;
  title: string;
  description?: string;
  
}

export interface DesertAdventureType {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface ExploreScheduledType {
  id: number;
  image: string;
  title: string;
  description: string;
  infoPills: InfoPillType[];
}
export interface exploreScheduledEvents {
  id: number;
  title: string;
  image: string;
  description: string;
  date: string;
  price: PriceInfo;
  infoPills: InfoPillType[]
}