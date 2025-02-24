"use client";

import { useState } from "react";
import Link from "next/link";
import { GraduationCap, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex  items-start space-y-0 leading-tight">
          <GraduationCap className="h-12 w-12 text-primary" />
          <div className="flex flex-col ml-2">
            <span className="text-2xl font-bold text-primary">
              Nirvaan Elite
            </span>
            <span className="text-md  text-gray-800">
              Research Solutions
            </span>
          </div>
        </Link>

        <button
          className="block md:hidden text-gray-600 hover:text-primary focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:block absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-40`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4">
            <li>
              <Link
                href="#services"
                className="block px-4 py-2 text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="block px-4 py-2 text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block px-4 py-2 text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
