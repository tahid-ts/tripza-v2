// types/tour.ts
export interface EventDetailsType {
  id: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  duration: string;
  groupSize: string;
  accommodation: string;
  basePrice: number;
  adultPrice: number;
  childPrice: number;
  serviceBookingPrice: number;
  serviceTravelerPrice: number;

  heroImages: string[];
  activities: string[];
  description: string;
  itinerary: ItineraryItem[];
  dateRange: string;
  itineraryImage: string;
}

export interface ItineraryItem {
  day: number;
  title: string;
  description?: string;
}