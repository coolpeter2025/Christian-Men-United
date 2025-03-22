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
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-gray-900">
          <Image
            src="/images/2015-WelcomePic.jpg" 
            alt="CMU Events"
            fill
            priority
            style={{ objectFit: "cover", opacity: 0.7 }}
            sizes="100vw"
          />
        </div>
        
        {/* Content overlay */}
        <div className="relative z-10 container mx-auto max-w-screen-xl px-6 lg:px-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6">
              Events & Gatherings
            </h1>
            <div className="h-1 w-24 bg-accent mb-8"></div>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Join us for fellowship, Bible study, and community events designed to strengthen your faith and build
              meaningful connections with other Christian men.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Upcoming Events - Horizontal Scrolling */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-screen-xl px-6 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Events</h2>
          <div className="h-1 w-16 bg-accent mb-12"></div>
          
          <HorizontalScroll title="Upcoming Christian Men's Activities">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id} 
                className="snap-start flex-none w-[280px] md:w-[320px] bg-secondary-light rounded-lg shadow-md overflow-hidden h-[520px] flex flex-col transition-transform hover:translate-y-[-5px]"
              >
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-primary">{event.title}</h3>
                  <div className="mb-4 flex flex-col space-y-2">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-accent mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-charcoal">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-accent mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-charcoal">{event.time}</span>
                    </div>
                  </div>
                  <p className="mb-6 line-clamp-3 text-charcoal">{event.description}</p>
                  <div className="mt-auto">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors group"
                    >
                      Register
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </HorizontalScroll>
        </div>
      </section>

      {/* Upcoming Events - Detailed List */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto max-w-screen-xl px-6 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Upcoming Events</h2>
          <div className="h-1 w-16 bg-accent mb-12"></div>

          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-charcoal-light rounded-lg overflow-hidden shadow-lg transform transition-all hover:translate-y-[-5px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative h-64 md:h-auto bg-primary/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="p-8 md:col-span-2 flex flex-col">
                    <h3 className="text-2xl font-bold mb-4 text-white border-b border-white/10 pb-2">{event.title}</h3>
                    <div className="mb-4 flex flex-col space-y-3">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-accent mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-white/80">{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-accent mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-white/80">{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-accent mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-white/80">
                          {event.location} - {event.address}
                        </span>
                      </div>
                    </div>
                    <p className="mb-8 text-white/70 leading-relaxed">{event.description}</p>
                    <div className="mt-auto">
                      <Link 
                        href="/contact" 
                        className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-light transition-colors group"
                      >
                        Register for Event
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events - Horizontal Scrolling */}
      <section className="py-16 bg-sand">
        <div className="container mx-auto max-w-screen-xl px-6 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Past Events</h2>
          <div className="h-1 w-16 bg-accent mb-12"></div>
          
          <HorizontalScroll>
            {pastEvents.map((event) => (
              <div 
                key={event.id} 
                className="snap-start flex-none w-[280px] md:w-[320px] bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]"
              >
                <div className="relative h-48 bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">{event.title}</h3>
                  <div className="flex items-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-charcoal">{event.date}</span>
                  </div>
                  <Link href="#" className="inline-flex items-center text-accent font-medium hover:text-accent-dark transition-colors group">
                    View Event Photos
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </HorizontalScroll>
        </div>
      </section>

      {/* Host an Event CTA */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto max-w-screen-xl px-6 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Host a CMU Event?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            If you're interested in hosting a Christian Men United event at your church or organization, we'd love to
            partner with you.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-white text-accent px-8 py-4 rounded-lg font-medium hover:bg-secondary transition-colors group"
          >
            Contact Us to Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
