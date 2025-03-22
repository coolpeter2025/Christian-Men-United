"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section - Full-width image with overlay */}
      <section className="relative flex-grow flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-gray-900">
          <Image
            src="/images/2015-WelcomePic.jpg" 
            alt="Christian Men United"
            fill
            priority
            style={{ objectFit: "cover", opacity: 0.7 }}
            sizes="100vw"
          />
        </div>
        
        {/* Content overlay */}
        <div className="relative z-10 flex-grow flex flex-col justify-center px-6 lg:px-16 py-20">
          <div className="container mx-auto max-w-screen-xl">
            <div className="mt-16 mb-36"> {/* Extra margin to account for absolute header */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6">
                Building faithful<br/>communities of men.
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 font-light max-w-3xl mb-12">
                Cultivating and sustaining unity within our congregations through God's Word.
              </p>
              <p className="text-xl md:text-2xl text-white/80 font-light max-w-xl mb-20">
                The fellowship you need.
              </p>
            </div>
            
            {/* Navigation buttons at bottom */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-auto">
              <Link href="/about" className="bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-colors py-5 px-4 rounded-lg text-center">
                <span className="font-medium tracking-wide">About Us</span>
              </Link>
              <Link href="/events" className="bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-colors py-5 px-4 rounded-lg text-center">
                <span className="font-medium tracking-wide">Events</span>
              </Link>
              <Link href="/partners" className="bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-colors py-5 px-4 rounded-lg text-center hidden md:block">
                <span className="font-medium tracking-wide">Partners</span>
              </Link>
              <Link href="/contact" className="bg-accent hover:bg-accent-dark transition-colors py-5 px-4 rounded-lg text-center text-white">
                <span className="font-medium tracking-wide">Get Involved</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
