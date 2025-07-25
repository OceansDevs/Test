"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <section className="flex items-center justify-between px-6 py-4 shadow-md fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-semibold">Star Bar</h1>
      </div>

      <nav>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link href="/" className=" text-gray-700 hover:text-amber-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className=" text-gray-700 hover:text-amber-600">
              About
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="/service"
              className="relative text-gray-700 hover:text-amber-600 transition-colors duration-200 flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-2 py-1"
            >
              Services
              <svg
                className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200"
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
            <ul className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transform scale-95 group-hover:scale-100 transition-all duration-300 ease-out z-50">
              <li>
                <Link
                  href="/service/web-development"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-200 rounded-t-lg focus:outline-none focus:bg-amber-50"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/service/data-analytics"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-200 focus:outline-none focus:bg-amber-50"
                >
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/service/consulting"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-200 rounded-b-lg focus:outline-none focus:bg-amber-50"
                >
                  Consulting
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-amber-600 transition-colors duration-200 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
            >
              Place Order
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className=" text-gray-700 hover:text-amber-600"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
