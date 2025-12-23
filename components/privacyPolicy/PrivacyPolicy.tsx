"use client";
import React from "react";
import Container from "../shared/container/Container";
import { PolicySection } from "@/types/policy";
import ScrollAnimator from "../shared/animation/ScrollAnimator";

interface PrivacyPolicyProps {
  policyData: PolicySection[];
}

export function PrivacyPolicy({ policyData }: PrivacyPolicyProps) {
  return (
    <Container>
      {/* Header */}
      <div className="flex lg:pt-0 pt-12">
        <div className="lg:w-1/4"></div>
      </div>

      {/* Page Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-1/4 lg:block hidden">
          <div className="sticky top-24 h-fit p-5 rounded-xl bg-white">
            <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
              <h1 className="font-bold mb-4 font-cormorant text-2xl">
                Contents
              </h1>
              <ul className="space-y-2 text-md font-inter">
                {policyData.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block py-1 text-black rounded hover:bg-blue-50 hover:underline transition"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </ScrollAnimator>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:w-3/4 w-full space-y-12 mx-5 lg:mx-0">
          <ScrollAnimator repeatOnScroll effect="staggerSlideUp">
            {policyData.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="text-xl lg:text-2xl font-bold font-cormorant text-gray-800 mb-4">
                  {section.title}
                </h2>
                {section.content.map((para, i) => (
                  <p key={i} className="text-gray-700 leading-7 mb-4">
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </ScrollAnimator>
        </main>
      </div>
    </Container>
  );
}
