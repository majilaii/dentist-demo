"use client";

import Image from "next/image";
import { useState } from "react";
import Animations from "@/components/Animations";

const CDN = "https://cdn.prod.website-files.com/68efc4d6f398ead87b87c9ee";

const featuredServices = [
  {
    title: "Vađenje Zuba",
    href: "#kontakt",
    img: `${CDN}/68f26e36d0b290ac86de73f0_0d23e47228478444aa28520b9e27d661_dca12f8b0711c97c745d19ece93b5ff74bdd27fc-min.avif`,
  },
  {
    title: "Čišćenje Zuba",
    href: "#kontakt",
    img: `${CDN}/68f26fde4b644aafc780244b_35034289e78e07408ce7c41d4ef266ee_0de011cb2d7f9cf0a11b5af4cdfe4252f29e4807-min.avif`,
  },
  {
    title: "Plombe",
    href: "#kontakt",
    img: `${CDN}/68f26fdf0c14cd9553c6caac_51dd341549fcee49e3c83b8e69981e50_6cf3961dca60e89da4811c988599a76d0eace0f6-min.avif`,
  },
  {
    title: "Stomatološki Rendgeni",
    href: "#kontakt",
    img: `${CDN}/68f26fde6fe4a5efaff87360_5ef785351387ae4a84dd7df82132d640_66f2ba6901b58ff3c249b8c319197aa67356f559-min.avif`,
  },
  {
    title: "Invisalign Providni Aparatići",
    href: "#kontakt",
    img: `${CDN}/68f26fdff2529f22823dcc10_617afbdc5871ec6de925a53e92ddfddd_670cd5317757862b610eebf84dde4f71d5528732-min.avif`,
  },
  {
    title: "Porcelanske Ljuske",
    href: "#kontakt",
    img: `${CDN}/68f26fde52d3ce04dcf43780_87aed363265cbe5fefa9bc7eaab4965d_121490bd182631d938e026428cc8f8a9c137f895-min.avif`,
  },
];

const whyChooseUs = [
  "Sveobuhvatna nega: preventivna, restaurativna i estetska stomatologija",
  "Pristup bez osude prema svakom pacijentu i tretmanu",
  "Prijatni, saosećajni tim koji stavlja pacijente na prvo mesto",
  "Online zakazivanje i fleksibilni termini koji odgovaraju vama",
  "Savremena ordinacija koja služi rastućoj, vrednoj zajednici",
];

const testimonials = [
  {
    quote:
      "Poseta je bila brza i bezbolna! Osoblje na recepciji je ljubazno i prijatno, a doktorka je uzela si vremena da odgovori na svako pitanje. Jedva čekam sledeći pregled.",
    author: "Olivia Gonzales",
  },
  {
    quote:
      "Od pomoći pri popunjavanju formulara do odgovaranja na sva pitanja, svi su bili sjajni. Imam veliku anksioznost kod stomatologa, ali doktorka i asistent su me potpuno smirili. Izašao sam osećajući se mnogo bolje i vratiću se svaki put.",
    author: "John Saint-Jon",
  },
  {
    quote:
      "Kratko čekanje, stručno osoblje i pažljiva doktorka. Ponudila mi je opcije za moj problem i rešila ga u istoj poseti. Vratiću se po redovnu negu za sebe i svoju porodicu.",
    author: "Lynn P",
  },
];

const insurancePoints = [
  "Ugovoreni PPO dobavljač osiguranja",
  "Dostupne opcije finansiranja za sve pacijente",
  "Laki planovi plaćanja za kvalifikovane pacijente",
];

