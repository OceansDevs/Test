"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <section className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Link href="/">
            <Image
              src="/images/bg2.png"
              width={40}
              height={40}
              alt="Saint Join International School Logo"
              className="object-contain w-10 sm:w-12 lg:w-14"
              priority
            />
          </Link>
          <h1 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800">
            Wardiere Schools
          </h1>
        </div>

        <button
          className="lg:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded p-1 sm:p-2"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <nav className={`${isOpen ? "block" : "hidden"} lg:block`}>
          <ul
            className={`flex flex-col lg:flex-row lg:space-x-4 xl:space-x-6 items-center absolute lg:static top-full left-0 right-0 bg-white lg:bg-transparent p-4 sm:p-6 lg:p-0 shadow-md lg:shadow-none transition-all duration-300 ease-in-out ${
              isOpen ? "block" : "hidden lg:flex"
            }`}
          >
            <li>
              <Link
                href="/"
                className="block px-3 py-2 text-xs sm:text-sm lg:text-base text-gray-700 hover:text-amber-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-3 py-2 text-xs sm:text-sm lg:text-base text-gray-700 hover:text-amber-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
              >
                About
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/service"
                className="block px-3 py-2 text-xs sm:text-sm lg:text-base text-gray-700 hover:text-amber-600 transition-colors duration-200 flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
              >
                Services
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-180 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              <ul className="absolute left-0 top-full mt-2 w-40 sm:w-48 bg-white border border-gray-100 shadow-xl rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transform scale-95 group-hover:scale-100 transition-all duration-300 ease-out z-50">
                <li>
                  <Link
                    href="/service/web-development"
                    className="block px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-200 rounded-t-lg focus:outline-none focus:bg-amber-50"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/data-analytics"
                    className="block px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-200 focus:outline-none focus:bg-amber-50"
                  >
                    Data Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/consulting"
                    className="block px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-200 rounded-b-lg focus:outline-none focus:bg-amber-50"
                  >
                    Consulting
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/contact"
                className="block px-3 py-2 text-xs sm:text-sm lg:text-base text-gray-700 hover:text-amber-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
              >
                Place Order
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block px-3 py-2 text-xs sm:text-sm lg:text-base text-gray-700 hover:text-amber-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
