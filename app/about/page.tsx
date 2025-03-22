"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section - Full-width image with overlay */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-gray-900">
          <Image
            src="/images/2015-WelcomePic.jpg" 
            alt="About Christian Men United"
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
              About Our Fellowship
            </h1>
            <div className="h-1 w-24 bg-accent mb-8"></div>
            <p className="text-xl text-white/90 max-w-2xl">
              Learn more about our mission and the people behind Christian Men United.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-screen-xl px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Mission Statement</h2>
            <div className="h-1 w-16 bg-accent mb-8"></div>
            <div className="bg-secondary-light p-8 rounded-lg shadow-sm border-l-4 border-accent">
              <p className="text-lg mb-6">
                The mission of CMU is to help pastors of local churches to cultivate and sustain unity within their
                congregations. We achieve this by inspiring and equipping men to live according to the Word of God,
                fostering their growth as effective disciples and disciple-makers of Christ Jesus.
              </p>
              <p className="text-lg">
                We are dedicated to fostering a Christ-centered environment where men can grow spiritually, develop
                leadership skills, and build meaningful relationships with other believers, all firmly rooted in biblical
                truth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto max-w-screen-xl px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Core Principles for Unity</h2>
            <div className="h-1 w-16 bg-accent mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-charcoal-light p-8 rounded-lg border-t-4 border-accent shadow-md">
                <div className="bg-accent w-10 h-10 flex items-center justify-center rounded-full mb-6 text-white font-bold">1</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Support One Another</h3>
                <p className="mb-4 text-white/80 leading-relaxed">
                  Men must recognize that they cannot succeed alone, as emphasized in Scripture. We believe men were
                  created for community and mutual support.
                </p>
                <blockquote className="border-l-2 border-accent pl-4 italic text-white/90 my-4 bg-black/20 p-3 rounded">
                  "For if they fall, one will lift up his fellow. But woe to him who is alone when he falls and has not
                  another to lift him up!"
                  <footer className="text-white/60 mt-2 not-italic text-sm">— Ecclesiastes 4:10</footer>
                </blockquote>
              </div>

              <div className="bg-primary p-8 rounded-lg border-t-4 border-primary-light shadow-md">
                <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full mb-6 text-primary font-bold">2</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Guard Against Division</h3>
                <p className="mb-4 text-white/80 leading-relaxed">
                  Disunity can lead to conflict and discord. We are committed to promoting unity in thought and purpose
                  among Christian men.
                </p>
                <blockquote className="border-l-2 border-white pl-4 italic text-white/90 my-4 bg-primary-dark/50 p-3 rounded">
                  "I appeal to you, brothers, that all of you agree, and that there
                  be no divisions among you."
                  <footer className="text-white/60 mt-2 not-italic text-sm">— 1 Corinthians 1:10</footer>
                </blockquote>
              </div>

              <div className="bg-primary p-8 rounded-lg border-t-4 border-primary-light shadow-md">
                <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full mb-6 text-primary font-bold">3</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Pursue Peace</h3>
                <p className="mb-4 text-white/80 leading-relaxed">
                  Living in peace with one another is essential for Christian fellowship. We strive to maintain unity
                  through peaceful relationships and conflict resolution.
                </p>
                <blockquote className="border-l-2 border-white pl-4 italic text-white/90 my-4 bg-primary-dark/50 p-3 rounded">
                  "Eager to maintain the unity of the Spirit through the bond of peace."
                  <footer className="text-white/60 mt-2 not-italic text-sm">— Ephesians 4:3</footer>
                </blockquote>
              </div>

              <div className="bg-charcoal-light p-8 rounded-lg border-t-4 border-accent shadow-md">
                <div className="bg-accent w-10 h-10 flex items-center justify-center rounded-full mb-6 text-white font-bold">4</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Love One Another</h3>
                <p className="mb-4 text-white/80 leading-relaxed">
                  Love is the foundation of unity. We believe that practicing Christ-like love is essential for
                  maintaining harmony among believers.
                </p>
                <blockquote className="border-l-2 border-accent pl-4 italic text-white/90 my-4 bg-black/20 p-3 rounded">
                  "Put on love, which binds everything together in perfect harmony."
                  <footer className="text-white/60 mt-2 not-italic text-sm">— Colossians 3:14</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-sand">
        <div className="container mx-auto max-w-screen-xl px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Story</h2>
            <div className="h-1 w-16 bg-accent mb-8"></div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg mb-6 leading-relaxed">
                Christian Men United was founded with a vision to strengthen the body of Christ by encouraging unity
                among Christian men. Our organization began as a small group of dedicated believers who recognized the
                need for stronger bonds between men of faith.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Over the years, we have grown to serve churches throughout our community, providing resources, events,
                and support systems that empower men to live godly lives and lead their families with biblical wisdom.
              </p>
              <p className="text-lg leading-relaxed">
                Today, CMU continues to expand its reach, always focusing on our core mission of fostering unity based on
                the truth of God's Word and the transformative power of Jesus Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-screen-xl px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Leadership Team</h2>
            <div className="h-1 w-16 bg-accent mb-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary-light p-6 rounded-lg shadow-md transform transition-transform hover:translate-y-[-5px]">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-full mb-4 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">John Davis</h3>
                  <p className="text-primary font-medium mb-3">President</p>
                  <p className="text-charcoal">
                    Dedicated to helping men grow in their faith and leadership abilities through biblical principles.
                  </p>
                </div>
              </div>

              <div className="bg-secondary-light p-6 rounded-lg shadow-md transform transition-transform hover:translate-y-[-5px]">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-full mb-4 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">Michael Thompson</h3>
                  <p className="text-primary font-medium mb-3">Vice President</p>
                  <p className="text-charcoal">
                    Passionate about fostering unity in the body of Christ and equipping men to be godly leaders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto max-w-screen-xl px-6 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Be part of a community of men committed to growing in faith and supporting one another.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-white text-accent px-8 py-4 rounded-lg font-medium hover:bg-secondary transition-colors group"
          >
            Get Involved Today
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
