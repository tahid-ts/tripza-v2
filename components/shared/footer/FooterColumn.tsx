"use client";
import React from "react";
import Link from "next/link";

interface FooterColumnProps {
  title: string;
  links: { href: string; label: string; icon?: React.ReactNode }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div>
    <h3 className="text-base font-semibold text-white pb-2">{title}</h3>
    <div>
      <ul className="space-y-2.5 mt-2">
        {links.map((link) => (
          <li
            key={`${link.href}-${link.label}`}
            className="flex items-center group"
          >
            <span
              className="
    border-b mb-0.5 mr-0.5 w-4 border-white
    opacity-0 invisible max-h-0 hidden group-hover:inline-block
    group-hover:opacity-100 group-hover:visible group-hover:max-h-4
    transition-all duration-300 ease-in-out
    overflow-hidden
  "
            ></span>
            {link.icon && <span className="mr-2">{link.icon}</span>}
            <Link
              href={link.href ?? "#"}
              className="text-sm text-white hover:text-gray-500 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default FooterColumn;
