"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Prayer request form component
const PrayerRequestForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, this would submit the form data to a server
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-green-500 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Prayer Request Received</h3>
        <p className="text-green-700">
          Thank you for submitting your prayer request. Our prayer team will be lifting your needs in prayer.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 btn btn-primary"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block mb-2 font-medium">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2 font-medium">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          placeholder="john@example.com"
        />
      </div>
      <div>
        <label htmlFor="prayerRequest" className="block mb-2 font-medium">
          Prayer Request
        </label>
        <textarea
          id="prayerRequest"
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          placeholder="Please share your prayer request here..."
        ></textarea>
      </div>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="private"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary"
          />
        </div>
        <label htmlFor="private" className="ml-2 text-sm font-medium text-gray-700">
          Keep my request private (only shared with prayer team)
        </label>
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Submit Prayer Request
      </button>
    </form>
  );
};

export default function PrayerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gray-900">
          <Image
            src="/images-cmu/prayer-background.jpg"
            alt="Prayer Ministry"
            fill
            style={{ objectFit: "cover", opacity: 0.7 }}
            priority
            sizes="100vw"
          />
        </div>
        <div className="container-custom relative z-10 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">PRAYER MINISTRY</h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-white text-center max-w-3xl mx-auto">
              "Again I say to you, if two of you agree on earth about anything they ask, it will be done for them by my
              Father in heaven. For where two or three are gathered in my name, there am I among them." - Matthew 18:19-20
            </p>
          </div>
        </div>
      </section>

      {/* Prayer Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">The Power of Prayer</h2>
            <p className="text-lg mb-6">
              At Christian Men United, we believe in the transformative power of prayer. Our prayer ministry is dedicated
              to lifting up the needs, concerns, and praises of our members and community before God.
            </p>
            <p className="text-lg mb-6">
              We have a team of committed prayer warriors who faithfully intercede on behalf of submitted prayer
              requests. All requests are treated with the utmost respect and confidentiality.
            </p>
            <div className="my-8 flex justify-center">
              <div className="w-24 h-1 bg-primary"></div>
            </div>
            <Link href="#prayer-request" className="btn btn-primary">
              Submit a Prayer Request
            </Link>
          </div>
        </div>
      </section>

      {/* Scripture and Prayer Principles */}
      <section className="section bg-secondary-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Biblical Principles of Prayer</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-4">Pray Without Ceasing</h3>
                <blockquote className="border-l-4 border-primary pl-4 italic text-primary mb-4">
                  "Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in
                  Christ Jesus for you."
                  <footer className="text-gray-600 mt-2 not-italic">— 1 Thessalonians 5:16-18</footer>
                </blockquote>
                <p>
                  Prayer should be a continual conversation with God, not just something we do in times of need or during
                  scheduled devotions.
                </p>
              </div>

              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-4">Pray in Faith</h3>
                <blockquote className="border-l-4 border-primary pl-4 italic text-primary mb-4">
                  "And whatever you ask in prayer, you will receive, if you have faith."
                  <footer className="text-gray-600 mt-2 not-italic">— Matthew 21:22</footer>
                </blockquote>
                <p>
                  True prayer is an expression of our faith in God's power, goodness, and wisdom. We pray believing that
                  God hears and will answer according to His perfect will.
                </p>
              </div>

              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-4">Pray for One Another</h3>
                <blockquote className="border-l-4 border-primary pl-4 italic text-primary mb-4">
                  "Therefore, confess your sins to one another and pray for one another, that you may be healed. The
                  prayer of a righteous person has great power as it is working."
                  <footer className="text-gray-600 mt-2 not-italic">— James 5:16</footer>
                </blockquote>
                <p>
                  We are called to bear one another's burdens through intercessory prayer, lifting up our brothers and
                  sisters before the throne of grace.
                </p>
              </div>

              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-4">Pray According to God's Will</h3>
                <blockquote className="border-l-4 border-primary pl-4 italic text-primary mb-4">
                  "And this is the confidence that we have toward him, that if we ask anything according to his will he
                  hears us."
                  <footer className="text-gray-600 mt-2 not-italic">— 1 John 5:14</footer>
                </blockquote>
                <p>
                  While we bring our requests to God, we ultimately submit to His perfect will, trusting that His plans
                  are better than our own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Request Form */}
      <section id="prayer-request" className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Submit a Prayer Request</h2>
            <p className="text-center mb-12">
              Fill out the form below to submit your prayer request. Our prayer team is committed to praying for your
              needs.
            </p>

            <div className="card p-8">
              <PrayerRequestForm />
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Meeting Info */}
      <section className="section bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Join Our Prayer Meetings</h2>
            <p className="text-xl mb-8">
              We gather regularly to pray together. All men are welcome to join us as we seek God's presence and
              direction.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
              <div className="bg-primary-dark p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Weekly Prayer Call</h3>
                <div className="space-y-3 text-secondary-light">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3 text-accent"
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
                    <span>Every Tuesday</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3 text-accent"
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
                    <span>6:30 AM - 7:15 AM</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>Conference Call: (555) 123-4567</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary-dark p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Monthly Prayer Breakfast</h3>
                <div className="space-y-3 text-secondary-light">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3 text-accent"
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
                    <span>First Saturday of Each Month</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3 text-accent"
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
                    <span>8:00 AM - 9:30 AM</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3 text-accent"
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
                    <span>First Baptist Church, Community Room</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
