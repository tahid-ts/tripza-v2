import ScrollAnimator from "@/components/shared/animation/ScrollAnimator";
import { Card1 } from "@/components/shared/card/Card1";
import Container from "@/components/shared/container/Container";
import Title from "@/components/shared/title/Title";

import { attractionsData } from "@/data";
import React from "react";

const AttractionSection: React.FC = () => {
  const [firstAttraction, ...restAttractions] = attractionsData;

  return (
    <div className="bg-white relative">
      <Container>
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-5 ">
          <div className="flex flex-col h-full justify-between gap-0">
            {/* Title with slideInLeft effect */}
            <ScrollAnimator effect="slideInLeft" duration={1} easing="spring">
              <div>
                <Title
                  title={"Attractions"}
                  subtitle={"Discover the world's most iconic\n destinations.."}
                />
              </div>
            </ScrollAnimator>

            {/* First attraction card with slideInLeft effect */}
            <div className="lg:mb-20 mb-0">
              <ScrollAnimator
                effect="slideInLeft"
                duration={1.2}
                delay={0.3}
                easing="spring"
              >
                <Card1
                  variant="horizontal"
                  image={firstAttraction.image}
                  title={firstAttraction.title}
                  href={firstAttraction.href}
                  description={firstAttraction.description}
                />
              </ScrollAnimator>
            </div>
          </div>

          {/* Rest attractions grid with slideInRight effect */}
          <ScrollAnimator
            effect="slideInRight"
            duration={1.2}
            delay={0.2}
            easing="spring"
          >
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 h-full ">
              {restAttractions.map((attraction, index) => (
                <ScrollAnimator
                  key={attraction.id}
                  effect="slideInDown"
                  duration={1}
                  delay={index * 0.2}
                  easing="ease-in"
                >
                  <div
                    className={index === 0 ? "lg:mb-28 mb-0" : "lg:mt-28 mt-0"}
                  >
                    <Card1
                      variant="vertical"
                      image={attraction.image}
                      title={attraction.title}
                      href={attraction.href}
                      classNameV="h-full"
                      description={attraction.description}
                    />
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </ScrollAnimator>
        </div>
      </Container>
    </div>
  );
};

export default AttractionSection;
