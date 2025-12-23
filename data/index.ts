
// src/data/reviewsData.ts

import { BlogCardData } from "@/components/blog/Blog";

import { AccordionItem } from "@/types/accordian";
import { AttractionPost, BlogPost } from "@/types/blog";
import { Card1 } from "@/types/card";
import { EventDetailsType } from "@/types/event";
import { ImageGridItem } from "@/types/imageGrid";
import { PolicySection } from "@/types/policy";
import { eventsType, toursType } from "@/types/products";
import { PromiseCardData } from "@/types/promiseCard";
import { SidebarSection } from "@/types/sidebar";
import {
  BannerDataType,
  DesertAdventureType,
  ExpertlyCraftedType,
  exploreScheduledEvents,
  ExploreScheduledType,
  MoreTravelStoriesType,
  ReviewSliderType,
} from "@/types/slider";
import { Tour } from "@/types/tour";
import { Product } from "@/types/TravelProduct";

import { BookA, Contact, Home, Layers, Store } from "lucide-react";
export const sections: SidebarSection[] = [
  {
    id: "main",
    items: [
      {
        id: "home",
        label: "Home",
        href: "/",
        icon: Home,
      },
      {
        id: "about",
        label: "About",
        href: "/about",
        icon: BookA,
      },
      {
        id: "shop",
        label: "Shop",
        icon: Store,
        subItems: [
          { id: "product", label: "Products", href: "/products" },
          {
            id: "product-details",
            label: "Product Details",
            href: "/product-details",
          },
          {
            id: "checkout",
            label: "Checkout",
            href: "/checkout",
          },
        ],
      },
    ],
  },
  {
    id: "pages",
    items: [
      {
        id: "pages",
        label: "Pages",
        icon: Layers,
        subItems: [
          {
            id: "blog",
            label: "Blog",
            href: "/blog",
          },
          {
            id: "blog-details",
            label: "Blog Details",
            href: "/blog-details",
          },
          {
            id: "attraction",
            label: "Attraction",
            href: "/attraction",
          },
          {
            id: "attraction-details",
            label: "Attraction Details",
            href: "/attraction-details",
          },
          {
            id: "tour-package",
            label: "Tour Package",
            href: "tour-package",
          },
          {
            id: "tour-details",
            label: "Tour Details",
            href: "/tour-details",
          },
          {
            id: "event-package",
            label: "Event Package",
            href: "/event-package",
          },
          {
            id: "event-details",
            label: "Event Details",
            href: "/event-details",
          },
          {
            id: "faq",
            label: "Faq",
            href: "/faq",
          },
          {
            id: "privacy-policy",
            label: "Privacy Policy",
            href: "/privacy-policy",
          },
          {
            id: "checkout",
            label: "Checkout",
            href: "/checkout",
          },
          {
            id: "login",
            label: "Login",
            href: "/login",
          },
          {
            id: "signup",
            label: "Sign Up",
            href: "/signup",
          },
          {
            id: "error",
            label: "Error",
            href: "/error",
          },
        ],
      },
      {
        id: "contact",
        label: "Contact",
        href: "/contact",
        icon: Contact,
      },
    ],
  },
];
export const bannerData: BannerDataType[] = [
  {
    id: 1,
    title: "Sunrise View Point",
    description: "Arrive at coxsbazar beach and see sunrise",
    image: "/image/bannerSection/banner.jpg",
  },
  {
    id: 2,
    title: "Mountain Peak",
    description: "Experience breathtaking views from the summit",
    image: "/image/bannerSection/banner (1).png",
  },
  {
    id: 3,
    title: "Starry Night",
    description: "Witness the galaxy above the mountains",
    image: "/image/bannerSection/banner (2).jpg",
  },
  {
    id: 4,
    title: "Starry Night",
    description: "Witness the galaxy above the mountains",
    image: "/image/bannerSection/banner (3).jpg",
  },
  {
    id: 5,
    title: "Starry Night",
    description: "Witness the galaxy above the mountains",
    image: "/image/bannerSection/banner (4).jpg",
  },
  {
    id: 6,
    title: "Starry Night",
    description: "Witness the galaxy above the mountains",
    image: "/image/bannerSection/banner (5).png",
  },
  {
    id: 7,
    title: "Starry Night",
    description: "Witness the galaxy above the mountains",
    image: "/image/bannerSection/banner (6).png",
  },
  {
    id: 8,
    title: "Starry Night",
    description: "Witness the galaxy above the mountains",
    image: "/image/bannerSection/banner (7).jpg",
  },
  {
    id: 9,
    title: "Starry Night",
    description: "Witness the galaxy above the mountains",
    image: "/image/bannerSection/banner (8).jpg",
  },
];
export const avatars = [
  "/image/icon/avatar1.png",
  "/image/icon/avatar2.png",
  "/image/icon/avatar3.png",
  "/image/icon/avatar4.png",
  // "/image/icon/avatar1.png",
];
export const DesertAdventureTypeData: DesertAdventureType[] = [
  {
    id: 1,
    image: "/image/advanture/image1.png",
    title: "Desert Camp Experience",
    description: "Spend a night under the stars in an authentic desert camp",
  },
  {
    id: 2,
    image: "/image/advanture/image2.png",
    title: "Stargazing Adventure",
    description:
      "Witness the beauty of desert night sky with crystal clear stars",
  },
  {
    id: 3,
    image: "/image/advanture/image3.png",
    title: "Camel Ride Desert Adventure",
    description:
      "Experience tradition on camelback, an unforgettable journey through the sands",
  },
  {
    id: 4,
    image: "/image/advanture/image4.png",
    title: "Camel Caravan Journey",
    description: "Join a traditional caravan across golden sand dunes",
  },
  {
    id: 5,
    image: "/image/advanture/image5.png",
    title: "Dune Bashing Safari",
    description:
      "Thrilling 4x4 adventure through the majestic desert landscape",
  },
  {
    id: 6,
    image: "/image/advanture/image4.png",
    title: "Camel Caravan Journey",
    description: "Join a traditional caravan across golden sand dunes",
  },
  {
    id: 7,
    image: "/image/advanture/image2.png",
    title: "Stargazing Adventure",
    description:
      "Witness the beauty of desert night sky with crystal clear stars",
  },
];
export const DesertAdventureTypeTrekkingData: DesertAdventureType[] = [
  {
    id: 1,
    image: "/image/advanture/image1.png",
    title: "Desert Camp Experience",
    description: "Spend a night under the stars in an authentic desert camp",
  },
  {
    id: 2,
    image: "/image/advanture/image2.png",
    title: "Stargazing Adventure",
    description:
      "Witness the beauty of desert night sky with crystal clear stars",
  },
  {
    id: 3,
    image: "/image/advanture/image3.png",
    title: "Camel Ride Desert Adventure",
    description:
      "Experience tradition on camelback, an unforgettable journey through the sands",
  },
];

