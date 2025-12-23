"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import Title from "../shared/title/Title";
import { ArrowRight } from "lucide-react";
import Container from "../shared/container/Container";
import Link from "next/link";
import Decoration from "../shared/decoration/Decoration";

interface FormData {
  mail: string;
  password: string;
  rememberMe: boolean;
}

// Lazy-load form data from localStorage to avoid useEffect state updates
const getInitialFormData = (): FormData => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("loginData");
    if (saved) {
      return JSON.parse(saved);
    }
  }
  return { mail: "", password: "", rememberMe: false };
};

const LogIn: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(getInitialFormData);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    let updatedValue: string | boolean = value;
    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      updatedValue = e.target.checked;
    }

    setFormData({ ...formData, [name]: updatedValue });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);

    if (formData.rememberMe) {
      localStorage.setItem("loginData", JSON.stringify(formData));
    } else {
      localStorage.removeItem("loginData");
    }

    setFormData((prev) => ({ ...prev, password: "" }));
  };

  return (
    <Container>
      <div className="flex lg:border lg:border-primary/30 rounded-lg lg:p-5 p-0 flex-col lg:flex-row gap-6 relative overflow-hidden">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center relative ">
          <Image
            src="/image/Login/image.png"
            alt="Aerial view of turquoise ocean with boat"
            width={666}
            height={770}
            className="rounded-lg object-cover max-h-[500px] sm:max-h-[600px] lg:max-h-[700px] w-full"
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
        {/* Login Form */}
        <div className="w-full lg:w-1/2 flex justify-center items-center ">
          <div className="lg:w-md w-full bg-primary rounded-lg p-5 sm:p-8 lg:p-10 lg:h-[506px] h-full">
            <Title
              title="Welcome Back"
              lineColor="border-white"
              subtitle="Login to your account to get access."
              className="text-white lg:mb-8 mb-4"
              subTitleClassName=" lg:text-[16px]! text-stroke!"
            />

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="mail"
                  className="block text-sm sm:text-[13px] text-white mb-2 font-normal"
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
                  className="w-full px-3 py-2 sm:py-2.5 bg-white border rounded-lg border-[#404040] text-black placeholder-neutral-600 focus:outline-none focus:border-[#606060] transition"
                  placeholder="your@email.com"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm sm:text-[13px] text-white mb-2 font-normal"
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
                  className="w-full px-3 py-2 sm:py-2.5 bg-white border rounded-lg border-[#404040] text-black placeholder-neutral-600 focus:outline-none focus:border-[#606060] transition"
                  placeholder="Your password"
                />
              </div>

              {/* Remember me & Forgot password */}
              <div className="flex flex-row justify-between items-center text-white text-sm gap-2 sm:gap-0">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 accent-black rounded cursor-pointer"
                  />
                  Remember me
                </label>
                <a
                  href="#"
                  className="text-white underline hover:text-gray-200"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <div className="flex flex-row justify-between items-center ">
                <span className="text-gray-200 text-sm sm:text-base">
                  Don’t have an account?{" "}
                  <Link
                    href={"/signup"}
                    className="underline hover:text-white cursor-pointer"
                  >
                    Sign Up
                  </Link>
                </span>
                <div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto py-3 px-6 bg-white text-black text-[15px] sm:text-base font-medium rounded-md hover:bg-gray-100 transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Login <ArrowRight />
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

export default LogIn;
