"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Full-width image with overlay */}
      <section className="hero-section bg-primary flex items-center text-center">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/2015-WelcomePic.jpg" 
            alt="Christian Men United"
            fill
            priority
            style={{ objectFit: "cover", opacity: 0.4 }}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary/90"></div>
        </div>
        
        {/* Hero Content */}
        <div className="container-custom relative z-10 pt-20 pb-10 md:py-24">
          <div className="flex flex-col items-center justify-center space-y-8">
            {/* Main Headline */}
            <div className="mb-8">
              <div className="text-center flex flex-col items-center">
                <h1 className="heading-xl">
                  <span className="block text-white uppercase tracking-tight">
                    CHRISTIAN <span className="text-accent">MEN</span> UNITED
                  </span>
                </h1>
                <div className="w-24 h-1 bg-accent mt-4 mb-6"></div>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Training Men to Lead with Integrity & Biblical Principles
                </p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12">
              <Link href="/about" className="btn-primary uppercase font-bold tracking-wider px-8 py-4 bg-accent text-primary-dark border-2 border-accent hover:bg-accent-light transition-all">
                OUR MISSION
              </Link>
              <Link href="/events" className="btn-outline-white uppercase font-bold tracking-wider px-8 py-4 hover:bg-white/10 transition-all">
                UPCOMING EVENTS
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Announcement - Gold Banner */}
      <section className="bg-accent py-8 md:py-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-dark uppercase tracking-wide">
                JOIN OUR WEEKLY BIBLE STUDY
              </h2>
            </div>
            <Link href="/events" className="btn bg-primary text-white hover:bg-primary-light uppercase tracking-wider font-bold px-8 py-3">
              JOIN NOW
            </Link>
          </div>
        </div>
      </section>
      
      {/* Three Feature Cards Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-3">How We Serve Men</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Our ministry focuses on equipping men to lead with biblical principles in their homes, workplaces, and communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Feature 1 */}
            <div className="card-accent p-8 text-center transition-all hover:-translate-y-2 duration-300">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Bible Studies</h3>
              <p className="mb-5">Weekly studies focused on building a strong foundation in God's Word and practical application.</p>
              <Link href="/events" className="text-action font-bold hover:text-action-dark flex items-center justify-center space-x-1">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            {/* Feature 2 */}
            <div className="card-action p-8 text-center transition-all hover:-translate-y-2 duration-300">
              <div className="bg-action/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-action" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Fellowship Events</h3>
              <p className="mb-5">Regular gatherings that provide opportunities for men to build relationships and support one another.</p>
              <Link href="/events" className="text-action font-bold hover:text-action-dark flex items-center justify-center space-x-1">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            {/* Feature 3 */}
            <div className="card-accent p-8 text-center transition-all hover:-translate-y-2 duration-300">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Prayer Support</h3>
              <p className="mb-5">A dedicated prayer team committed to praying for men and their families in times of need.</p>
              <Link href="/prayer" className="text-action font-bold hover:text-action-dark flex items-center justify-center space-x-1">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section with Blue Background */}
      <section className="section-navy-gray py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed italic mb-8">
              "Iron sharpens iron, and one man sharpens another."
            </blockquote>
            <p className="text-lg font-semibold text-accent">Proverbs 27:17</p>
          </div>
        </div>
      </section>
      
      {/* CTA Bottom Banner */}
      <section className="bg-accent py-12 md:py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-6 md:space-y-0">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-dark uppercase">Get Involved Today</h2>
              <p className="text-primary-dark/80 mt-2">Join us and become part of a community that builds men of integrity.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/events" className="btn-primary uppercase font-bold tracking-wider px-8 py-4 bg-action text-white border-2 border-action hover:bg-action-light transition-all">
                JOIN AN EVENT
              </Link>
              <Link href="/donate" className="btn-red uppercase font-bold tracking-wider px-8 py-4 bg-red text-white border-2 border-red hover:bg-red-light transition-all">
                GIVE NOW
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
