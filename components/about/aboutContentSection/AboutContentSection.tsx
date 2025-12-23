import Container from "@/components/shared/container/Container";
import React from "react";
import AboutVideoSection from "./aboutVideoSection/AboutVideoSection";
import Title from "@/components/shared/title/Title";
import Image from "next/image";
import Button from "@/components/shared/button/Button";
import ScrollAnimator from "@/components/shared/animation/ScrollAnimator";

const AboutContentSection = () => {
  return (
    <Container>
      <div className="grid xl:grid-cols-2 grid-cols-1">
        <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
          <AboutVideoSection videoId="Zcx247sfxPM" />
        </ScrollAnimator>
        <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
          <div className="py-20 lg:px-20 flex flex-col  items-start gap-8">
            <Title
              title="We are Tritrip.\nYour Travel Expert"
              subtitle="We create seamless, inspiring journeys with a true passion for\n exploration, delivering unforgettable memories that truly last."
            />
            <div className="flex flex-col  items-start gap-2 ">
              <div className="flex gap-2 lg:items-center items-start">
                <div className="bg-primary rounded-full p-2 flex items-center justify-center">
                  <Image
                    src="/image/about/VectorImage.png"
                    alt="Left decorative header image"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </div>
                <h1>Trusted Service</h1>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-primary rounded-full p-2 flex items-center justify-center">
                  <Image
                    src="/image/about/VectorImage1.png"
                    alt="Left decorative header image"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </div>
                <h1>Personalized Travel</h1>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-primary rounded-full p-2 flex items-center justify-center">
                  <Image
                    src="/image/about/VectorImage2.png"
                    alt="Left decorative header image"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </div>
                <h1>Global Destinations</h1>
              </div>
            </div>
            <div>
              <Button variant="primary-outline">Explore Now</Button>
            </div>
          </div>
        </ScrollAnimator>
      </div>
      <div>
        <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
          <h1 className="lg:text-3xl md:text-2xl text-xl font-cormorant p-10 text-center font-semibold">
            “We are dedicated to creating seamless and unforgettable journeys,
            always striving to explore new paths and innovative ways to deliver
            exceptional travel experiences.”
          </h1>
        </ScrollAnimator>
      </div>
    </Container>
  );
};

export default AboutContentSection;