const navLinks = [
  { label: "Naslovna", href: "#naslovna" },
  { label: "O Nama", href: "#o-nama" },
  { label: "Usluge", href: "#usluge" },
  { label: "Pacijenti", href: "#pacijenti" },
  { label: "Kontakt", href: "#kontakt" },
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

function CheckIcon() {
  return (
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
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Animations>
      <div className="page-wrapper">

        {/* NAVBAR */}
        <nav data-ani="navbar" className="fixed top-0 inset-x-0 z-50 text-white">
          <div className="navbar-inner mx-auto flex max-w-[80rem] items-center justify-between px-6 py-5 lg:px-8">
            <a href="#naslovna" className="flex items-center gap-3">
              <span className="text-base md:text-lg font-bold font-heading tracking-tight">
                Moj Flow <span className="italic font-light">Dent</span>
              </span>
            </a>

            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="nav-link text-sm font-medium">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.flexbook.me/web/website/1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary hidden sm:inline-flex text-sm"
              >
                Zakažite Online <Arrow />
              </a>
              <a href="tel:+17734819455" className="btn btn-white-border hidden lg:inline-flex text-sm">
                (773) 481-9455
              </a>
              <button
                aria-label="Otvori meni"
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
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="https://www.flexbook.me/web/website/1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-8 self-start"
            onClick={() => setMenuOpen(false)}
          >
            Zakažite Online <Arrow />
          </a>
        </div>

        {/* HERO */}
        <header
          id="naslovna"
          className="on-dark relative min-h-[100vh] flex items-center justify-center text-white overflow-hidden"
        >
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
              Vrhunski stomatolog u Beogradu
            </h1>
            <p
              data-ani="hero-subtitle"
              className="mt-8 text-xl md:text-2xl text-astral-light font-heading italic font-light"
            >
              Savremena stomatološka nega u srcu Beograda
            </p>
            <p
              data-ani="hero-description"
              className="mt-5 text-base md:text-lg text-white/75 max-w-2xl mx-auto"
            >
              Bez obzira da li vam je potrebno rutinsko čišćenje, novi osmeh, ili nešto između, tu smo da vam pomognemo da se osećate samouvereno i zbrinuto, bez osude.
            </p>
            <div
              data-ani="hero-button-group"
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              <a
                href="https://www.flexbook.me/web/website/1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Zakažite Online <Arrow />
              </a>
              <a href="#kontakt" className="btn btn-white-border">
                Kontaktirajte Nas
              </a>
              <a href="tel:+17734819455" className="btn btn-white-border hidden sm:inline-flex">
                (773) 481-9455
              </a>
            </div>
          </div>

          <span className="scroll-indicator" aria-hidden="true" />
        </header>

        <main>

          {/* ABOUT / WELCOME */}
          <section id="o-nama" className="py-24 md:py-36 px-6">
            <div className="mx-auto max-w-[80rem]">
              <div className="mt-4 grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
                <div data-ani="reveal" className="relative aspect-[4/5] rounded-md overflow-hidden">
                  <Image
                    src={`${CDN}/68f24920cd1ab42fd18355af_ca752eee1bbcbde37e498a93857bc463_about-min.avif`}
                    alt="O 6 Corners Dental Studiju"
                    fill
                    className="object-cover"
                    data-ani="parallax"
                  />
                </div>
                <div data-ani="scroll">
                  <p className="eyebrow">Dobrodošli</p>
                  <h2 className="font-heading text-4xl md:text-5xl font-normal text-neutral-darkest leading-[1.1]">
                    Dobrodošli u <span className="accent">Moj Flow</span> Dent
                  </h2>
                  <div className="header-line" />
                  <p className="mt-6 text-lg leading-relaxed text-neutral-dark">
                    Predvođena dr Julienne Hong, naša ordinacija pruža prijatnu, personalizovanu stomatološku negu u srcu Beograda.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-neutral-dark">
                    Bilo da ste tu za rutinsko čišćenje ili potpunu transformaciju osmeha, trudimo se da se osećate udobno i zbrinuto, bez osude.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-neutral-dark">
                    Sa ponosom pružamo usluge pacijentima iz celog Beograda i okoline, s pažnjom koja se oseća lično od prvog koraka koji napravite u ordinaciju.
                  </p>
                  <div className="mt-10">
                    <a href="#doktor" className="btn btn-black-border">
                      Saznajte Više <Arrow />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MEET DR. HONG */}
          <section id="doktor" className="on-dark bg-astral-darkest text-white overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="flex items-center px-6 py-24 md:px-12 lg:px-20">
                <div className="max-w-xl">
                  <p data-ani="scroll" className="eyebrow">Upoznajte Doktorku</p>
                  <h2
                    data-ani="scroll"
                    className="font-heading text-4xl md:text-5xl font-normal"
                  >
                    Upoznajte <span className="accent">dr. Julienne</span> Hong
                  </h2>
                  <div className="header-line !bg-white !opacity-20" />
                  <p data-ani="scroll" className="mt-6 text-lg leading-relaxed text-white/80">
                    Dr. Hong je poznata po svom mirnom i saosećajnom pristupu stomatologiji. Veruje da stomatološke posete treba da budu pozitivna, osnažujuća iskustva, a ne nešto čega se treba plašiti. Sa snažnim iskustvom u opštoj i estetskoj stomatologiji, fokusira se na to da pacijenti budu zdravi, samouvereni i zaista saslušani. Njena filozofija je jednostavna: svaki osmeh zaslužuje individualnu pažnju i negu bez osude.
                  </p>
                  <div data-ani="scroll" className="mt-10">
                    <a href="#kontakt" className="btn btn-white-border">
                      Zakažite Pregled <Arrow />
                    </a>
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

          {/* SERVICES */}
          <section id="usluge" className="py-24 md:py-36 px-6">
            <div className="mx-auto max-w-[80rem]">
              <div
                data-ani="scroll"
                className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
              >
                <div className="max-w-2xl">
                  <p className="eyebrow">Naše Usluge</p>
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal text-neutral-darkest leading-[1.05]">
                    <span className="accent">Vrhunska</span> stomatologija kojoj možete da verujete
                  </h2>
                  <div className="header-line" />
                  <p className="mt-4 text-lg text-neutral-dark">
                    Kompletan spektar stomatoloških usluga osmišljenih da zadovolje vaše potrebe i nadmaše vaša očekivanja.
                  </p>
                </div>
                <a href="#kontakt" className="btn btn-black-border shrink-0">
                  Zakažite Pregled <Arrow />
                </a>
              </div>

              <div data-ani="stagger" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredServices.map((service) => (
                  <a
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
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section id="zasto-mi" className="py-24 md:py-36 px-6 bg-white">
            <div className="mx-auto max-w-[80rem]">
              <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
                <div>
                  <p data-ani="scroll" className="eyebrow">Zašto Mi</p>
                  <h2
                    data-ani="scroll"
                    className="font-heading text-4xl md:text-5xl font-normal text-neutral-darkest leading-[1.1]"
                  >
                    Zašto <span className="accent">izabrati</span> nas?
                  </h2>
                  <div className="header-line" />
                  <p data-ani="scroll" className="mt-6 text-lg text-neutral-dark leading-relaxed">
                    U 6 Corners Dental Studiju verujemo da svako zaslužuje da se oseća prijatno pri stomatološkoj nezi. Zato smo izgradili prostor fokusiran na udobnost, poštovanje i rezultate.
                  </p>
                  <div data-ani="stagger" className="mt-10 space-y-5">
                    {whyChooseUs.map((item) => (
                      <div key={item} className="flex items-start gap-4">
                        <div className="mt-1 h-6 w-6 rounded-full bg-astral-lightest flex items-center justify-center shrink-0">
                          <CheckIcon />
                        </div>
                        <p className="text-base font-medium text-neutral-darkest pt-0.5">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div data-ani="scroll" className="mt-10">
                    <a href="#o-nama" className="btn btn-black-border">
                      Šta Nas Izdvaja <Arrow />
                    </a>
                  </div>
                </div>
                <div data-ani="reveal" className="relative aspect-[4/5] rounded-md overflow-hidden">
                  <Image
                    src={`${CDN}/68f5236e13829fe52bdcc4b9_11d924e37f4b19bbd06cb06759a779e2_fa06c6d89044ef31c1a3f0810a8df0abb3e64794-min.avif`}
                    alt="Zašto izabrati 6 Corners Dental Studio"
                    fill
                    className="object-cover"
                    data-ani="parallax"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section id="utisci" className="on-dark bg-astral-darkest text-white overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[420px] md:min-h-full">
                <Image
                  src={`${CDN}/68f531b59039ffc9b87f1180_5c2d5486275f7e5ca08314fd4dbe6de3_8e81a45c8230061258dfccab3cae8342b11cc000-min.avif`}
                  alt="Srećan pacijent u 6 Corners Dental Studiju"
                  fill
                  className="object-cover"
                  data-ani="parallax"
                />
              </div>
              <div className="px-6 py-24 md:px-12 lg:px-20">
                <div className="max-w-xl">
                  <p data-ani="scroll" className="eyebrow">Utisci Pacijenata</p>
                  <h2 data-ani="scroll" className="font-heading text-4xl md:text-5xl font-normal">
                    Šta kažu naši <span className="accent">pacijenti</span>
                  </h2>
                  <p data-ani="scroll" className="mt-3 text-lg text-astral-light font-heading italic">
                    Više od 200 recenzija sa 5 zvezdica na Google-u
                  </p>
                  <div data-ani="stagger" className="mt-12 space-y-10">
                    {testimonials.map((t) => (
                      <div key={t.author}>
                        <div className="flex gap-1 mb-3 text-astral-light">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-lg font-heading leading-relaxed text-white/90">
                          &ldquo;{t.quote}&rdquo;
                        </p>
                        <p className="mt-3 text-xs font-semibold tracking-widest uppercase text-white/50">
                          {t.author}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10">
                    <a
                      href="https://www.google.com/maps/place/Portage+Park+Dental+Studio/@41.9528701,-87.779035,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-white-border"
                    >
                      Pročitajte Više Recenzija <Arrow />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* INSURANCE & PAYMENT */}
          <section id="pacijenti" className="py-24 md:py-36 px-6">
            <div className="mx-auto max-w-[80rem]">
              <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
                <div
                  data-ani="reveal"
                  className="relative aspect-[4/5] rounded-md overflow-hidden order-last md:order-first"
                >
                  <Image
                    src={`${CDN}/68f53f59c946b3776aaa72d6_b7f61fccace4404d9de05b5da5124b42_4b30442d43847aa3c56259ed6c1313364733610b-min.avif`}
                    alt="Opcije osiguranja i plaćanja"
                    fill
                    className="object-cover"
                    data-ani="parallax"
                  />
                </div>
                <div>
                  <p data-ani="scroll" className="eyebrow">Pristupačna Nega</p>
                  <h2
                    data-ani="scroll"
                    className="font-heading text-4xl md:text-5xl font-normal text-neutral-darkest leading-[1.1]"
                  >
                    Osiguranje i <span className="accent">opcije</span> plaćanja
                  </h2>
                  <div className="header-line" />
                  <p data-ani="scroll" className="mt-6 text-lg text-neutral-dark leading-relaxed">
                    Prihvatamo većinu većih PPO planova osiguranja i posvećeni smo tome da vrhunska nega bude pristupačna i dostupna svima.
                  </p>
                  <div data-ani="stagger" className="mt-10 space-y-5">
                    {insurancePoints.map((item) => (
                      <div key={item} className="flex items-start gap-4">
                        <div className="mt-1 h-6 w-6 rounded-full bg-astral-lightest flex items-center justify-center shrink-0">
                          <CheckIcon />
                        </div>
                        <p className="text-base font-medium text-neutral-darkest pt-0.5">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10">
                    <a href="#kontakt" className="btn btn-black-border">
                      Zakažite Konsultaciju <Arrow />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="kontakt" className="pb-24 md:pb-36 px-6 bg-white">
            <div className="mx-auto max-w-[80rem]">
              <div
                data-ani="scroll"
                className="relative grid md:grid-cols-2 rounded-lg overflow-hidden bg-neutral-lightest"
              >
                <div className="p-10 md:p-14 lg:p-20 flex items-center">
                  <div>
                    <p className="eyebrow">Zakažite Posetu</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-normal text-neutral-darkest leading-[1.1]">
                      Spremni za <span className="accent">zakazivanje</span> posete?
                    </h2>
                    <div className="header-line" />
                    <p className="mt-6 text-lg text-neutral-dark leading-relaxed">
                      Neka vaš sledeći stomatološki pregled bude pozitivno iskustvo. Bez obzira da li treba da uradite čišćenje ili poboljšate osmeh, tu smo da pomognemo, bez pritiska i bez osude.
                    </p>
                    <div className="mt-10 flex flex-wrap gap-3">
                      <a
                        href="https://www.flexbook.me/web/website/1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark-blue"
                      >
                        Zakažite Online <Arrow />
                      </a>
                      <a href="tel:+17734819455" className="btn btn-black">
                        (773) 481-9455
                      </a>
                      <a href="mailto:6cornersdentalstudio@gmail.com" className="btn btn-black-border">
                        Pošaljite Email
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative min-h-[320px] md:min-h-[520px]">
                  <Image
                    src={`${CDN}/68f545b5f0a79fd0b26ca567_e41cbd44a11743313b75de78cd782af0_CTA-min.avif`}
                    alt="Zakažite posetu"
                    fill
                    className="object-cover"
                    data-ani="parallax"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="on-dark bg-neutral-darkest text-white py-20 px-6">
          <div className="mx-auto max-w-[80rem]">
            <div className="grid md:grid-cols-[1.3fr_1fr_1fr] gap-12">
              <div>
                <p className="text-xl font-bold font-heading tracking-tight">
                  Moj Flow <span className="italic font-light">Dent</span>
                </p>
                <p className="mt-4 text-sm text-white/60 max-w-xs leading-relaxed">
                  Saosećajna stomatološka nega bez osude u srcu Beograda.
                </p>
                <div className="mt-8 space-y-2 text-sm text-white/70">
                  <p className="font-semibold text-white text-xs tracking-widest uppercase">Adresa</p>
                  <p>
                    <a
                      href="https://maps.google.com/?q=Knez+Mihailova+10+Beograd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition"
                    >
                      Knez Mihailova 10, Beograd 11000
                    </a>
                  </p>
                  <p className="font-semibold text-white text-xs tracking-widest uppercase pt-4">Kontakt</p>
                  <p>
                    <a href="tel:+17734819455" className="hover:text-white transition">
                      (773) 481-9455
                    </a>
                  </p>
                  <p>
                    <a href="mailto:6cornersdentalstudio@gmail.com" className="hover:text-white transition">
                      6cornersdentalstudio@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-white text-xs tracking-widest uppercase mb-4">Istraži</p>
                <div className="space-y-3 text-sm text-white/70">
                  <a href="#naslovna" className="block hover:text-white transition">Naslovna</a>
                  <a href="#o-nama" className="block hover:text-white transition">O Nama</a>
                  <a href="#doktor" className="block hover:text-white transition">Upoznajte Doktorku</a>
                  <a href="#pacijenti" className="block hover:text-white transition">Pacijenti</a>
                  <a href="#kontakt" className="block hover:text-white transition">Kontakt</a>
                </div>
              </div>

              <div>
                <p className="font-semibold text-white text-xs tracking-widest uppercase mb-4">Usluge</p>
                <div className="space-y-3 text-sm text-white/70">
                  <a href="#usluge" className="block hover:text-white transition">Sve Usluge</a>
                  <a href="#usluge" className="block hover:text-white transition">Opšta Stomatologija</a>
                  <a href="#usluge" className="block hover:text-white transition">Estetska Stomatologija</a>
                  <a href="#usluge" className="block hover:text-white transition">Restaurativna Stomatologija</a>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/50">
              <p>&copy; {new Date().getFullYear()} Moj Flow Dent. Sva prava zadržana.</p>
              <div className="flex flex-wrap gap-5">
                <a href="#" className="hover:text-white transition">Politika Privatnosti</a>
                <a href="#" className="hover:text-white transition">Uslovi Korišćenja</a>
                <a href="#" className="hover:text-white transition">Izjava o Pristupačnosti</a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </Animations>
  );
}
