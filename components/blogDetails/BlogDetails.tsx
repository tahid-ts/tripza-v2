"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BlogPost } from "@/types/blog";
import Title from "../shared/title/Title";
import Container from "../shared/container/Container";
import ScrollAnimator from "../shared/animation/ScrollAnimator";

interface BlogPostProps {
  data: BlogPost;
}

export default function BlogDetails({ data }: BlogPostProps) {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowShareMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Copy link to clipboard
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareMenu(false);
  };

  // Share on Facebook
  const handleFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}`,
      "_blank"
    );
    setShowShareMenu(false);
  };

  // Share on Twitter
  const handleTwitterShare = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        window.location.href
      )}`,
      "_blank"
    );
    setShowShareMenu(false);
  };

  return (
    <Container>
      <header className="border-b border-gray-200 py-6 ">
        <div className="">
          <Title title={data.title}></Title>
          <div className="flex flex-row  items-center gap-6 text-sm text-gray-600">
            <span>{data.location}</span>
            <span>
              {data.rating} ({data.reviewCount} reviews)
            </span>

            <div ref={dropdownRef} className="relative inline-block">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="ml-auto px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors relative cursor-pointer"
              >
                Share
              </button>
              <div
                className={`absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-40 z-10 border border-gray-200 transition-all duration-300 ease-in-out  ${
                  showShareMenu
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <button
                  onClick={handleCopyLink}
                  className="w-full text-left px-4 py-2 hover:bg-primary hover:text-white text-sm cursor-pointer"
                >
                  Copy Link
                </button>
                <button
                  onClick={handleFacebookShare}
                  className="w-full text-left px-4 py-2 hover:bg-primary hover:text-white text-sm cursor-pointer"
                >
                  Facebook
                </button>
                <button
                  onClick={handleTwitterShare}
                  className="w-full text-left px-4 py-2 hover:bg-primary hover:text-white text-sm cursor-pointer"
                >
                  Twitter
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
        <div className="relative w-full h-[250px] md:h-[450px] rounded-lg">
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
          <div className="absolute top-6 right-6 bg-black/30 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg shadow-lg px-5 py-4 max-w-[280px]">
            <ul className="space-y-3">
              {data.tags.map((tag, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-white"
                >
                  <span className="w-2 h-2 bg-white rounded-full mt-1.5 shrink-0"></span>
                  <span>{tag}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollAnimator>

      <main className="pt-[60px] ">
        <div className="space-y-10">
          {/* Hero Section: Introduction and Map */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            <div>
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 font-cormorant">
                Journey Through Qualicum Beach, Canada
              </h2>
              <p className="text-body-text leading-relaxed text-sm mb-6">
                A travel story filled with scenic views, local culture, and
                unforgettable memories.
              </p>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 font-cormorant">
                First Impressions
              </h3>
              <p className="text-body-text leading-relaxed text-sm mb-6">
                From the moment I arrived, Qualicum Beach captivated me with its
                serene coastline and welcoming atmosphere. The fresh ocean
                breeze, quiet streets, and friendly locals set the tone for a
                perfect getaway. This trip was a reminder of why traveling is
                about discovering hidden gems and creating lasting memories.
              </p>
            </div>
            <div className="flex justify-end">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.334738055945!2d-124.443067!3d49.353119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5487d5e7a0a0a0a1%3A0x50a8f1b3f1b3f1b3!2sQualicum%20Beach%2C%20BC%20V9K%2C%20Canada!5e0!3m2!1sen!2sbd!4v1763447616685!5m2!1sen!2sbd"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full lg:w-[420px] h-[200px] lg:h-[300px] rounded-xl"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Section 1: Quaint Streets and Local Culture */}
          <div className="grid lg:grid-cols-5 grid-cols-1 gap-[30px]">
            <div className="flex xl:ml-28 flex-col col-span-2 items-center">
              <div className="w-full h-[200px] lg:h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/image/blog/image4.jpg"
                  alt="Local artisan shop in Qualicum Beach"
                  width={420}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="col-span-3">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 font-cormorant">
                Exploring Quaint Streets
              </h3>
              <p className="text-body-text leading-relaxed text-sm mb-6">
                Qualicum Beach is a charming blend of small-town warmth and rich
                history. I strolled through local markets, savored delicious
                Canadian treats, and explored artisan shops brimming with
                handmade souvenirs. Every corner had a story, and the locals
                were eager to share their favorite spots.
              </p>
            </div>
          </div>

          {/* Section 2: Nature and Scenic Beauty */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] xl:ml-28 ml-0">
            <div className="flex flex-col justify-end col-span-2">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 font-cormorant">
                Beaches, Parks, and Trails
              </h3>
              <p className="text-body-text leading-relaxed text-sm mb-6 lg:w-3/4">
                The highlight of my trip was the breathtaking nature. I spent
                hours walking along pristine beaches, watching the sunset paint
                the sky, and exploring lush trails. The peaceful parks and
                tranquil surroundings provided a perfect escape from the hustle
                of city life. Every step felt like a new postcard moment.
              </p>
            </div>
            <div className="flex justify-end col-span-1"></div>
          </div>

          {/* Section 3: Why Visit Qualicum Beach */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            <div className="xl:ml-28 ml-0 col-span-2 w-full">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 font-cormorant">
                A Destination for Everyone
              </h3>
              <p className="text-body-text leading-relaxed text-sm mb-6 lg:w-3/4">
                Qualicum Beach is more than just a picturesque destination—it’s
                an experience. Whether you&apos;re traveling solo, on a romantic
                getaway, or with family, this coastal town offers something for
                everyone. From serene beach walks and outdoor adventures to
                vibrant markets and artisan shops, every moment here feels
                special.
              </p>
            </div>
            <div className="flex justify-end col-span-1 items-end flex-col gap-[30px]">
              <div className="w-full h-[200px] lg:h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/image/blog/image5.jpg"
                  alt="Sunset at Qualicum Beach"
                  width={420}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 font-cormorant">
              Why Qualicum Beach Should Be on Your Itinerary
            </h2>
            <p className="text-body-text leading-relaxed text-sm mb-6">
              If you&apos;re planning your next trip, Qualicum Beach deserves a
              top spot. It’s the perfect place to relax, explore, and reconnect
              with nature. The blend of natural beauty, local culture, and
              welcoming atmosphere makes it an unforgettable destination.
            </p>
          </div>
        </div>
      </main>
    </Container>
  );
}
