/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { JSX, useState } from "react";
import {
  MapPin,
  Star,
  Share2,
  Hotel,
  Clock,
  Users,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import Container from "@/components/shared/container/Container";
import { EventDetailsType } from "@/types/event";
import { EventDetailsData } from "@/data";
import Select from "@/components/shared/select/Select";
import Checkbox from "@/components/shared/checkbox/Checkbox";
import ScrollAnimator from "@/components/shared/animation/ScrollAnimator";
import { MdDirectionsBike, MdKayaking, MdOutlineSurfing } from "react-icons/md";
import { GiDivingHelmet, GiHiking } from "react-icons/gi";
const activityIcons: Record<string, JSX.Element> = {
  Surfing: <MdOutlineSurfing className="w-4 h-4" />,
  Trekking: <GiHiking className="w-4 h-4" />,
  Kayaking: <MdKayaking className="w-4 h-4" />,
  Diving: <GiDivingHelmet className="w-4 h-4" />,
  Cycling: <MdDirectionsBike className="w-4 h-4" />,
};
export default function EventDetails() {
  const event: EventDetailsType = EventDetailsData;
  const [accommodation, setAccommodation] = useState(event.accommodation);
  const [duration, setDuration] = useState(event.duration);
  const [people, setPeople] = useState(event.groupSize);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [adults, setAdults] = useState(3);
  const [children, setChildren] = useState(2);
  const [serviceBooking, setServiceBooking] = useState(true);
  const [serviceTraveler, setServiceTraveler] = useState(true);
  const [expandedDay, setExpandedDay] = useState(
    event.itinerary[0]?.day || null
  );
  const calculateTotal = () => {
    let total = adults * event.adultPrice + children * event.childPrice;
    if (serviceBooking) total += event.serviceBookingPrice;
    if (serviceTraveler) total += event.serviceTravelerPrice;
    return total;
  };
  const toggleDay = (day: any) => {
    setExpandedDay(expandedDay === day ? null : day);
  };
  return (
    <Container>
      <div>
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-cormorant font-bold text-gray-900">
                {event.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-cormorant font-medium">
                    {event.rating}/5 ({event.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm cursor-pointer">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>

          {/* Image Gallery - Responsive Grid */}
          <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-[30px] mb-6">
              {/* Main large image */}
              <div className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-2 ">
                <Image
                  src={event.heroImages[0]}
                  alt={event.title}
                  width={800}
                  height={600}
                  className="w-full h-64 sm:h-80 md:h-96 xl:h-full object-cover rounded-xl"
                />
              </div>

              {/* Smaller images */}
              <div className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 gap-5 lg:gap-[30px]">
                  {event.heroImages.slice(1).map((img, i) => (
                    <Image
                      key={i}
                      src={img}
                      alt={`${event.title} ${i + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-48 sm:h-56 md:h-64 xl:h-[300px] object-cover rounded-xl"
                    />
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimator>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-3 gap-8">
          {/* Left: Content */}
          <div className="xl:col-span-2 lg:col-span-2 space-y-10">
            <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
              {/* Description */}
              <div className="flex flex-wrap gap-5 pb-6 ">
                {event.activities.map((activity) => (
                  <div
                    key={activity}
                    className="flex items-center gap-2 text-gray-700 bg-background px-4 rounded-full py-2.5"
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                      {activityIcons[activity]}
                    </div>
                    <span className="text-[18px] font-inter font-medium">
                      {activity}
                    </span>
                  </div>
                ))}
              </div>
              <section>
                <h2 className="text-2xl font-cormorant font-bold text-gray-900 mb-4">
                  Description
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                  {event.description}
                </p>
              </section>
            </ScrollAnimator>

            {/* Itinerary */}
            <section>
              <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
                <h2 className="text-2xl font-cormorant font-bold text-gray-900 mb-6">
                  Travel Itinerary
                </h2>
              </ScrollAnimator>
              <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
                <div className="grid xl:grid-cols-2 lg:grid-cols-1 grid-cols-1  gap-8">
                  <div className="flex-1 order-1 md:order-2 xl:order-1">
                    <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
                      <div className="inline-flex items-center gap-2 bg-background px-4 py-3 rounded-lg mb-6">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="text-sm  font-medium text-primary">
                          {event.dateRange}
                        </span>
                      </div>
                    </ScrollAnimator>
                    <div className="space-y-6">
                      {event.itinerary.map((item, index) => (
                        <ScrollAnimator
                          key={item.day}
                          repeatOnScroll
                          effect="staggerSlideUp"
                        >
                          <div className="border-b border-gray-200">
                            <button
                              onClick={() => toggleDay(item.day)}
                              className="w-full flex justify-between items-center py-3 text-left cursor-pointer"
                            >
                              <h3 className="font-semibold text-gray-900">
                                Day {item.day}: {item.title}
                              </h3>
                              <span className="text-gray-600 transform transition-transform duration-300 cursor-pointer">
                                {expandedDay === item.day ? "−" : "+"}
                              </span>
                            </button>

                            <div
                              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                expandedDay === item.day
                                  ? "max-h-[500px] opacity-100 py-3"
                                  : "max-h-0 opacity-0 py-0"
                              }`}
                            >
                              {item.description && (
                                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                  {item.description}
                                </p>
                              )}

                              {/* Show iframe only for the first item (index === 0) */}
                              {index === 0 && (
                                <div className="mt-4">
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d741.3336845139861!2d-0.2363278137508343!3d51.60299289810882!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487616d5ec1abeaf%3A0xcdb65785f534bfbc!2sSS%20Racket%20Services!5e1!3m2!1sen!2sbd!4v1763447616685!5m2!1sen!2sbd"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    className="w-full h-[200px] lg:h-[185px] rounded-xl"
                                    referrerPolicy="no-referrer-when-downgrade"
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </ScrollAnimator>
                      ))}
                    </div>
                  </div>
                  <div className="w-full order-2 md:order-1 xl:order-2">
                    <Image
                      src={event.itineraryImage}
                      alt="event itinerary"
                      width={400}
                      height={500}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </ScrollAnimator>
            </section>
          </div>
          {/* Right: Booking Card (Sticky on Desktop) */}
          <aside className="xl:col-span-1 lg:col-span-2">
            <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
              <div className="bg-white rounded-xl  border border-gray-200 p-6 mb-6">
                <h3 className="text-[28px] font-cormorant font-bold text-gray-900 mb-2">
                  Bali Bliss: Ubud and Seminyak Adventure
                </h3>
                <p className="text-sm text-gray-600 mb-5">
                  5-day guided event with hotel stay. Max 9 travelers.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-700 mb-6">
                  <div className="flex items-center gap-2 text-gray-700 bg-background px-4 rounded-full py-2.5">
                    <Hotel className="w-4 h-4" /> {event.accommodation}
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 bg-background px-4 rounded-full py-2.5">
                    <Clock className="w-4 h-4" /> {event.duration}
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 bg-background px-4 rounded-full py-2.5">
                    <Users className="w-4 h-4" /> {event.groupSize}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-xl font-inter font-bold">
                      ${event.basePrice}
                    </span>
                    <span className="text-gray-500 text-sm"> /person</span>
                  </div>
                  <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 font-cormorant font-medium cursor-pointer">
                    Book Now
                  </button>
                </div>
              </div>
            </ScrollAnimator>

            {/* Booking Form - Sticky */}
            <div className="bg-white rounded-xl  border border-gray-200 p-6 sticky top-24">
              <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
                <h3 className="text-xl font-cormorant font-bold mb-6">
                  Start Your Journey
                </h3>
                {/* Form Fields */}
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-cormorant font-semibold mb-2">
                      Accommodation
                    </label>
                    <Select value={accommodation} onChange={setAccommodation}>
                      <option>Hotel</option>
                      <option>Resort</option>
                      <option>Villa</option>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Select
                      label="Duration"
                      value={duration}
                      onChange={setDuration}
                    >
                      <option>5 Days</option>
                      <option>7 Days</option>
                      <option>10 Days</option>
                    </Select>
                    <Select
                      label="Group Size"
                      value={people}
                      onChange={setPeople}
                    >
                      <option>9 People</option>
                      <option>6 People</option>
                      <option>12 People</option>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm  font-semibold mb-2">
                      Date & Time
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="input"
                      />
                      <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm  font-semibold mb-2">
                      Persons
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <Select
                        value={`Adult, ${adults}`}
                        onChange={(v) => setAdults(Number(v.split(", ")[1]))}
                      >
                        {[1, 2, 3, 4].map((n) => (
                          <option key={n}>Adult, {n}</option>
                        ))}
                      </Select>
                      <Select
                        value={`Child, ${children}`}
                        onChange={(v) => setChildren(Number(v.split(", ")[1]))}
                      >
                        {[0, 1, 2, 3].map((n) => (
                          <option key={n}>Child, {n}</option>
                        ))}
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Checkbox
                          checked={serviceBooking}
                          onChange={setServiceBooking}
                        />
                        <span className="text-sm">Service per Booking</span>
                      </div>
                      <span className="font-semibold">
                        ${event.serviceBookingPrice}
                      </span>
                    </label>
                    <label className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Checkbox
                          checked={serviceTraveler}
                          onChange={setServiceTraveler}
                        />
                        <span className="text-sm">Service per Traveler</span>
                      </div>
                      <span className="font-semibold">
                        ${event.serviceTravelerPrice}
                      </span>
                    </label>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-cormorant font-semibold">
                        Total
                      </span>
                      <span className="text-2xl  font-bold">
                        ${calculateTotal()}
                      </span>
                    </div>
                    <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-gray-800  font-medium cursor-pointer">
                      Confirm Booking
                    </button>
                  </div>
                </div>
              </ScrollAnimator>
            </div>
          </aside>
        </div>
      </div>
    </Container>
  );
}
