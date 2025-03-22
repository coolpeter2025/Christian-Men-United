"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary py-2 shadow-md" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="mr-3 text-3xl font-bold tracking-wider text-white">
              <span className="text-white">C</span>
              <span className="text-white">M</span>
              <span className="text-accent">U</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-bold uppercase tracking-widest text-white">CHRISTIAN MEN</span>
              <span className="text-sm font-bold uppercase tracking-widest text-white">UNITED</span>
              <span className="text-xs uppercase tracking-wider text-white/80">MEN OF INTEGRITY</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <nav className="mr-4">
              <div className="flex space-x-1">
                <Link 
                  href="/" 
                  className="px-3 py-2 text-white hover:text-accent text-sm uppercase tracking-wider font-semibold"
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="px-3 py-2 text-white hover:text-accent text-sm uppercase tracking-wider font-semibold"
                >
                  About
                </Link>
                <Link 
                  href="/events" 
                  className="px-3 py-2 text-white hover:text-accent text-sm uppercase tracking-wider font-semibold"
                >
                  Events
                </Link>
                <Link 
                  href="/partners" 
                  className="px-3 py-2 text-white hover:text-accent text-sm uppercase tracking-wider font-semibold"
                >
                  Partners
                </Link>
                <Link 
                  href="/prayer" 
                  className="px-3 py-2 text-white hover:text-accent text-sm uppercase tracking-wider font-semibold"
                >
                  Prayer
                </Link>
                <Link 
                  href="/contact" 
                  className="px-3 py-2 text-white hover:text-accent text-sm uppercase tracking-wider font-semibold"
                >
                  Contact
                </Link>
              </div>
            </nav>
            <Link href="/donate" className="btn-donate uppercase tracking-wider font-bold px-5 py-2 text-sm">
              GIVE
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center space-x-3 lg:hidden">
            <Link href="/donate" className="btn-donate uppercase tracking-wider font-bold px-4 py-2 text-xs">
              GIVE
            </Link>
            <button
              className="text-white focus:outline-none"
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
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-primary shadow-xl rounded-lg overflow-hidden">
            <nav className="flex flex-col">
              <Link
                href="/"
                className="px-4 py-3 text-white hover:text-accent border-b border-white/10 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 text-white hover:text-accent border-b border-white/10 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <Link
                href="/events"
                className="px-4 py-3 text-white hover:text-accent border-b border-white/10 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                EVENTS
              </Link>
              <Link
                href="/partners"
                className="px-4 py-3 text-white hover:text-accent border-b border-white/10 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                PARTNERS
              </Link>
              <Link
                href="/prayer"
                className="px-4 py-3 text-white hover:text-accent border-b border-white/10 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                PRAYER
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 text-white hover:text-accent font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