export const exploreScheduledData: exploreScheduledEvents[] = [
  {
    id: 1,
    image: "/image/events/sliderImage.png",
    title: "Desert Camp Experience",
    description: "Spend a night under the stars in an authentic desert camp",
    date: "16 July",
    price: { amount: 74, currency: "$", suffix: "/person" },
    infoPills: [{ text: "Ireland" }, { text: "5 Days" }],
  },
  {
    id: 2,
    image: "/image/events/sliderImage1.png",
    title: "Stargazing Adventure",
    description:
      "Witness the beauty of desert night sky with crystal clear stars",
    date: "16 July",
    price: { amount: 74, currency: "$", suffix: "/person" },

    infoPills: [{ text: "Desert" }, { text: "Night Sky" }],
  },
  {
    id: 3,
    image: "/image/events/sliderImage2.png",
    title: "Camel Ride Desert Adventure",
    description:
      "Experience tradition on camelback, an unforgettable journey through the sands",
    date: "16 July",
    price: { amount: 74, currency: "$", suffix: "/person" },

    infoPills: [{ text: "Camel" }, { text: "Adventure" }],
  },
  {
    id: 4,
    image: "/image/events/sliderImage1.png",
    title: "Camel Caravan Journey",
    description: "Join a traditional caravan across golden sand dunes",
    date: "16 July",
    price: { amount: 74, currency: "$", suffix: "/person" },

    infoPills: [{ text: "Caravan" }, { text: "Sand Dunes" }],
  },
  {
    id: 5,
    image: "/image/events/sliderImage2.png",
    title: "Dune Bashing Safari",
    description:
      "Thrilling 4x4 adventure through the majestic desert landscape",
    date: "16 July",
    price: { amount: 74, currency: "$", suffix: "/person" },

    infoPills: [{ text: "4x4 Drive" }, { text: "Desert Safari" }],
  },
  {
    id: 6,
    image: "/image/events/sliderImage.png",
    title: "Camel Caravan Journey",
    description: "Join a traditional caravan across golden sand dunes",
    date: "16 July",
    price: { amount: 74, currency: "$", suffix: "/person" },

    infoPills: [{ text: "Traditional" }, { text: "Journey" }],
  },
  {
    id: 7,
    image: "/image/events/sliderImage1.png",
    title: "Stargazing Adventure",
    description:
      "Witness the beauty of desert night sky with crystal clear stars",
    date: "16 July",
    price: { amount: 74, currency: "$", suffix: "/person" },

    infoPills: [{ text: "Stars" }, { text: "Night Tour" }],
  },
];
export const reviewsData: ReviewSliderType[] = [
  {
    id: 1,
    text: "This was the most unforgettable trip I've ever taken! Every detail was perfectly organized, and I felt safe and inspired throughout the journey. I can't wait to book my next adventure with them!",
    author: "John Snow",
    rating: 5,
  },
  {
    id: 2,
    text: "Amazing experience from start to finish! The attention to detail and customer service exceeded all my expectations. Highly recommend to anyone looking for their next adventure.",
    author: "Sarah Johnson",
    rating: 5,
  },
  {
    id: 3,
    text: "Professional, reliable, and truly exceptional service. Every moment was carefully planned and executed. This company sets the standard for travel experiences.",
    author: "Michael Chen",
    rating: 5,
  },
];

