import Image from "next/image";
import Decoration from "../shared/decoration/Decoration";
import ScrollAnimator from "../shared/animation/ScrollAnimator";
import Title from "../shared/title/Title";

const BannerSection1 = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/image/travelEasy/banner.png"
        alt="BannerSection image"
        fill
        className="object-cover"
        priority
      />

      <div className="hidden xl:block mt-[450px]">
        <Decoration
          src="/image/travelEasy/Line.png"
          preset="center"
          opacity="full"
          className="ml-52"
        />
        <ScrollAnimator
          className="relative"
          repeatOnScroll
          effect="staggerSlideUp"
        >
          <Decoration
            preset="center"
            opacity="full"
            className="2xl:mt-56 2xl:ml-28 xl:mt-[195px] xl:ml-[150px] z-20 w-[365px]"
            responsive="always-visible"
          >
            <div className="text-white ">
              <h1 className="bg-white rounded-full p-2 text-primary w-12 h-12 text-2xl text-center inline-block">
                01
              </h1>
              <div className="border-l border-white/70 h-[150px] ml-6 "></div>
              <div className=" max-w-xs">
                <h2 className="text-[28px] font-bold font-cormorant whitespace-nowrap">
                  Discover Your Experience
                </h2>
                <p className="text-sm leading-relaxed">
                  Explore curated destinations, tours, and events that match
                  your interests.
                </p>
              </div>
            </div>
          </Decoration>
        </ScrollAnimator>
        <ScrollAnimator
          className="relative"
          repeatOnScroll
          effect="staggerSlideUp"
        >
          <Decoration
            preset="center"
            opacity="full"
            className="2xl:mt-28 2xl:ml-[310px] xl:mt-[100px] xl:ml-80 z-20 w-[365px]"
            responsive="always-visible"
          >
            <div className="text-white">
              <h1 className="bg-white rounded-full p-2 text-primary w-12 h-12 text-2xl text-center inline-block">
                02
              </h1>
              <div className="border-l border-white/70 h-[100px] ml-6 "></div>
              <div className="max-w-xs">
                <h2 className="text-[28px] font-bold font-cormorant">
                  Plan Your Journey
                </h2>
                <p className="text-sm leading-relaxed">
                  Choose dates, personalize your itinerary, and confirm your
                  booking seamlessly.
                </p>
              </div>
            </div>
          </Decoration>
        </ScrollAnimator>
        <ScrollAnimator
          className="relative"
          repeatOnScroll
          effect="staggerSlideUp"
        >
          <Decoration
            preset="center"
            opacity="full"
            className="2xl:mt-8 xl:mt-0 ml-[500px] z-20 w-[365px] "
            responsive="always-visible"
          >
            <div className="text-white">
              <h1 className="bg-white rounded-full p-2 text-primary w-12 h-12 text-2xl text-center inline-block">
                03
              </h1>
              <div className="border-l border-white/70 h-[50px] ml-6 "></div>
              <div className=" max-w-xs">
                <h2 className="text-[28px] font-bold font-cormorant">
                  Experience and Share
                </h2>
                <p className="text-sm leading-relaxed">
                  Attend, travel, or tour with ease and create memories worth
                  sharing.
                </p>
              </div>
            </div>
          </Decoration>
        </ScrollAnimator>
      </div>
      <Decoration
        preset={"topLeft"}
        opacity="full"
        className="xl:mt-40 mt-20 ml-40 hidden md:block lg:hidden"
      >
        <Title
          title={"How\n We Make Travel Easy"}
          subtitle={
            "From choosing your destination to arriving at\n your dream spot, we guide you all the way."
          }
          subTitleClassName="text-primary"
        />
      </Decoration>
      <Decoration
        responsive="hidden-on-mobile"
        preset={"topLeft"}
        opacity="full"
        className="xl:mt-40 mt-20 ml-80 md:hidden lg:block"
      >
        <Title
          title={"How\n We Make Travel Easy"}
          subtitle={
            "From choosing your destination to arriving at\n your dream spot, we guide you all the way."
          }
          subTitleClassName="text-primary"
        />
      </Decoration>
      <div className="absolute hidden md:block lg:hidden mt-24 left-1/3 w-xl top-1/3">
        <ScrollAnimator
          className="relative"
          repeatOnScroll
          effect="staggerSlideUp"
        >
          <Image
            src="/image/banner1/Group 1618873330.png"
            alt="banner"
            width={800}
            height={500}
            priority
            className="object-contain pointer-events-none"
          />
        </ScrollAnimator>
      </div>
      <div className="md:hidden relative z-20 h-full flex flex-col justify-center px-6 sm:px-10">
        <Title
          title={"How\n We Make Travel Easy"}
          className="py-4"
          subtitle={
            "From choosing your destination to arriving at\n your dream spot, we guide you all the way."
          }
        />
        <div className="max-w-2xl space-y-12 md:space-y-2.5">
          {[
            {
              num: "01",
              title: "Discover Your Experience",
              desc: "Explore curated destinations, tours, and events that match your interests.",
            },
            {
              num: "02",
              title: "Plan Your Journey",
              desc: "Choose dates, personalize your itinerary, and confirm your booking seamlessly.",
            },
            {
              num: "03",
              title: "Experience and Share",
              desc: "Attend, travel, or tour with ease and create memories worth sharing.",
            },
          ].map((step, i) => (
            <ScrollAnimator key={i} repeatOnScroll effect="staggerSlideUp">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="bg-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shadow-xl shrink-0">
                    <span className="text-primary text-2xl sm:text-3xl font-bold">
                      {step.num}
                    </span>
                  </div>
                  {i < 2 && (
                    <div className="w-0.5 bg-white/50 h-20 sm:h-28 mt-4" />
                  )}
                </div>
                <div
                  className={`${
                    step.num === "01" ? "text-primary pb-8" : "text-white pb-8"
                  }`}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold ">
                    {step.title}
                  </h3>
                  <p className="text-xs  leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>

      {/* Gradient Overlays (Always Visible) */}
      <Decoration preset={"fullTop"} opacity="full" responsive="always-visible">
        <div className="inset-0 bg-linear-to-b from-white via-white/50 to-transparent h-40 w-full"></div>
      </Decoration>
      <Decoration
        preset={"fullBottom"}
        opacity="full"
        responsive="always-visible"
      >
        <div className="inset-0 bg-linear-to-t from-[rgba(255,255,255,1)] via-[rgba(255,255,255,0.4)] to-[#2034357c] h-40 w-full "></div>
      </Decoration>
      <Decoration src="/image/vector/vector4.png" preset={"topLeft"} />
      <Decoration src="/image/vector/vector5.png" preset={"topCenter"} />
      <Decoration src="/image/vector/vector1.png" preset={"topRight"} />
    </div>
  );
};

export default BannerSection1;
