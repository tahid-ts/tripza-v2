"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import Title from "../shared/title/Title";
import Container from "../shared/container/Container";
import ScrollAnimator from "../shared/animation/ScrollAnimator";
import Decoration from "../shared/decoration/Decoration";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="w-full bg-white">
      <Container>
        <div className="relative mb-16">
          <div className="mb-12 text-center md:text-left"></div>
          <Title title={"Please contact us if you\n have any questions"} />
          <div className="relative">
            <div className="relative h-[500px] sm:h-[600px] lg:h-[710px]">
              <Image
                src="/image/contact/image.png"
                alt="Aerial view of turquoise ocean with boat"
                fill
                className="object-cover rounded-lg"
                priority
                sizes="(max-width: 1024px) 100vw, 1400px"
              />
            </div>

            {/* Form Overlay – Exact same position & size from LG → 2XL+ */}
            <div className="absolute -top-[85px] right-[100px] hidden lg:block w-[645px] bg-primary rounded-lg p-10 shadow-2xl">
              <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
                <Title
                  title="Book a tour"
                  lineColor="text-white"
                  className="text-white text-2xl mb-8"
                />

                <form onSubmit={handleSubmit} className="space-y-6">
                  {["name", "email"].map((field) => (
                    <div key={field}>
                      <label
                        htmlFor={field}
                        className="block text-[13px] text-white mb-2 font-normal capitalize"
                      >
                        {field}
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        id={field}
                        name={field}
                        required
                        value={formData[field as keyof FormData]}
                        onChange={handleChange}
                        className="w-full px-2 py-2  border rounded-lg bg-primary border-[#404040] text-white placeholder-neutral-600 focus:outline-none focus:border-[#606060] transition lg:h-14"
                        placeholder={
                          field === "name" ? "Your name" : "your@email.com"
                        }
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[13px] text-white mb-2 font-normal"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-2 py-2 bg-primary border border-[#404040] rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:border-[#606060] transition resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-8 py-3 bg-white text-black text-[15px] font-medium rounded-md hover:bg-gray-100 transition cursor-pointer lg:h-14"
                  >
                    Submit
                  </button>
                </form>
              </ScrollAnimator>
            </div>

            {/* Mobile & Tablet Form – Centered */}
            <div className="lg:hidden mt-8 max-w-2xl mx-auto">
              <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
                <div className="bg-primary rounded-lg p-8 shadow-2xl">
                  <Title
                    title="Book a tour"
                    className="text-white text-2xl mb-6"
                  />
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border border-[#404040] rounded-lg text-white placeholder-neutral-500 focus:border-[#606060] focus:outline-none"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border border-[#404040] rounded-lg text-white placeholder-neutral-500 focus:border-[#606060] focus:outline-none"
                    />
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border border-[#404040] rounded-lg text-white placeholder-neutral-500 focus:border-[#606060] focus:outline-none resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </ScrollAnimator>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-visible">
          <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
            <div className="bg-primary rounded-xl p-8 hover:bg-[#222222] transition cursor-pointer h-[280px] relative">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="lg:text-[28px] text-xl font-bold text-white mb-3 font-cormorant">
                Email Us
              </h4>
              <Link
                href="mailto:tritop@mail.com"
                className="text-lg text-gray-300 hover:text-white transition break-all"
              >
                tritop@mail.com
              </Link>
              <Decoration
                src="/image/contact/Vector1.png"
                preset={"bottomRight"}
              />
            </div>
          </ScrollAnimator>
          <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
            <div className="bg-primary rounded-xl p-8 hover:bg-[#222222] transition cursor-pointer h-[280px] mt-5">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 relative">
                <svg
                  className="w-7 h-7 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h4 className="lg:text-[28px] text-xl font-bold text-white mb-3 font-cormorant">
                Call Us
              </h4>
              <Link
                href="tel:+8715445898"
                className="text-lg text-gray-300 hover:text-white transition"
              >
                +871-5445 8998
              </Link>
              <Decoration
                src="/image/contact/Vector2.png"
                preset={"bottomRight"}
              />
            </div>
          </ScrollAnimator>
          <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
            <div className="bg-primary rounded-xl p-8 hover:bg-[#222222] transition cursor-pointer h-[280px] relative">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h4 className="lg:text-[28px] text-xl font-light text-white mb-3 font-cormorant">
                Our Location
              </h4>
              <p className="text-lg text-gray-300">New York, USA</p>
              <Decoration
                src="/image/contact/Vector1.png"
                preset={"bottomRight"}
              />
            </div>
          </ScrollAnimator>
          <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
            <div className="rounded-xl overflow-hidden cursor-pointer h-[280px] mt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d741.3336845139861!2d-0.2363278137508343!3d51.60299289810882!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487616d5ec1abeaf%3A0xcdb65785f534bfbc!2sSS%20Racket%20Services!5e1!3m2!1sen!2sbd!4v1763447616685!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our location"
                className="rounded-xl"
              />
            </div>
          </ScrollAnimator>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
