// import { ReactNode } from "react";

// export interface PromiseCardData {
//   title: string;
//   subtitle: string;
//   iconName: 'FaDollarSign' | 'FaStar' | 'FaCheckCircle' | 'FaMapMarkedAlt' | ReactNode;
//   iconBg: string;
//   cardBg: string;
//   borderColor: string;
//   features: string[];
// }

export type IconName = 'FaDollarSign' | 'FaStar' | 'FaCheckCircle' | 'FaMapMarkedAlt';

export interface PromiseCardData {
  title: string;
  subtitle: string;
  iconName: IconName;
  iconBg: string;
  image: string;
  cardBg: string;
  borderColor: string;
  features: string[];
}