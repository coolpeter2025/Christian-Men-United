"use client";

import Image from "next/image";
import Link from "next/link";
import HorizontalScroll from "@/components/HorizontalScroll";

// Sample upcoming events data
const upcomingEvents = [
  {
    id: 1,
    title: "Men's Bible Study",
    date: "April 15, 2025",
    time: "7:00 PM - 8:30 PM",
    location: "First Baptist Church",
    address: "123 Main Street, Tampa, FL",
    description:
      "Join us for an in-depth study of the Book of Romans. This week we'll be focusing on chapters 5-6 and discussing how to apply these teachings to our daily lives.",
    image: "/images-cmu/bible-study.jpg",
  },
  {
    id: 2,
    title: "Men's Breakfast Fellowship",
    date: "April 20, 2025",
    time: "8:30 AM - 10:00 AM",
    location: "Community Christian Center",
    address: "456 Oak Avenue, St. Petersburg, FL",
    description:
      "Enjoy breakfast with fellow Christian men while hearing an encouraging message from Pastor Michael Johnson about biblical leadership in the home and workplace.",
    image: "/images-cmu/mens-breakfast.jpg",
  },
  {
    id: 3,
    title: "Leadership Workshop",
    date: "May 5, 2025",
    time: "9:00 AM - 1:00 PM",
    location: "Grace Community Church",
    address: "789 Pine Road, Clearwater, FL",
    description:
      "This workshop is designed to equip men with biblical principles for leadership. Topics include servant leadership, integrity, and building unity in diverse groups.",
    image: "/images-cmu/leadership-workshop.jpg",
  },
  {
    id: 4,
    title: "Annual Men's Retreat",
    date: "May 15-17, 2025",
    time: "Begins Friday at 6:00 PM",
    location: "Lakeside Retreat Center",
    address: "1010 Lakeside Drive, Wesley Chapel, FL",
    description:
      "Our annual weekend retreat features worship, teaching sessions, small group discussions, and recreational activities. This year's theme is 'Standing Firm in Faith.'",
    image: "/images-cmu/mens-retreat.jpg",
  },
];

// Past events sample data
const pastEvents = [
  {
    id: 101,
    title: "Men's Prayer Breakfast",
    date: "March 8, 2025",
    image: "/images-cmu/prayer-breakfast.jpg",
  },
  {
    id: 102,
    title: "Father-Son Fishing Tournament",
    date: "February 22, 2025",
    image: "/images-cmu/fishing-tournament.jpg",
  },
  {
    id: 103,
    title: "Winter Bible Study Series",
    date: "January 10-31, 2025",
    image: "/images-cmu/winter-bible-study.jpg",
  },
  {
    id: 104,
    title: "Community Service Day",
    date: "December 12, 2024",
    image: "/images-cmu/bible-study.jpg",
  },
  {
    id: 105,
    title: "Christmas Fellowship Dinner",
    date: "December 20, 2024",
    image: "/images-cmu/mens-breakfast.jpg",
  },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero Section - Full-width image with overlay */}
      <section className="relative hero-section bg-primary flex items-center">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/2015-WelcomePic.jpg" 
            alt="CMU Events"
            fill
            priority
            style={{ objectFit: "cover", opacity: 0.4 }}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90"></div>
        </div>
        
        {/* Content overlay */}
        <div className="container-custom relative z-10 text-center py-20 md:py-28">
          <h1 className="heading-xl text-white mb-6">Events & Gatherings</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join us for fellowship, Bible study, and community events designed to strengthen
            your faith and build meaningful connections with other Christian men.
          </p>
        </div>
      </section>

      {/* Featured Announcement - Gold Banner */}
      <section className="bg-accent py-8 md:py-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-dark uppercase tracking-wide">
                NEXT BIBLE STUDY: APRIL 15
              </h2>
            </div>
            <Link href="#upcoming-events" className="btn bg-primary text-white hover:bg-primary-light uppercase tracking-wider font-bold px-8 py-3">
              VIEW DETAILS
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Events - Horizontal Scrolling */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-3">Featured Events</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Join our upcoming events designed to help men grow spiritually and connect with others on the same journey.
            </p>
          </div>
          
          <HorizontalScroll>
            {upcomingEvents.map((event) => (
              <div 
                key={event.id} 
                className="snap-start flex-none w-[320px] card-accent h-[480px] flex flex-col transition-all hover:-translate-y-2 duration-300"
              >
                <div className="bg-accent/10 h-48 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-accent font-bold text-4xl mb-2">{event.date.split(',')[0].split(' ')[1]}</div>
                    <div className="text-primary font-bold uppercase">{event.date.split(',')[0].split(' ')[0]}</div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-primary">{event.title}</h3>
                  <div className="mb-4 flex space-y-2 flex-col">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-action mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-charcoal">{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-action mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-charcoal">{event.location}</span>
                    </div>
                  </div>
                  <p className="mb-6 line-clamp-3 text-charcoal">{event.description}</p>
                  <div className="mt-auto">
                    <Link 
                      href="#" 
                      className="inline-flex items-center justify-center w-full bg-action text-white px-6 py-3 rounded-md font-bold uppercase tracking-wider hover:bg-action-dark transition-colors"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </HorizontalScroll>
        </div>
      </section>

      {/* Upcoming Events - List with Dark Background */}
      <section id="upcoming-events" className="section-navy-gray py-16 md:py-24">
        <div className="container-custom">
          <h2 className="heading-lg text-white mb-3">Upcoming Events</h2>
          <div className="h-1 w-16 bg-accent mb-12"></div>

          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-primary/30 rounded-lg overflow-hidden shadow-lg transform transition-all hover:-translate-y-1">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                  <div className="md:col-span-1 bg-accent text-primary-dark p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-1">{event.date.split(',')[0].split(' ')[1]}</div>
                      <div className="uppercase font-bold tracking-wider">{event.date.split(',')[0].split(' ')[0]}</div>
                      <div className="mt-2 text-sm font-medium">{event.date.split(',')[1]}</div>
                    </div>
                  </div>
                  <div className="p-8 md:col-span-3 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 text-white">{event.title}</h3>
                    <div className="mb-4 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-8">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-white/80">{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-white/80">{event.location} - {event.address}</span>
                      </div>
                    </div>
                    <p className="mb-6 text-white/70">{event.description}</p>
                    <div className="mt-auto">
                      <Link 
                        href="#" 
                        className="inline-flex items-center bg-action text-white px-6 py-3 rounded-md uppercase tracking-wider font-bold hover:bg-action-dark transition-colors"
                      >
                        Register for Event
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events - Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-3">Past Events</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto mb-12">
              Take a look back at our previous gatherings and the impact they've made in our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div 
                key={event.id} 
                className="card transition-all hover:-translate-y-2 duration-300 flex flex-col"
              >
                <div className="h-48 bg-navy-gray/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-action font-bold text-xl">{event.date}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">{event.title}</h3>
                  <Link 
                    href="#" 
                    className="inline-flex items-center text-action font-bold hover:text-action-dark transition-colors"
                  >
                    View Event Photos
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-accent py-12 md:py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-6 md:space-y-0">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-dark uppercase">Want to Host an Event?</h2>
              <p className="text-primary-dark/80 mt-2">We'd love to partner with your church or organization.</p>
            </div>
            <Link href="/contact" className="btn-primary uppercase font-bold tracking-wider px-8 py-4">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
