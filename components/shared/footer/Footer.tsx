"use client";
import FooterSocials from "./FooterSocials";
import FooterColumn from "./FooterColumn";
import FooterBrand from "./FooterBrand";
import FooterCopyright from "./FooterCopyright";
import FooterSubscribeBar from "./FooterSubscribeBar";
import { IoCall } from "react-icons/io5";
import { TbMailFilled } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import Decoration from "../decoration/Decoration";
import ScrollAnimator from "../animation/ScrollAnimator";

type FooterProps = {
  homeFooterUI?: boolean;
};
const Footer = ({ homeFooterUI }: FooterProps) => {
  const handleSubscribe = (email: string) => {
    console.log("Subscribed Email:", email);
  };

  return (
    <footer
      className={`max-w-full font-text relative ${
        homeFooterUI ? "bg-white" : "bg-background"
      }`}
    >
      {homeFooterUI && (
        <div className="relative w-full">
          <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full lg:max-w-2xl px-4 ">
            <FooterSubscribeBar
              className="w-full"
              onSubscribe={handleSubscribe}
            />
          </div>

          {/* For small and medium screens: static, full width */}
          <div className="block lg:hidden left-1/2 transform -translate-x-1/2  absolute -top-5">
            <FooterSubscribeBar
              className="w-full"
              onSubscribe={handleSubscribe}
            />
          </div>
        </div>
      )}

      <div className="flex flex-col justify-between  lg:mx-10 md:mx-4 mx-2 lg:mb-10 md:mb-4 mb-2 rounded-2xl  bg-primary">
        <div className="xl:max-w-[1320px] max-w-full mx-auto">
          <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
            {homeFooterUI && (
              <h1 className="lg:text-9xl text-6xl text-center font-bold text-white font-cormorant lg:h-[200px] h-auto md:mt-14 lg:mt-10 lg:py-8 pt-8 tracking-tighter ">
                TRITRIP
              </h1>
            )}
            {!homeFooterUI && (
              <div className="hidden md:flex md:justify-between md:items-center md:h-[200px] h-auto px-4">
                <h1 className="lg:text-9xl text-6xl md:mt-10 lg:mt-0 text-center font-bold text-white font-cormorant">
                  TRITRIP
                </h1>
                <div className="xl:w-md md:w-sm">
                  <FooterSubscribeBar onSubscribe={handleSubscribe} />
                </div>
              </div>
            )}
          </ScrollAnimator>
          <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
            <div className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 w-full gap-5 px-5 py-5">
              <FooterBrand />

              <FooterColumn
                title="Service"
                links={[
                  { href: "/event", label: "Event" },
                  { href: "/booking", label: "Booking" },
                  { href: "/tourpackage", label: "Tour Package" },
                  { href: "/consultation", label: "Consultation" },
                ]}
              />

              <FooterColumn
                title="Resources"
                links={[
                  { href: "/blog", label: "Blog" },
                  { href: "/attraction", label: "Attraction" },
                  { href: "/birds-food", label: "Bird's food" },
                  { href: "/contactus", label: "Contact Us" },
                  { href: "/privacy-policy", label: "Privacy Policy" },
                ]}
              />

              <FooterColumn
                title="Contact"
                links={[
                  {
                    href: "tel:+16461231234",
                    label: "+1 (646) 123-1234",
                    icon: <IoCall className="text-xl font-bold text-white" />,
                  },
                  {
                    href: "mailto:travera@gmail.com",
                    label: "travera@gmail.com",
                    icon: (
                      <TbMailFilled className="text-xl font-bold text-white" />
                    ),
                  },
                  {
                    href: "https://www.google.com/maps?q=Brooklyn,+New+York+City,+USA",
                    label: "Brooklyn, New York City, USA",
                    icon: (
                      <FaLocationDot className="text-xl font-bold text-white" />
                    ),
                  },
                ]}
              />
              <FooterSocials />
            </div>
          </ScrollAnimator>
          <FooterCopyright />
        </div>
      </div>
      <Decoration
        src="/image/vector/vector211.png"
        preset={"topLeft"}
        className="mt-10 -z-10 md:z-10"
      />
      <Decoration
        src="/image/vector/vector3.png"
        preset={"topRight"}
        responsive="hidden-on-mobile"
        className="mt-10 -z-10 md:z-10"
      />
    </footer>
  );
};

export default Footer;
