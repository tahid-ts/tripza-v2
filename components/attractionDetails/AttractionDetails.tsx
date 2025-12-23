import React from "react";
import DualNotchCard from "../shared/card/DualNotchCard";
import Image from "next/image";
import Container from "../shared/container/Container";
import { AttractionPost } from "@/types/blog";
import ScrollAnimator from "../shared/animation/ScrollAnimator";

interface AttractionPostProps {
  data: AttractionPost;
}
const AttractionDetails = ({ data }: AttractionPostProps) => {
  return (
    <Container>
      <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
        <DualNotchCard
          width="100%"
          height="600px"
          responsiveConfig={{
            sm: {
              width: "100%",
              height: "300px",
              notchWidth: 0,
              notchHeight: 0,
              borderRadius: 8,
            },
            md: {
              width: "100%",
              height: "350px",
              notchWidth: 50,
              notchHeight: 30,
            },
          }}
          notchWidth={368}
          notchHeight={248}
          notchRadius={16}
          borderRadius={16}
          topLeftContent={
            <ScrollAnimator repeatOnScroll effect="slideInDown">
              <Image
                src="/image/blog/image4.jpg"
                alt="Mont Saint-Michel"
                width={358}
                height={238}
                className="lg:w-[358px] w-[300px] h-[200px] lg:h-[238px] rounded-xl hidden md:block"
                priority
              />
            </ScrollAnimator>
          }
          bottomRightContent={
            <ScrollAnimator repeatOnScroll effect="slideInUp">
              <Image
                src="/image/blog/image5.jpg"
                alt="Mont Saint-Michel"
                width={358}
                height={238}
                className="lg:w-[358px] w-[300px] h-[200px] lg:h-[238px]  rounded-xl hidden md:block"
                priority
              />
            </ScrollAnimator>
          }
        >
          <Image
            src="/image/blog/image2.jpg"
            alt="Mont Saint-Michel"
            fill
            sizes="100vw"
            className="object-cover object-center rounded-xl"
            style={{ objectPosition: "center 100%" }}
            priority
            quality={100}
          />
        </DualNotchCard>
      </ScrollAnimator>

      <main className=" px-4 md:px-6 lg:pt-12 pt-4">
        <div className=" space-y-10">
          {data.sections.map((section, index) => (
            <article
              className="flex flex-col lg:flex-row justify-between items-start relative gap-6 xl:mb-12 mb-4"
              key={index}
            >
              {/* Text content */}
              <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
                <div className="w-full lg:w-auto">
                  <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 font-cormorant">
                    {section.title}
                  </h2>
                  <p
                    className={`text-gray-700 leading-relaxed text-sm xl:mb-6 mb-2 ${
                      index !== 0 ? "lg:w-[65%]" : "lg:w-[80%]"
                    } w-full`}
                  >
                    {section.content}
                  </p>
                </div>
              </ScrollAnimator>

              {/* Image/Map content */}
              <div className="w-full lg:w-auto xl:mt-28 mt-0">
                <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
                  {section.image && (
                    <div className="w-full lg:w-[420px] h-[200px] lg:h-[300px] rounded-lg overflow-hidden">
                      <Image
                        src={section.image}
                        alt={section.title}
                        width={420}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                </ScrollAnimator>
                <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
                  {section.mapImage && (
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d741.3336845139861!2d-0.2363278137508343!3d51.60299289810882!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487616d5ec1abeaf%3A0xcdb65785f534bfbc!2sSS%20Racket%20Services!5e1!3m2!1sen!2sbd!4v1763447616685!5m2!1sen!2sbd"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      className="w-full lg:w-[420px] h-[200px] lg:h-[300px] rounded-xl lg:absolute lg:right-0 lg:mt-0 mt-4"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  )}
                </ScrollAnimator>
              </div>
            </article>
          ))}
        </div>
      </main>
    </Container>
  );
};

export default AttractionDetails;
