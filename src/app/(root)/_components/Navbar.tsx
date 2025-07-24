"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const logovariants: Variants = {
  hidden: { opacity: 0, rotate: 0 },
  visible: {
    opacity: 1,
    rotate: 360,
    transition: {
      opacity: { duration: 0.5 },
      rotate: {
        duration: 2,
        type: "spring",
        stiffness: 20,
        ease: "linear",
      },
    },
  },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export default function Navbar() {
  return (
    <section className="flex items-center justify-between px-6 py-4 shadow-md fixed top-0 left-0 right-0 bg-white z-50">
      <motion.div
        variants={logovariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Image src="/globe.svg" alt="Logo" width={100} height={100} priority />
      </motion.div>
      <nav>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/service" className="hover:text-blue-600">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
