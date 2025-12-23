/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import Title from "../shared/title/Title";
import { ArrowRight } from "lucide-react";
import Container from "../shared/container/Container";
import Link from "next/link";
import Decoration from "../shared/decoration/Decoration";

interface FormData {
  name: string;
  mail: string;
  password: string;
  rememberMe: boolean;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mail: "",
    password: "",
    rememberMe: false,
  });

  useEffect(() => {
    const savedSignUp = localStorage.getItem("SignUpData");
    if (savedSignUp) {
      setFormData(JSON.parse(savedSignUp));
    }
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    let updatedValue: string | boolean = value;

    // Only check 'checked' if it's an input and type checkbox
    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      updatedValue = e.target.checked;
    }

    setFormData({ ...formData, [name]: updatedValue });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted", formData);

    if (formData.rememberMe) {
      localStorage.setItem("SignUpData", JSON.stringify(formData));
    } else {
      localStorage.removeItem("SignUpData");
    }

    // Optionally clear password field after SignUp
    setFormData((prev) => ({ ...prev, password: "" }));
  };

  return (
    <Container>
      <div className="flex lg:border lg:border-primary/30 rounded-lg lg:p-5 p-0 flex-col lg:flex-row gap-6 relative">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <Image
            src="/image/login/image.png"
            alt="Aerial view of turquoise ocean with boat"
            width={666}
            height={762}
            className="object-cover rounded-lg"
            priority
          />
          <Decoration preset={"topCenter"} opacity="full" className="mt-10">
            <Link href="/">
              <div className="flex gap-2 cursor-pointer items-center">
                <Image
                  src="/image/logo/logo.png"
                  width={50}
                  height={25}
                  alt="logo"
                  className="object-contain"
                />
                <h1 className="text-2xl md:text-4xl font-bold text-white">
                  Tripza
                </h1>
              </div>
            </Link>
          </Decoration>
        </div>
        <Decoration
          src="/image/vector/vector8.png"
          preset={"bottomCenter"}
          className="mt-20 "
        />
        <Decoration
          src="/image/vector/vector1.png"
          preset={"topRight"}
          className=" "
        />
        {/* SignUp Form */}
        <div className="w-full lg:w-1/2 flex justify-center items-center ">
          <div className="lg:w-md w-full bg-primary rounded-lg p-5 sm:p-8 lg:p-10 h-full lg:h-[606px]">
            <Title
              title="Sign Up"
              lineColor="text-white"
              subtitle="Create your account and start your journey."
              className="text-white lg:mb-8 mb-4"
              subTitleClassName=" lg:text-[16px]! text-stroke!"
            />

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[13px] text-white mb-2 font-normal"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-2 py-2 bg-white border rounded-lg border-[#404040] text-black placeholder-neutral-600 focus:outline-none focus:border-[#606060] transition"
                  placeholder="your@email.com"
                />
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor="mail"
                  className="block text-[13px] text-white mb-2 font-normal"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="mail"
                  name="mail"
                  required
                  value={formData.mail}
                  onChange={handleChange}
                  className="w-full px-2 py-2 bg-white border rounded-lg border-[#404040] text-black placeholder-neutral-600 focus:outline-none focus:border-[#606060] transition"
                  placeholder="your@email.com"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-[13px] text-white mb-2 font-normal"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-2 py-2 bg-white border rounded-lg border-[#404040] text-black placeholder-neutral-600 focus:outline-none focus:border-[#606060] transition"
                  placeholder="Password"
                />
              </div>

              {/* Remember me & Forgot password */}
              <div className="flex items-center text-white text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 accent-black rounded-lg cursor-pointer"
                  />
                  I Agree with terms and conditions.
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-between items-center">
                <span className="text-gray-200 text-sm sm:text-base">
                  Have an account?{" "}
                  <Link href={"/login"} className="underline hover:text-white">
                    Log in
                  </Link>
                </span>
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-white text-black text-[15px] font-medium rounded-md hover:bg-gray-100 transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    SignUp <ArrowRight />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
