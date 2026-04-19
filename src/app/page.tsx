"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Animations from "@/components/Animations";

const CDN = "https://cdn.prod.website-files.com/68efc4d6f398ead87b87c9ee";

const featuredServices = [
  {
    title: "Tooth Extractions",
    href: "/services/general-dentistry/tooth-extractions",
    img: `${CDN}/68f26e36d0b290ac86de73f0_0d23e47228478444aa28520b9e27d661_dca12f8b0711c97c745d19ece93b5ff74bdd27fc-min.avif`,
  },
  {
    title: "Dental Cleanings",
    href: "/services/general-dentistry/dental-cleanings-exams",
    img: `${CDN}/68f26fde4b644aafc780244b_35034289e78e07408ce7c41d4ef266ee_0de011cb2d7f9cf0a11b5af4cdfe4252f29e4807-min.avif`,
  },
  {
    title: "Dental Fillings",
    href: "/services/general-dentistry/dental-fillings",
    img: `${CDN}/68f26fdf0c14cd9553c6caac_51dd341549fcee49e3c83b8e69981e50_6cf3961dca60e89da4811c988599a76d0eace0f6-min.avif`,
  },
  {
    title: "Dental X-rays",
    href: "/services/general-dentistry/dental-technology",
    img: `${CDN}/68f26fde6fe4a5efaff87360_5ef785351387ae4a84dd7df82132d640_66f2ba6901b58ff3c249b8c319197aa67356f559-min.avif`,
  },
  {
    title: "Invisalign Clear Aligners",
    href: "/services/cosmetic-dentistry/invisalign",
    img: `${CDN}/68f26fdff2529f22823dcc10_617afbdc5871ec6de925a53e92ddfddd_670cd5317757862b610eebf84dde4f71d5528732-min.avif`,
  },
  {
    title: "Porcelain Veneers",
    href: "/services/cosmetic-dentistry/veneers",
    img: `${CDN}/68f26fde52d3ce04dcf43780_87aed363265cbe5fefa9bc7eaab4965d_121490bd182631d938e026428cc8f8a9c137f895-min.avif`,
  },
];

const whyChooseUs = [
  "Full-scope dental care: preventive, restorative, and cosmetic",
  "Zero-judgment approach to treatment",
  "Friendly, compassionate team that puts patients first",
  "Online scheduling and flexible appointments",
  "A modern office serving a growing, hardworking community",
];

const testimonials = [
  {
    quote:
      "My appt at the dentist office was quick and painless! Staff at front desk was welcoming and polite. Dentist asked for any concerns and took her time to discuss. I look forward to my next appointment.",
    author: "Olivia Gonzales",
  },
  {
    quote:
      "From helping me fill out forms, answering all my questions everyone there was great. I have terrible anxiety with dentists and doctors in general, the doctor there and the assistant were super assuring. I left feeling better about myself. I will be there every time I need a dentist.",
    author: "John Saint-Jon",
  },
  {
    quote:
      "Very short wait. Knowledgeable staff. Caring and gentle dentist. She offered me options for my particular problem and treated my problem in the same visit. I will be coming back to get regular care for myself and my family.",
    author: "Lynn P",
  },
];

const insurancePoints = [
  "In-network PPO provider",
  "Financing options available",
  "Easy payment plans for qualified patients",
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Patient Info", href: "/patient-info" },
  { label: "Contact", href: "/contact-us" },
];

