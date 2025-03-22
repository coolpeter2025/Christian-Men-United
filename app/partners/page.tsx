"use client";

import Image from "next/image";
import Link from "next/link";
import HorizontalScroll from "@/components/HorizontalScroll";

// Sample partners data
const partners = [
  {
    id: 1,
    name: "Moody Radio",
    logo: "/images-cmu/moody-radio.png",
    description:
      "Moody Radio is a Christian radio network that broadcasts programming focused on Bible teaching, Christian music, and family resources. As a partner of Christian Men United, they help spread our message and events to a wider audience.",
    website: "https://www.moodyradio.org/",
  },
  {
    id: 2,
    name: "Choices",
    logo: "/images-cmu/choices.png",
    description:
      "Choices is an organization dedicated to helping people make life-affirming decisions. Their partnership with Christian Men United helps us provide additional resources for men facing difficult life choices.",
    website: "https://www.choices.org/",
  },
  {
    id: 3,
    name: "Tampa Bay Steel",
    logo: "/images-cmu/tampa-bay-steel.png",
    description:
      "Tampa Bay Steel is a local business committed to supporting community initiatives. Their sponsorship enables us to host events and provide resources to men across the Tampa Bay area.",
    website: "https://www.tampabaysteel.com/",
  },
  {
    id: 4,
    name: "Hope Ministries",
    logo: "/images-cmu/moody-radio.png",
    description:
      "Hope Ministries provides resources and support for families in need. Their partnership with CMU allows us to expand our outreach to families in the community.",
    website: "https://www.hopeministry.org/",
  },
  {
    id: 5,
    name: "Faith Community Center",
    logo: "/images-cmu/choices.png",
    description:
      "Faith Community Center offers meeting spaces and support for community organizations. They regularly host our events and provide facilities for our gatherings.",
    website: "https://www.faithcenter.org/",
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gray-900">
          <Image
            src="/images-cmu/partners-background.jpg"
            alt="Our Partners"
            fill
            style={{ objectFit: "cover", opacity: 0.7 }}
            priority
            sizes="100vw"
          />
        </div>
        <div className="container-custom relative z-10 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">OUR PARTNERS</h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-white text-center max-w-3xl mx-auto">
              Christian Men United is grateful for our partnerships with organizations that share our vision for fostering
              unity among men of faith.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Working Together in Faith</h2>
            <p className="text-lg mb-6">
              We believe that collaboration strengthens our ability to make a positive impact in our community. Our
              partners play a crucial role in helping us fulfill our mission of cultivating unity among Christian men.
            </p>
            <p className="text-lg mb-6">
              Through these strategic partnerships, we are able to expand our reach, provide more resources, and create
              more opportunities for men to grow in their faith and leadership abilities.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Showcase - Horizontal Scrolling */}
      <section className="section bg-secondary-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Valued Partners</h2>

          <HorizontalScroll>
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="snap-start flex-none w-[300px] md:w-[400px] card overflow-hidden"
              >
                <div className="bg-white p-6 flex items-center justify-center h-40 border-b border-gray-200">
                  <div className="relative h-32 w-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{partner.name}</h3>
                  <p className="mb-6 line-clamp-4 h-24">{partner.description}</p>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </HorizontalScroll>
        </div>
      </section>

      {/* Detailed Partners List */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Partner Details</h2>

          <div className="space-y-12">
            {partners.slice(0, 3).map((partner, index) => (
              <div
                key={partner.id}
                className={`card overflow-hidden ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-8 flex items-center justify-center">
                    <div className="relative h-40 w-full">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        style={{ objectFit: "contain" }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="p-8 md:col-span-2">
                    <h3 className="text-2xl font-bold mb-4">{partner.name}</h3>
                    <p className="mb-6">{partner.description}</p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="section bg-secondary-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Partnership Benefits</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Increased Visibility</h3>
                <p>
                  Partners receive recognition at all CMU events, on our website, and in promotional materials,
                  increasing their visibility within the Christian community.
                </p>
              </div>

              <div className="card p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Network Expansion</h3>
                <p>
                  Connect with other Christian organizations and businesses committed to supporting men's spiritual
                  growth and community impact.
                </p>
              </div>

              <div className="card p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Ministry Impact</h3>
                <p>
                  Join us in making a difference in the lives of men and their families through discipleship, prayer, and
                  community outreach initiatives.
                </p>
              </div>

              <div className="card p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Event Sponsorship</h3>
                <p>
                  Opportunities to sponsor or co-host events that align with your organization's mission and values,
                  reaching an engaged audience of Christian men.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="section bg-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Is your organization interested in partnering with Christian Men United? We'd love to explore how we can work
            together to strengthen men in their faith.
          </p>
          <Link href="/contact" className="btn bg-white text-accent hover:bg-secondary">
            Contact Us to Learn More
          </Link>
        </div>
      </section>
    </>
  );
}
