import React from "react";
import {
  FaDollarSign,
  FaStar,
  FaCheckCircle,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { promiseData } from "@/data";
import Title from "@/components/shared/title/Title";
import Decoration from "@/components/shared/decoration/Decoration";
import Container from "@/components/shared/container/Container";
import ScrollAnimator from "@/components/shared/animation/ScrollAnimator";

const iconMap: Record<string, IconType> = {
  FaDollarSign: FaDollarSign,
  FaStar: FaStar,
  FaCheckCircle: FaCheckCircle,
  FaMapMarkedAlt: FaMapMarkedAlt,
};

export default function PromiseSection() {
  return (
    <div className=" bg-white relative">
      <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
        <Container>
          {/* Header */}
          <div className="text-center mb-16">
            <Title
              align="center"
              title={"Our Promise to You"}
              subtitle={
                "Delivering unforgettable journeys with trust,\n comfort, and care."
              }
            />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {promiseData.map((card, index) => {
              const IconComponent = iconMap[card.iconName];

              const cardClass = index === 1 || index === 3 ? "mt-5" : "";
              return (
                <div
                  key={index}
                  className={`h-[380px] ${card.cardBg} flex flex-col justify-between  rounded-xl p-6 relative ${cardClass}`}
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-cormorant font-bold text-gray-900">
                        {card.title}
                      </h3>
                      <h4 className="text-2xl font-cormorant font-bold text-gray-900">
                        {card.subtitle}
                      </h4>
                    </div>
                    <div
                      className={`${card.iconBg} text-white rounded-full w-[72px] h-[72px] flex items-center justify-center border border-white`}
                    >
                      <IconComponent className="text-2xl" />
                    </div>
                  </div>
                  <Decoration src={card.image} preset={"topLeft"} />

                  <div
                    className={`bg-white ${card.borderColor} rounded-xl p-6 `}
                  >
                    <ul className="space-y-3">
                      {card.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-700"
                        >
                          <span className="mr-2 mt-1 text-lg">◆</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </ScrollAnimator>
      <Decoration src="/image/vector/vector1.png" preset={"topRight"} />
      <Decoration src="/image/vector/vector2.png" preset={"bottomLeft"} />
      <Decoration
        opacity="full"
        src="/image/footer/Newsletter.png"
        preset={"bottomCenter"}
      />
    </div>
  );
}