function Arrow() {
  return (
    <svg
      className="btn-arrow"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Animations>
      <div className="page-wrapper">
        {/* ───── NAVBAR ───── */}
        <nav
          data-ani="navbar"
          className="fixed top-0 inset-x-0 z-50 text-white"
        >
          <div className="navbar-inner mx-auto flex max-w-[80rem] items-center justify-between px-6 py-5 lg:px-8">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-base md:text-lg font-bold font-heading tracking-tight">
                6 Corners <span className="italic font-light">Dental</span> Studio
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="nav-link text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="https://www.flexbook.me/web/website/1"
                target="_blank"
                className="btn btn-primary hidden sm:inline-flex text-sm"
              >
                Book Online <Arrow />
              </Link>
              <Link
                href="tel:+17734819455"
                className="btn btn-white-border hidden lg:inline-flex text-sm"
              >
                (773) 481-9455
              </Link>
              <button
                aria-label="Toggle menu"
                onClick={() => setMenuOpen((o) => !o)}
                className={`hamburger md:hidden ${menuOpen ? "is-open" : ""}`}
              >
                <span /><span /><span />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={`mobile-menu md:hidden ${menuOpen ? "is-open" : ""}`}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link
            href="https://www.flexbook.me/web/website/1"
            target="_blank"
            className="btn btn-primary mt-8 self-start"
          >
            Book Online <Arrow />
          </Link>
        </div>

        {/* ───── HERO ───── */}
        <header className="on-dark relative min-h-[100vh] flex items-center justify-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-neutral-darkest">
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65 z-10" />
            <video
              data-ani="hero-bg"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://cdn.prod.website-files.com/68efc4d6f398ead87b87c9ee%2F68f16118817633427393cc9b_AdobeStock_430367423%20%281%29-transcode.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="relative z-20 text-center px-6 py-28 max-w-4xl mx-auto">
            <h1
              data-ani="hero-title"
              className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-normal leading-[1.05]"
            >
              Top Dentist in Portage Park, Chicago
            </h1>
            <p
              data-ani="hero-subtitle"
              className="mt-8 text-xl md:text-2xl text-astral-light font-heading italic font-light"
            >
              Modern dental care in the heart of Six Corners
            </p>
            <p
              data-ani="hero-description"
              className="mt-5 text-base md:text-lg text-white/75 max-w-2xl mx-auto"
            >
              Whether you need a routine cleaning, a smile makeover, or anything in between — we&apos;re here to help you feel confident and cared for, without judgment.
            </p>
            <div
              data-ani="hero-button-group"
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              <Link
                href="https://www.flexbook.me/web/website/1"
                target="_blank"
                className="btn btn-primary"
              >
                Book Online <Arrow />
              </Link>
              <Link href="/contact-us" className="btn btn-white-border">
                Contact Us
              </Link>
              <Link
                href="tel:+17734819455"
                className="btn btn-white-border hidden sm:inline-flex"
              >
                (773) 481-9455
              </Link>
            </div>
          </div>
        </header>

        <main>
          {/* ───── ABOUT / WELCOME ───── */}
          <section className="py-24 md:py-36 px-6">
            <div className="mx-auto max-w-[80rem]">
              <div className="mt-4 grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
                <div
                  data-ani="reveal"
                  className="relative aspect-[4/5] rounded-md overflow-hidden"
                >
                  <Image
                    src={`${CDN}/68f24920cd1ab42fd18355af_ca752eee1bbcbde37e498a93857bc463_about-min.avif`}
                    alt="About 6 Corners Dental Studio"
                    fill
                    className="object-cover"
                    data-ani="parallax"
                  />
                </div>
                <div data-ani="scroll">
                  <p className="eyebrow">Welcome</p>
                  <h2 className="font-heading text-4xl md:text-5xl font-normal text-neutral-darkest leading-[1.1]">
                    Welcome to <span className="accent">6 Corners</span> Dental Studio
                  </h2>
                  <div className="header-line" />
                  <p className="mt-6 text-lg leading-relaxed text-neutral-dark">
                    Led by Dr. Julienne Hong, our practice delivers friendly, personalized dental care to the heart of Chicago&apos;s Six Corners neighborhood.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-neutral-dark">
                    Whether you&apos;re here for a routine cleaning or a total smile transformation, we&apos;re here to make you feel comfortable and cared for — judgment-free.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-neutral-dark">
                    We proudly serve Chicago, Portage Park, and Norridge with care that feels personal from the moment you walk in.
                  </p>
                  <div className="mt-10">
                    <Link href="/about" className="btn btn-black-border">
                      Learn More <Arrow />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ───── MEET DR. HONG ───── */}
          <section className="on-dark bg-astral-darkest text-white overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="flex items-center px-6 py-24 md:px-12 lg:px-20">
                <div className="max-w-xl">
                  <p data-ani="scroll" className="eyebrow">Meet the Doctor</p>
                  <h2
                    data-ani="scroll"
                    className="font-heading text-4xl md:text-5xl font-normal"
                  >
                    Meet <span className="accent">Dr. Julienne</span> Hong
                  </h2>
                  <div className="header-line !bg-white !opacity-20" />
                  <p
                    data-ani="scroll"
                    className="mt-6 text-lg leading-relaxed text-white/80"
                  >
                    Dr. Hong is known for her calm, compassionate approach to dentistry. She believes dental visits should be positive, empowering experiences — not something to dread. With a strong background in both general and cosmetic dentistry, she focuses on helping patients feel confident, healthy, and truly heard. Her philosophy is simple: every smile deserves individual attention and care without judgment.
                  </p>
                  <div data-ani="scroll" className="mt-10">
                    <Link
                      href="/about/meet-the-doctor"
                      className="btn btn-white-border"
                    >
                      Meet Dr. Hong <Arrow />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[420px] md:min-h-[640px] overflow-hidden">
                <Image
                  data-ani="parallax"
                  src={`${CDN}/68f2679ce0c9e88fdc79ea23_64595b6bdb12cb3fca114c48dc534297_e1bbbffb3cf2b3ab04535a988abd8e1250c0aee5-min.avif`}
                  alt="Dr. Julienne Hong"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* ───── SERVICES ───── */}
          <section className="py-24 md:py-36 px-6">
            <div className="mx-auto max-w-[80rem]">
              <div
                data-ani="scroll"
                className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
              >
                <div className="max-w-2xl">
                  <p className="eyebrow">Our Services</p>
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal text-neutral-darkest leading-[1.05]">
                    <span className="accent">Feel-good</span> dentistry you can count on
                  </h2>
                  <div className="header-line" />
                  <p className="mt-4 text-lg text-neutral-dark">
                    A full range of dental services designed to meet your needs and exceed your expectations.
                  </p>
                </div>
                <Link href="/services" className="btn btn-black-border shrink-0">
                  View All Services <Arrow />
                </Link>
              </div>
              <div
                data-ani="stagger"
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {featuredServices.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="service-card group block rounded-md overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        className="service-card-img object-cover"
                      />
                      <div className="service-card-overlay" />
                    </div>
                    <div className="p-6 flex items-center justify-between">
                      <h3 className="font-heading text-xl md:text-2xl font-normal text-neutral-darkest">
                        {service.title}
                      </h3>
                      <span className="text-astral group-hover:translate-x-1 transition-transform">
                        <Arrow />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* ───── WHY CHOOSE US ───── */}
          <section className="py-24 md:py-36 px-6 bg-white">
            <div className="mx-auto max-w-[80rem]">
              <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
                <div>
                  <p data-ani="scroll" className="eyebrow">Why Us</p>
                  <h2
                    data-ani="scroll"
                    className="font-heading text-4xl md:text-5xl font-normal text-neutral-darkest leading-[1.1]"
                  >
                    Why <span className="accent">choose</span> us?
                  </h2>
                  <div className="header-line" />
                  <p
                    data-ani="scroll"
                    className="mt-6 text-lg text-neutral-dark leading-relaxed"
                  >
                    At 6 Corners Dental Studio, we believe everyone deserves to feel at ease with their dental care. That&apos;s why we&apos;ve built a space focused on comfort, respect, and results.
                  </p>
                  <div data-ani="stagger" className="mt-10 space-y-5">
                    {whyChooseUs.map((item) => (
                      <div key={item} className="flex items-start gap-4">
                        <div className="mt-1 h-6 w-6 rounded-full bg-astral-lightest flex items-center justify-center shrink-0">
                          <svg
                            className="w-3 h-3 text-astral"
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M3 8l4 4 6-8" />
                          </svg>
                        </div>
                        <p className="text-base font-medium text-neutral-darkest pt-0.5">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div data-ani="scroll" className="mt-10">
                    <Link href="/about" className="btn btn-black-border">
                      What Sets Us Apart <Arrow />
                    </Link>
                  </div>
                </div>
                <div
                  data-ani="reveal"
                  className="relative aspect-[4/5] rounded-md overflow-hidden"
                >
                  <Image
                    src={`${CDN}/68f5236e13829fe52bdcc4b9_11d924e37f4b19bbd06cb06759a779e2_fa06c6d89044ef31c1a3f0810a8df0abb3e64794-min.avif`}
                    alt="Why choose 6 Corners Dental Studio"
                    fill
                    className="object-cover"
                    data-ani="parallax"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ───── TESTIMONIALS ───── */}
          <section className="on-dark bg-astral-darkest text-white overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[420px] md:min-h-full">
                <Image
                  src={`${CDN}/68f531b59039ffc9b87f1180_5c2d5486275f7e5ca08314fd4dbe6de3_8e81a45c8230061258dfccab3cae8342b11cc000-min.avif`}
                  alt="Happy patient at 6 Corners Dental Studio"
                  fill
                  className="object-cover"
                  data-ani="parallax"
                />
              </div>
              <div className="px-6 py-24 md:px-12 lg:px-20">
                <div className="max-w-xl">
                  <p data-ani="scroll" className="eyebrow">Testimonials</p>
                  <h2
                    data-ani="scroll"
                    className="font-heading text-4xl md:text-5xl font-normal"
                  >
                    What our <span className="accent">patients</span> say
                  </h2>
                  <p
                    data-ani="scroll"
                    className="mt-3 text-lg text-astral-light font-heading italic"
                  >
                    Over 200 5-star reviews on Google
                  </p>
                  <div data-ani="stagger" className="mt-12 space-y-10">
                    {testimonials.map((t) => (
                      <div key={t.author}>
                        <div className="flex gap-1 mb-3 text-astral-light">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-lg font-heading leading-relaxed text-white/90">
                          &ldquo;{t.quote}&rdquo;
                        </p>
                        <p className="mt-3 text-xs font-semibold tracking-widest uppercase text-white/50">
                          — {t.author}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10">
                    <Link
                      href="https://www.google.com/maps/place/Portage+Park+Dental+Studio/@41.9528701,-87.779035,17z"
                      target="_blank"
                      className="btn btn-white-border"
                    >
                      Read More Reviews <Arrow />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ───── INSURANCE & PAYMENT ───── */}
          <section className="py-24 md:py-36 px-6">
            <div className="mx-auto max-w-[80rem]">
              <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
                <div
                  data-ani="reveal"
                  className="relative aspect-[4/5] rounded-md overflow-hidden order-last md:order-first"
                >
                  <Image
                    src={`${CDN}/68f53f59c946b3776aaa72d6_b7f61fccace4404d9de05b5da5124b42_4b30442d43847aa3c56259ed6c1313364733610b-min.avif`}
                    alt="Insurance and payment options"
                    fill
                    className="object-cover"
                    data-ani="parallax"
                  />
                </div>
                <div>
                  <p data-ani="scroll" className="eyebrow">Affordable Care</p>
                  <h2
                    data-ani="scroll"
                    className="font-heading text-4xl md:text-5xl font-normal text-neutral-darkest leading-[1.1]"
                  >
                    Insurance &amp; <span className="accent">payment</span> options
                  </h2>
                  <div className="header-line" />
                  <p
                    data-ani="scroll"
                    className="mt-6 text-lg text-neutral-dark leading-relaxed"
                  >
                    We accept most major PPO insurance plans and are committed to making care affordable and accessible.
                  </p>
                  <div data-ani="stagger" className="mt-10 space-y-5">
                    {insurancePoints.map((item) => (
                      <div key={item} className="flex items-start gap-4">
                        <div className="mt-1 h-6 w-6 rounded-full bg-astral-lightest flex items-center justify-center shrink-0">
                          <svg
                            className="w-3 h-3 text-astral"
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M3 8l4 4 6-8" />
                          </svg>
                        </div>
                        <p className="text-base font-medium text-neutral-darkest pt-0.5">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10">
                    <Link href="/patient-info" className="btn btn-black-border">
                      Insurance &amp; Payment Info <Arrow />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ───── CTA ───── */}
          <section className="pb-24 md:pb-36 px-6 bg-white">
            <div className="mx-auto max-w-[80rem]">
              <div
                data-ani="scroll"
                className="relative grid md:grid-cols-2 rounded-lg overflow-hidden bg-neutral-lightest"
              >
                <div className="p-10 md:p-14 lg:p-20 flex items-center">
                  <div>
                    <p className="eyebrow">Book Your Visit</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-normal text-neutral-darkest leading-[1.1]">
                      Ready to <span className="accent">book</span> your visit?
                    </h2>
                    <div className="header-line" />
                    <p className="mt-6 text-lg text-neutral-dark leading-relaxed">
                      Let&apos;s make your next dental appointment a positive experience. Whether you&apos;re due for a cleaning or looking to enhance your smile, we&apos;re here to help — without pressure or judgment.
                    </p>
                    <div className="mt-10 flex flex-wrap gap-3">
                      <Link
                        href="https://www.flexbook.me/web/website/1"
                        target="_blank"
                        className="btn btn-dark-blue"
                      >
                        Book Online <Arrow />
                      </Link>
                      <Link href="/contact-us" className="btn btn-black">
                        Contact Us
                      </Link>
                      <Link
                        href="tel:+17734819455"
                        className="btn btn-black-border"
                      >
                        (773) 481-9455
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative min-h-[320px] md:min-h-[520px]">
                  <Image
                    src={`${CDN}/68f545b5f0a79fd0b26ca567_e41cbd44a11743313b75de78cd782af0_CTA-min.avif`}
                    alt="Book your visit"
                    fill
                    className="object-cover"
                    data-ani="parallax"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* ───── FOOTER ───── */}
        <footer className="on-dark bg-neutral-darkest text-white py-20 px-6">
          <div className="mx-auto max-w-[80rem]">
            <div className="grid md:grid-cols-[1.3fr_1fr_1fr] gap-12">
              <div>
                <p className="text-xl font-bold font-heading tracking-tight">
                  6 Corners <span className="italic font-light">Dental</span> Studio
                </p>
                <p className="mt-4 text-sm text-white/60 max-w-xs leading-relaxed">
                  Compassionate, judgment-free dental care in Portage Park, Chicago.
                </p>
                <div className="mt-8 space-y-2 text-sm text-white/70">
                  <p className="font-semibold text-white text-xs tracking-widest uppercase">Address</p>
                  <p>
                    <Link
                      href="https://maps.app.goo.gl/sH6JLQKQDmvfXYPWA"
                      target="_blank"
                      className="hover:text-white transition"
                    >
                      3946 N Cicero Ave, Chicago, IL 60641
                    </Link>
                  </p>
                  <p className="font-semibold text-white text-xs tracking-widest uppercase pt-4">Contact</p>
                  <p>
                    <Link href="tel:+17734819455" className="hover:text-white transition">
                      (773) 481-9455
                    </Link>
                  </p>
                  <p>
                    <Link
                      href="mailto:6cornersdentalstudio@gmail.com"
                      className="hover:text-white transition"
                    >
                      6cornersdentalstudio@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-white text-xs tracking-widest uppercase mb-4">Explore</p>
                <div className="space-y-3 text-sm text-white/70">
                  <Link href="/" className="block hover:text-white transition">Home</Link>
                  <Link href="/about" className="block hover:text-white transition">About</Link>
                  <Link href="/about/meet-the-doctor" className="block hover:text-white transition">Meet the Doctor</Link>
                  <Link href="/patient-info" className="block hover:text-white transition">Patient Info</Link>
                  <Link href="/contact-us" className="block hover:text-white transition">Contact</Link>
                </div>
              </div>
              <div>
                <p className="font-semibold text-white text-xs tracking-widest uppercase mb-4">Services</p>
                <div className="space-y-3 text-sm text-white/70">
                  <Link href="/services" className="block hover:text-white transition">All Services</Link>
                  <Link href="/services/general-dentistry" className="block hover:text-white transition">General Dentistry</Link>
                  <Link href="/services/cosmetic-dentistry" className="block hover:text-white transition">Cosmetic Dentistry</Link>
                  <Link href="/services/restorative-dentistry" className="block hover:text-white transition">Restorative Dentistry</Link>
                </div>
              </div>
            </div>
            <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/50">
              <p>&copy; {new Date().getFullYear()} 6 Corners Dental Studio. All rights reserved.</p>
              <div className="flex flex-wrap gap-5">
                <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition">Terms Of Use</Link>
                <Link href="/accessibility-statement" className="hover:text-white transition">Accessibility Statement</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Animations>
  );
}
