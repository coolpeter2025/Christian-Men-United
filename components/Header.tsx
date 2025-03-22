"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute w-full top-0 z-50 bg-gradient-to-b from-black/50 to-transparent py-4">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="mr-4 text-3xl font-bold tracking-wider text-white">
              <span className="text-white">C</span>
              <span className="text-white">M</span>
              <span className="text-accent">U</span>
            </div>
            <div className="hidden md:block">
              <span className="text-xl font-medium tracking-wider text-white">CHRISTIAN MEN UNITED</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <div className="flex space-x-8">
              <Link 
                href="/" 
                className="text-white hover:text-accent transition-colors text-sm uppercase tracking-wider"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-accent transition-colors text-sm uppercase tracking-wider"
              >
                About Us
              </Link>
              <Link 
                href="/events" 
                className="text-white hover:text-accent transition-colors text-sm uppercase tracking-wider"
              >
                Events
              </Link>
              <Link 
                href="/partners" 
                className="text-white hover:text-accent transition-colors text-sm uppercase tracking-wider"
              >
                Partners
              </Link>
              <Link 
                href="/prayer" 
                className="text-white hover:text-accent transition-colors text-sm uppercase tracking-wider"
              >
                Prayer
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-accent transition-colors text-sm uppercase tracking-wider"
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden">
            <nav className="flex flex-col">
              <Link
                href="/"
                className="px-4 py-3 text-white hover:text-accent border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 text-white hover:text-accent border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/events"
                className="px-4 py-3 text-white hover:text-accent border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/partners"
                className="px-4 py-3 text-white hover:text-accent border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Partners
              </Link>
              <Link
                href="/prayer"
                className="px-4 py-3 text-white hover:text-accent border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Prayer
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 text-white hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