export const ExpertlyCraftedData: ExpertlyCraftedType[] = [
  {
    id: 1,
    image: "/image/advanture/image1.png",
    title: "Desert Camp Experience",
    description: "Spend a night under the stars in an authentic desert camp",
    infoPills: [{ text: "Ireland" }, { text: "5 Days" }],
    price: { amount: 74, currency: "$", suffix: "/person" },
  },
  {
    id: 2,
    image: "/image/advanture/image2.png",
    title: "Stargazing Adventure",
    description:
      "Witness the beauty of desert night sky with crystal clear stars",
    infoPills: [{ text: "Desert" }, { text: "Night Sky" }],
    price: { amount: 74, currency: "$", suffix: "/person" },
  },
  {
    id: 3,
    image: "/image/advanture/image3.png",
    title: "Camel Ride Desert Adventure",
    description:
      "Experience tradition on camelback, an unforgettable journey through the sands",
    infoPills: [{ text: "Camel" }, { text: "Adventure" }],
    price: { amount: 74, currency: "$", suffix: "/person" },
  },
  {
    id: 4,
    image: "/image/advanture/image4.png",
    title: "Camel Caravan Journey",
    description: "Join a traditional caravan across golden sand dunes",
    infoPills: [{ text: "Caravan" }, { text: "Sand Dunes" }],
    price: { amount: 74, currency: "$", suffix: "/person" },
  },
  {
    id: 5,
    image: "/image/advanture/image5.png",
    title: "Dune Bashing Safari",
    description:
      "Thrilling 4x4 adventure through the majestic desert landscape",
    infoPills: [{ text: "4x4 Drive" }, { text: "Desert Safari" }],
    price: { amount: 74, currency: "$", suffix: "/person" },
  },
  {
    id: 6,
    image: "/image/advanture/image4.png",
    title: "Camel Caravan Journey",
    description: "Join a traditional caravan across golden sand dunes",
    infoPills: [{ text: "Traditional" }, { text: "Journey" }],
    price: { amount: 74, currency: "$", suffix: "/person" },
  },
  {
    id: 7,
    image: "/image/advanture/image2.png",
    title: "Stargazing Adventure",
    description:
      "Witness the beauty of desert night sky with crystal clear stars",
    infoPills: [
      {
        text: "Bali, Indonesia",
      },
      { text: "Night Tour" },
    ],
    price: { amount: 74, currency: "$", suffix: "/person" },
  },
];
export const MoreTravelStoriesData: MoreTravelStoriesType[] = [
  {
    id: 1,
    image: "/image/advanture/image1.png",
    title: "BreathTaking Escape: Desert Camp Experience",
    description: "Spend a night under the stars in an authentic desert camp",
  },
  {
    id: 2,
    image: "/image/advanture/image2.png",
    title: "BreathTaking Escape: Stargazing Adventure",
    description:
      "Witness the beauty of desert night sky with crystal clear stars",
  },
  {
    id: 3,
    image: "/image/advanture/image3.png",
    title: "BreathTaking Escape: Camel Ride Desert Adventure",
    description:
      "Experience tradition on camelback, an unforgettable journey through the sands",
  },
  {
    id: 4,
    image: "/image/advanture/image4.png",
    title: "BreathTaking Escape: Camel Caravan Journey",
    description: "Join a traditional caravan across golden sand dunes",
  },
  {
    id: 5,
    image: "/image/advanture/image5.png",
    title: "BreathTaking Escape: Dune Bashing Safari",
    description:
      "Thrilling 4x4 adventure through the majestic desert landscape",
  },
  {
    id: 6,
    image: "/image/advanture/image4.png",
    title: "BreathTaking Escape: Camel Caravan Journey",
    description: "Join a traditional caravan across golden sand dunes",
  },
  {
    id: 7,
    image: "/image/advanture/image2.png",
    title: "BreathTaking Escape: Stargazing Adventure",
    description:
      "Witness the beauty of desert night sky with crystal clear stars",
  },
];

export const ExploreScheduledData: ExploreScheduledType[] = [
  {
    id: 1,
    image: "/image/advanture/image1.png",
    title: "Desert Camp Experience",
    description: "Spend a night under the stars in an authentic desert camp",
    infoPills: [{ text: "Ireland" }, { text: "5 Days" }],
  },
  {
    id: 2,
    image: "/image/advanture/image2.png",
    title: "Stargazing Adventure",
    description:
      "Witness the beauty of desert night sky with crystal clear stars",
    infoPills: [{ text: "Desert" }, { text: "Night Sky" }],
  },
  {
    id: 3,
    image: "/image/advanture/image3.png",
    title: "Camel Ride Desert Adventure",
    description:
      "Experience tradition on camelback, an unforgettable journey through the sands",
    infoPills: [{ text: "Camel" }, { text: "Adventure" }],
  },
  {
    id: 4,
    image: "/image/advanture/image4.png",
    title: "Camel Caravan Journey",
    description: "Join a traditional caravan across golden sand dunes",
    infoPills: [{ text: "Caravan" }, { text: "Sand Dunes" }],
  },
  {
    id: 5,
    image: "/image/advanture/image5.png",
    title: "Dune Bashing Safari",
    description:
      "Thrilling 4x4 adventure through the majestic desert landscape",
    infoPills: [{ text: "4x4 Drive" }, { text: "Desert Safari" }],
  },
  {
    id: 6,
    image: "/image/advanture/image4.png",
    title: "Camel Caravan Journey",
    description: "Join a traditional caravan across golden sand dunes",
    infoPills: [{ text: "Traditional" }, { text: "Journey" }],
  },
  {
    id: 7,
    image: "/image/advanture/image2.png",
    title: "Stargazing Adventure",
    description:
      "Witness the beauty of desert night sky with crystal clear stars",
    infoPills: [{ text: "Stars" }, { text: "Night Tour" }],
  },
];

