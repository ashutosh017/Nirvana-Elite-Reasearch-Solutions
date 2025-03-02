"use client";

import { useState } from "react";
import Link from "next/link";
import { GraduationCap, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header2: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 drop-shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-start space-y-0 leading-tight">
          <GraduationCap className="h-12 w-12 text-primary" />
          <div className="flex flex-col ml-2">
            <span className="text-2xl font-bold text-primary">
              Nirvana Elite
            </span>
            <span className="text-md text-gray-800">Research Solutions</span>
          </div>
        </Link>

        <button
          className="block md:hidden text-gray-600 hover:text-primary focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {["Home","Services", "About", "FAQs", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase().split(" ").join("-")}`}
                  className="block px-4 py-2 text-gray-600 hover:text-primary relative group"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-40"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="flex flex-col space-y-2 py-4">
                {["Home","Services", "About", "FAQs", 'Contact'].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={`/${item.toLowerCase().split(" ").join("-")}`}
                      className="block px-4 py-2 text-gray-600 hover:text-primary relative group"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header2;