export const attractionsData: Card1[] = [
  {
    id: "1",
    image: "/image/attractions/image1.png",
    title: "Sydney, Australia",
    href:"/event-details",
    description:
      "Explore Sydney's world-famous attractions, from the iconic Opera House to the sun-kissed Bondi Beach. Discover the best ways to get around, enjoy vibrant city .....",
  },
  {
    id: "2",
    image: "/image/attractions/image2.png",
    title: "Taj Mahal, India",
    href:"/event-details",
    description:
      "Located in Agra, the Taj Mahal is one of the Seven Wonders of .....",
  },
  {
    id: "3",
    image: "/image/attractions/image3.png",
    title: "Colosseum, Italy",
    href:"/event-details",
    description:
      "Step into history at the Colosseum in Rome, Italy's most iconic .....",
  },
];

export const accordionData: AccordionItem[] = [
  {
    title: "How do I create an account?",
    description:
      'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.',
  },
  {
    title: "What is your return policy?",
    description:
      "Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.",
  },
  {
    title: "Can I change my shipping address?",
    description:
      "Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",
  },
  {
    title: "Are there any discounts for loyal customers?",
    description:
      "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
  },
  {
    title: "Are there any discounts for loyal customers?",
    description:
      "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
  },
];

export const imagesGridData: ImageGridItem[] = [
  {
    id: "1",
    src: "/image/faq/image.jpg",
    alt: "Image 1",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: "2",
    src: "/image/faq/image1.jpg",
    alt: "Image 2",
    colSpan: 4,
    rowSpan: 2,
    colStart: 3,
  },
  {
    id: "3",
    src: "/image/faq/image2.jpg",
    alt: "Image 3",
    rowSpan: 3,
    rowStart: 3,
  },
  {
    id: "4",
    src: "/image/faq/image3.jpg",
    alt: "Image 4",
    colSpan: 3,
    rowSpan: 3,
    rowStart: 3,
  },
  {
    id: "5",
    src: "/image/faq/image4.jpg",
    alt: "Image 5",
    colSpan: 2,
    rowSpan: 3,
    colStart: 5,
    rowStart: 3,
  },
];

export const TravelEssentialsData: Product[] = [
  {
    id: 1,
    image: "/image/travel essentials/image6.png",
    imageAlt: "Adventure Rain Tent - Dark Blue",
    title: "Adventure Rain Tent",
    price: { amount: 74, currency: "$" },
    rating: 5,
  },
  {
    id: 2,
    image: "/image/travel essentials/image1.png",
    imageAlt: "Solo Rain Tent - Green",
    title: "Solo Rain Tent",
    price: { amount: 74, currency: "$" },
    rating: 4.4,
  },
  {
    id: 3,
    image: "/image/travel essentials/image2.png",
    imageAlt: "Adventure Tent - Light Blue",
    title: "Adventure Tent",
    price: { amount: 74, currency: "$" },
    rating: 3.2,
  },
  {
    id: 4,
    image: "/image/travel essentials/image3.png",
    imageAlt: "Adventure Rain Tent - Yellow",
    title: "Adventure Rain Tent",
    price: { amount: 74, currency: "$" },
    rating: 2.4,
  },
  {
    id: 5,
    image: "/image/travel essentials/image4.png",
    imageAlt: "Duo Rain Tent - Beige",
    title: "Duo Rain Tent",
    price: { amount: 74, currency: "$" },
    rating: 5,
  },
  {
    id: 6,
    image: "/image/travel essentials/image5.png",
    imageAlt: "Solo Rain Tent - Blue",
    title: "Solo Rain Tent",
    price: { amount: 74, currency: "$" },
    rating: 1,
  },
];
export const promiseData: PromiseCardData[] = [
  {
    title: "Expert",
    subtitle: "Guidance",
    iconName: "FaDollarSign",
    iconBg: "bg-yellow-400",
    image: "/image/promise/image.png",
    cardBg: "bg-gradient-to-br from-cyan-200 via-green-200 to-green-300",
    borderColor: "border-green-400",
    features: [
      "Customizable itineraries",
      "Flexible travel options",
      "Designed around your interests",
    ],
  },
  {
    title: "Tailored",
    subtitle: "Experiences",
    iconName: "FaStar",
    iconBg: "bg-pink-500",
    image: "/image/promise/image1.png",
    cardBg: "bg-gradient-to-br from-blue-200 via-purple-200 to-purple-300",
    borderColor: "border-purple-400",
    features: [
      "Customizable itineraries",
      "Flexible travel options",
      "Designed around your interests",
    ],
  },
  {
    title: "Trusted",
    subtitle: "Service",
    iconName: "FaCheckCircle",
    iconBg: "bg-green-600",
    image: "/image/promise/image2.png",

    cardBg: "bg-gradient-to-br from-cyan-200 via-green-200 to-green-300",
    borderColor: "border-green-400",
    features: [
      "Customizable itineraries",
      "Flexible travel options",
      "Designed around your interests",
    ],
  },
  {
    title: "Memorable",
    subtitle: "Journeys",
    iconName: "FaMapMarkedAlt",
    image: "/image/promise/image3.png",

    iconBg: "bg-purple-600",
    cardBg: "bg-gradient-to-br from-blue-200 via-purple-200 to-purple-300",
    borderColor: "border-purple-400",
    features: [
      "Customizable itineraries",
      "Flexible travel options",
      "Designed around your interests",
    ],
  },
];

export const productData = {
  mainDescription:
    "Lightweight, durable, and designed for solo adventurers, the Adventure Single Tent offers quick setup and all-weather protection. Built with breathable fabric and reinforced poles, it ensures comfort whether you're camping in the mountains, forest, or by the beach.",
  keyFeatures: [
    "Ultra-light & compact design — easy to carry in your backpack",
    "Waterproof & windproof material for all-season use",
    "Quick setup in just minutes",
    "Ventilated mesh panels for airflow",
    "Spacious interior for one person + gear",
  ],
  perfectFor:
    "Hiking, camping, backpacking, festivals, and all outdoor adventures.",
};

export const allGalleryItems: BlogCardData[] = [
  {
    id: 1,
    image: "/image/blog/image.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 2,
    image: "/image/blog/image1.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 3,
    image: "/image/blog/image.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 4,
    image: "/image/blog/image1.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 5,
    image: "/image/blog/image.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 6,
    image: "/image/blog/image1.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 7,
    image: "/image/blog/image.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 8,
    image: "/image/blog/image1.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 9,
    image: "/image/blog/image.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 10,
    image: "/image/blog/image1.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 11,
    image: "/image/blog/image.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 12,
    image: "/image/blog/image1.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 13,
    image: "/image/blog/image.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 14,
    image: "/image/blog/image1.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 15,
    image: "/image/blog/image.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 16,
    image: "/image/blog/image1.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 17,
    image: "/image/blog/image.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 18,
    image: "/image/blog/image1.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 19,
    image: "/image/blog/image.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 20,
    image: "/image/blog/image1.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 21,
    image: "/image/blog/image.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 22,
    image: "/image/blog/image1.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 23,
    image: "/image/blog/image.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 24,
    image: "/image/blog/image1.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 25,
    image: "/image/blog/image.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 26,
    image: "/image/blog/image1.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 27,
    image: "/image/blog/image.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 28,
    image: "/image/blog/image1.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 29,
    image: "/image/blog/image.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
  {
    id: 30,
    image: "/image/blog/image1.png",
    title: "Breathtaking Escapes: Discover the Finest Mountain Views",
  },
];

export const blogData: BlogPost = {
  id: "qualicum-beach",
  title: "Qualicum Beach",
  location: "Normandy, France",
  rating: 4.96,
  reviewCount: 533,
  heroImage: "/image/blog/image3.jpg",
  tags: [
    "Easy Medium Hike",
    "Peaceful Trails",
    "Stunning Sunset",
    "Swimming and Watersport fun",
  ],
  sections: [
    {
      title: "Journey Through Qualicum Beach, Canada",
      content:
        "I spent forty-two well sunny, river-trail-walking, one-of-a-coastal-town-experience.",
      mapImage:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d741.3336845139861!2d-0.2363278137508343!3d51.60299289810882!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487616d5ec1abeaf%3A0xcdb65785f534bfbc!2sSS%20Racket%20Services!5e1!3m2!1sen!2sbd!4v1763447616685!5m2!1sen!2sbd",
    },
    {
      title: "First Impressions of Qualicum Beach",
      content:
        "Arriving in Qualicum Beach felt like stepping into a serene coastal getaway and morning local vibe. The fresh ocean breeze, quiet streets, and friendly locals made it so perfect. I felt it was a sparkling getaway. This trip reminded me why I studied all about swimming, hidden gems and inviting natural joy.",
    },
    {
      title: "Walking Through Quaint Streets",
      content:
        "Qualicum Beach is a blend of small-town charm and rich history. I wandered through local markets, tried some delicious Canadian treats, and discovered artisan shops filled with handmade souvenirs. Every corner seemed to tell a story, and the locals were more than happy to share their recommendations.",
      image: "/image/blog/image4.jpg",
    },
    {
      title: "Beaches, Parks, and Trails",
      content:
        "The real highlight of the trip was the beach. I spent hours walking along the pristine beaches, watching the sunset over the water, and exploring nearby trails. The rich sandy stretches were perfect for long, peaceful strolls. Whether kayaking or simply relaxing, it brought a new peace, serenity moment.",
    },
    {
      title: "Kayaking Experiences I'll Never Forget",
      content:
        "Whether it was kayaking along the coastline, enjoying a picnic at a scenic overlook, or simply watching the waves, every moment felt magical to the edge of Qualicum Beach. The peaceful environment, combined with fun adventures, made this trip unforgettable.",
      image: "/image/blog/image5.jpg",
    },
    {
      title: "Why You Should Visit Qualicum Beach",
      content:
        "Qualicum Beach is more than just a beautiful destination—it's a complete experience that blends natural beauty, local culture, and a welcoming atmosphere. Whether you're kayaking bro, enjoying a romantic getaway, or creating family memories, this coastal town has something for everyone. From beautiful beach walks and outdoor adventures to cozy cafes and friendly locals, Qualicum Beach offers the perfect blend of relaxation and exploration. It's a place where time slows down, and every moment feels meaningful.",
    },
  ],
};

export const attractionPostData: AttractionPost = {
  id: "qualicum-beach",
  title: "Qualicum Beach",
  heroImage: "/image/blog/image3.jpg",
  sections: [
    {
      title: "Discovering Mont Saint-Michel: France’s Medieval Marvel",
      content:
        "Mont Saint-Michel is one of France’s most iconic landmarks, famous for its medieval abbey, cobblestone streets, and dramatic tides. Perched on a rocky island, this UNESCO World Heritage site draws travelers from around the world seeking history, architecture, and breathtaking views.",
      mapImage:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d741.3336845139861!2d-0.2363278137508343!3d51.60299289810882!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487616d5ec1abeaf%3A0xcdb65785f534bfbc!2sSS%20Racket%20Services!5e1!3m2!1sen!2sbd!4v1763447616685!5m2!1sen!2sbd",
    },
    {
      title: "Where to Go",
      content:
        "Mont Saint-Michel Abbey: Explore the historic church, cloisters, and ramparts. Grand Rue: Wander the quaint streets lined with shops, cafes, and museums. Tidal Flats: Experience the unique landscape during low tide — guided walks recommended. Museums: Learn about the abbey’s history and local culture at museums like Maritime and Historical Museum. Surrounding Normandy Countryside: Scenic views and charming nearby villages.",
    },
    {
      title: "How to Go",
      content:
        "By Air: Fly into Rennes or Paris Charles de Gaulle Airport, then drive (~3–4 hours from Paris).By Train: Take a train from Paris to Pontorson-Mont Saint-Michel Station, followed by a shuttle to the island.By Car: It’s a 4-hour drive from Paris with parking available on the mainland.",
    },
    {
      title: "Discovering Mont Saint-Michel: France’s Medieval Marvel",
      content:
        "Recommended Duration: 1–2 days.Day 1: Arrival, check-in at a nearby hotel, evening stroll around Mont Saint-Michel.Day 2: Explore the Abbey, Grand Rue, museums, and enjoy the tidal flats experience. Depart in the evening or stay overnight for a sunset view.",
    },
    {
      title: "Tips for Travelers",
      content:
        "Check tide schedules — Mont Saint-Michel can be completely surrounded by water during high tide.Wear comfortable walking shoes — cobblestone streets can be uneven. Arrive early to avoid crowds, especially in summer. Local hotels and guesthouses offer a unique experience staying close to the island.",
    },
    {
      title: "Why You Should Visit",
      content:
        "Mont Saint-Michel is a magical destination combining history, architecture, and natural beauty. With 1–2 days, you can explore its medieval streets, marvel at the abbey, and witness the dramatic tides that make this island truly unforgettable.",
    },
  ],
};

export const productsData: Product[] = [
  {
    id: 1,
    title: "Adventure Rain Tent",
    price: { amount: 74, currency: "$" },
    image: "/image/product/product-thumb1.png",
    category: "luggage",
    rating: 5,
  },
  {
    id: 2,
    title: "Solo Rain Tent",
    price: { amount: 74, currency: "$" },
    image: "/image/product/product-thumb2.png",
    category: "luggage",
    rating: 5,
  },
  {
    id: 3,
    title: "Adventure Tent",
    price: { amount: 74, currency: "$" },
    image: "/image/product/product-thumb3.png",
    category: "outdoor",
    rating: 5,
  },
  {
    id: 4,
    title: "Adventure Rain Tent",
    price: { amount: 74, currency: "$" },
    image: "/image/product/product-thumb4.png",
    category: "outdoor",
    rating: 5,
  },
  {
    id: 5,
    title: "Duo Rain Tent",
    price: { amount: 74, currency: "$" },
    image: "/image/product/product-thumb5.png",
    category: "outdoor",
    rating: 5,
  },
  {
    id: 6,
    title: "Solo Rain Tent",
    price: { amount: 74, currency: "$" },
    image: "/image/product/product-thumb6.png",
    category: "outdoor",
    rating: 5,
  },
  {
    id: 7,
    title: "Mountain Tent",
    price: { amount: 74, currency: "$" },
    image: "/image/product/product-thumb7.png",
    category: "apparel",
    rating: 5,
  },
  {
    id: 8,
    title: "Explorer Tent",
    price: { amount: 74, currency: "$" },
    image: "/image/product/product-thumb8.png",
    category: "apparel",
    rating: 5,
  },
];

export const productsDataCategories = [
  { label: "Products", value: "all" },
  { label: "Luggage", value: "luggage" },
  { label: "Apparel", value: "apparel" },
  { label: "Outdoor", value: "outdoor" },
  { label: "Comfort", value: "comfort" },
  { label: "Navigation", value: "navigation" },
];

export const toursData: toursType[] = [
  {
    id: 1,
    name: "Adventure Rain Tent",
    price: { amount: 74, currency: "$", suffix: "/person" },
    bg: "/image/tours/image.jpg",
    category: "luggage",
    rating: 5,
    infoPills: [{ text: "Ireland" }, { text: "5 Days" }],
  },
  {
    id: 2,
    name: "Solo Rain Tent",
    price: { amount: 74, currency: "$", suffix: "/person" },
    bg: "/image/tours/image1.jpg",
    category: "luggage",
    rating: 5,
    infoPills: [{ text: "Ireland" }, { text: "5 Days" }],
  },
  {
    id: 3,
    name: "Adventure Tent",
    price: { amount: 74, currency: "$", suffix: "/person" },
    bg: "/image/tours/image2.jpg",
    category: "outdoor",
    rating: 5,
    infoPills: [{ text: "Ireland" }, { text: "5 Days" }],
  },
  {
    id: 4,
    name: "Adventure Rain Tent",
    price: { amount: 74, currency: "$", suffix: "/person" },
    bg: "/image/tours/image3.jpg",
    category: "outdoor",
    rating: 5,
    infoPills: [{ text: "Ireland" }, { text: "5 Days" }],
  },
  {
    id: 5,
    name: "Duo Rain Tent",
    price: { amount: 74, currency: "$", suffix: "/person" },
    bg: "/image/tours/image4.jpg",
    category: "outdoor",
    rating: 5,
    infoPills: [{ text: "Ireland" }, { text: "5 Days" }],
  },
  {
    id: 6,
    name: "Solo Rain Tent",
    price: { amount: 74, currency: "$", suffix: "/person" },
    bg: "/image/tours/image5.jpg",
    category: "outdoor",
    rating: 5,
    infoPills: [{ text: "Ireland" }, { text: "5 Days" }],
  },
  {
    id: 7,
    name: "Mountain Tent",
    price: { amount: 74, currency: "$", suffix: "/person" },
    bg: "/image/tours/image.jpg",
    category: "apparel",
    rating: 5,
    infoPills: [{ text: "Ireland" }, { text: "5 Days" }],
  },
  {
    id: 8,
    name: "Explorer Tent",
    price: { amount: 74, currency: "$", suffix: "/person" },
    bg: "/image/tours/image.jpg",
    category: "apparel",
    rating: 5,
    infoPills: [{ text: "Ireland" }, { text: "5 Days" }],
  },
];

export const toursDataCategories = [
  { label: "Products", value: "all" },
  { label: "Luggage", value: "luggage" },
  { label: "Apparel", value: "apparel" },
  { label: "Outdoor", value: "outdoor" },
  { label: "Comfort", value: "comfort" },
  { label: "Navigation", value: "navigation" },
];
export const eventsData: eventsType[] = [
  {
    id: 1,
    name: "Adventure Rain Tent",
    price: 74,
    bg: "/image/events/image.jpg",
    category: "luggage",
    rating: 5,
    infoPills: [{ text: "Ireland" }, { text: "5 Days" }],
  },
  {
    id: 2,
    name: "Solo Rain Tent",
    price: 74,
    bg: "/image/events/image1.jpg",
    category: "luggage",
    rating: 5,
    infoPills: [{ text: "Ireland" }, { text: "5 Days" }],
  },
  {
    id: 3,
    name: "Adventure Tent",
    price: 74,
    bg: "/image/events/image2.jpg",
    category: "outdoor",
    rating: 5,
    infoPills: [{ text: "Ireland" }, { text: "5 Days" }],
  },
  {
    id: 4,
    name: "Adventure Rain Tent",
    price: 74,
    bg: "/image/events/image3.jpg",
    category: "outdoor",
    rating: 5,
    infoPills: [{ text: "Ireland" }, { text: "5 Days" }],
  },
  {
    id: 5,
    name: "Duo Rain Tent",
    price: 74,
    bg: "/image/events/image4.jpg",
    category: "outdoor",
    rating: 5,
    infoPills: [{ text: "Ireland" }, { text: "5 Days" }],
  },
  {
    id: 6,
    name: "Solo Rain Tent",
    price: 74,
    bg: "/image/events/image5.jpg",
    category: "outdoor",
    rating: 5,
    infoPills: [{ text: "Ireland" }, { text: "5 Days" }],
  },
  {
    id: 7,
    name: "Mountain Tent",
    price: 74,
    bg: "/image/events/image.jpg",
    category: "apparel",
    rating: 5,
    infoPills: [{ text: "Ireland" }, { text: "5 Days" }],
  },
  {
    id: 8,
    name: "Explorer Tent",
    price: 74,
    bg: "/image/events/image.jpg",
    category: "apparel",
    rating: 5,
    infoPills: [{ text: "Ireland" }, { text: "5 Days" }],
  },
];

export const eventsDataCategories = [
  { label: "Products", value: "all" },
  { label: "Luggage", value: "luggage" },
  { label: "Apparel", value: "apparel" },
  { label: "Outdoor", value: "outdoor" },
  { label: "Comfort", value: "comfort" },
  { label: "Navigation", value: "navigation" },
];

export const TourDetailsData: Tour = {
  id: "mont-saint-michel",
  title: "Mont Saint-Michel",
  location: "Normandy, France",
  rating: 4.5,
  reviews: 533,
  duration: "5 Days",
  groupSize: "9 People",
  accommodation: "Hotel",
  basePrice: 1299,
  adultPrice: 723,
  childPrice: 520,
  serviceBookingPrice: 320,
  serviceTravelerPrice: 320,

  heroImages: [
    "/image/events/image.jpg",
    "/image/events/image1.jpg",
    "/image/events/image2.jpg",
  ],

  activities: ["Surfing", "Trekking", "Kayaking", "Diving", "Cycling"],

  description:
    "Experiance balis beauty on this 7day tour, exploring temples, jungles, beaches and cultural site =s in Ubud.Experiance balisExperiance balis beauty on this 7day tour, exploring temples, jungles, beaches and cultural site =s in Ubud.Experiance balisExperiance balis beauty on this 7day tour, exploring temples, jungles, beaches and cultural site =s in Ubud.Experiance balisExperiance balis beauty on this 7day tour, exploring temples, jungles, beaches and cultural site =s in Ubud.Experiance balisExperiance balis beauty on this 7day tour, exploring temples, jungles, beaches and cultural site =s in Ubud.Experiance balis",

  itinerary: [
    {
      day: 1,
      title: "Arrive at Bali Airport",
      description:
        "Upon arriving at Ngurah Rai International Airport (Denpasar, Bali), you'll be greeted by our tour guide who will be holding a sign with your name. After check-in, rest and enjoy a beautiful sunset along the nearby beach. End the day with a welcome dinner.",
    },
    {
      day: 2,
      title: "Ubud & Rice Terraces",
      description:
        "Full day exploring and enjoy a beautiful sunset along the nearby beach. End the day with a welcome dinner.",
    },
    {
      day: 3,
      title: "Temples & Tanah Lot",
      description: "Visit sacred temples...",
    },
    {
      day: 4,
      title: "Volcano & Waterfalls",
      description: "Adventure to Mount Batur...",
    },
    {
      day: 5,
      title: "Leisure & Departure",
      description: "Free time and departure...",
    },
  ],

  dateRange: "Sun, June 27 - Thu, July 1",
  itineraryImage: "/image/events/image1.jpg",
};
export const EventDetailsData: EventDetailsType = {
  id: "mont-saint-michel",
  title: "Mont Saint-Michel",
  location: "Normandy, France",
  rating: 4.5,
  reviews: 533,
  duration: "5 Days",
  groupSize: "9 People",
  accommodation: "Hotel",
  basePrice: 1299,
  adultPrice: 723,
  childPrice: 520,
  serviceBookingPrice: 320,
  serviceTravelerPrice: 320,

  heroImages: [
    "/image/events/image.jpg",
    "/image/events/image1.jpg",
    "/image/events/image2.jpg",
  ],

  activities: ["Surfing", "Trekking", "Kayaking", "Diving", "Cycling"],

  description:
    "Experiance balis beauty on this 7day tour, exploring temples, jungles, beaches and cultural site =s in Ubud.Experiance balisExperiance balis beauty on this 7day tour, exploring temples, jungles, beaches and cultural site =s in Ubud.Experiance balisExperiance balis beauty on this 7day tour, exploring temples, jungles, beaches and cultural site =s in Ubud.Experiance balisExperiance balis beauty on this 7day tour, exploring temples, jungles, beaches and cultural site =s in Ubud.Experiance balisExperiance balis beauty on this 7day tour, exploring temples, jungles, beaches and cultural site =s in Ubud.Experiance balis",

  itinerary: [
    {
      day: 1,
      title: "Arrive at Bali Airport",
      description:
        "Upon arriving at Ngurah Rai International Airport (Denpasar, Bali), you'll be greeted by our tour guide who will be holding a sign with your name. After check-in, rest and enjoy a beautiful sunset along the nearby beach. End the day with a welcome dinner.",
    },
    {
      day: 2,
      title: "Ubud & Rice Terraces",
      description:
        "Full day exploring and enjoy a beautiful sunset along the nearby beach. End the day with a welcome dinner.",
    },
    {
      day: 3,
      title: "Temples & Tanah Lot",
      description: "Visit sacred temples...",
    },
    {
      day: 4,
      title: "Volcano & Waterfalls",
      description: "Adventure to Mount Batur...",
    },
    {
      day: 5,
      title: "Leisure & Departure",
      description: "Free time and departure...",
    },
  ],

  dateRange: "Sun, June 27 - Thu, July 1",
  itineraryImage: "/image/events/image1.jpg",
};

export const policyData: PolicySection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: [
      "At Travela, we respect your privacy and are committed to protecting your personal information. When you use our website or book tours, the data you provide helps us deliver safe and seamless travel experiences. We prioritize transparency and take every step to safeguard your information.",
    ],
  },
  {
    id: "information-collection",
    title: "Information We Collect",
    content: [
      "To provide high-quality travel services, we collect the following information:",
      "Personal Information: Name, email, phone number, billing details, and payment information.",
      "Travel Information: Preferences, booking history, and feedback.",
      "Website Usage Data: IP addresses, cookies, and device info for performance and user experience.",
    ],
  },
  {
    id: "data-usage",
    title: "How We Use Your Information",
    content: [
      "Processing and confirming bookings efficiently.",
      "Sending updates and tailored recommendations.",
      "Improving our website, apps, and services.",
    ],
  },
  {
    id: "data-sharing",
    title: "Data Sharing & Third Parties",
    content: [
      "We never sell your data. We may share limited information with trusted travel partners like:",
      "Hotels, airlines, and transportation providers.",
      "Payment processors and booking platforms.",
      "Local tour operators and guides.",
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    content: [
      "Your data security is our top priority. We use industry-standard measures like:",
      "Encrypted communications and secure servers.",
      "Access restriction and monitoring systems.",
      "Regular updates to prevent unauthorized access.",
    ],
  },
  {
    id: "user-rights",
    title: "Your Rights & Cookies",
    content: [
      "You may access, update, or delete your data anytime. We also use cookies to:",
      "Improve navigation and personalization.",
      "Analyze website traffic and performance.",
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children’s Privacy",
    content: [
      "Our services are not directed toward children under the age of 18. We do not knowingly collect information from children. If we learn that personal data from a child has been collected, we will take immediate steps to delete it. Parents or guardians who believe their child’s data has been collected may contact us for prompt assistance.",
    ],
  },
  {
    id: "policy-updates",
    title: "Updates to This Privacy Policy",
    content: [
      "We may update this Privacy Policy periodically to reflect changes in our practices, legal requirements, or service improvements. Updates will be posted on this page with the latest revision date. We encourage all users to review this policy regularly to stay informed about how we protect and manage your personal data.",
    ],
  },
  {
    id: "contact",
    title: "Customer Support",
    content: [
      "For any issues, complaints, or questions, users can contact our support team. We are always ready to ensure a safe, convenient, and effective experience for every user. Users can get quick and easy solutions to their problems.",
    ],
  },
];
