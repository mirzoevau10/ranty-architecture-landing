"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Menu,
  Play,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Homes", href: "#homes" },
  { label: "About us", href: "#about" },
  { label: "Cases", href: "#cases" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function BrandMark() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Ranty home">
      <span className="relative block h-[21px] w-[15px]" aria-hidden="true">
        <span className="absolute left-0 top-[5px] h-[11px] w-[4px] skew-y-[-28deg] bg-[#382820]" />
        <span className="absolute left-[6px] top-[1px] h-[19px] w-[7px] skew-y-[-28deg] bg-[#382820]" />
      </span>
      <span className="text-[17px] font-medium tracking-[-0.04em]">RANTY</span>
    </a>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="hero-header flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8 lg:px-[5.5%]">
      <BrandMark />

      <nav className="hidden items-center gap-10 text-[12px] lg:flex" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a
            className="transition-opacity hover:opacity-55"
            href={link.href}
            key={link.label}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="hidden items-center gap-6 text-[11px] sm:flex">
        <button className="border-r border-black/15 pr-5 transition-opacity hover:opacity-55" aria-label="Current language: English">
          ENG
        </button>
        <a
          href="mailto:hello@ranty.studio"
          className="group inline-flex items-center gap-2 border-b border-current pb-1 transition-colors hover:text-[#876b57]"
        >
          CONTACT US <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <button
        className="relative z-30 rounded-full border border-black/20 p-2 lg:hidden"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute inset-x-4 top-[72px] z-20 rounded-3xl border border-white/50 bg-[#f5f1eb]/95 p-6 shadow-xl backdrop-blur-xl sm:inset-x-8"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg"
                >
                  {link.label}
                </a>
              ))}
              <a className="mt-2 border-t border-black/10 pt-5 text-sm" href="mailto:hello@ranty.studio">
                CONTACT US <ArrowUpRight className="ml-1 inline h-4 w-4" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function RoomTourModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-black/55 p-5 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="presentation"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.24 }}
        className="relative w-full max-w-2xl overflow-hidden rounded-[28px] bg-[#f5f1eb] p-3 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="tour-title"
      >
        <button
          className="absolute right-6 top-6 z-10 rounded-full bg-white/85 p-2"
          onClick={onClose}
          aria-label="Close room tour"
        >
          <X size={18} />
        </button>
        <div className="room-image flex aspect-[16/10] items-end rounded-[21px] bg-cover p-7 sm:p-10">
          <div className="rounded-2xl border border-white/30 bg-black/30 p-5 text-white backdrop-blur-md">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">Room tour · 01:24</span>
            <h2 id="tour-title" className="mt-2 font-display text-2xl sm:text-3xl">A quieter kind of luxury</h2>
            <p className="mt-1 text-sm text-white/75">Explore the warmth of natural materials.</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ArchitectureCard({ onPlay }: { onPlay: () => void }) {
  return (
    <motion.div
      variants={fadeUp}
      className="house-card relative mx-auto w-full max-w-[590px] rounded-[32px] bg-[#fbfaf8] p-6 pb-0 sm:rounded-[40px] sm:p-8 sm:pb-0"
    >
      <div className="relative z-10 flex flex-wrap gap-1.5">
        {["Interior", "Design", "3D"].map((tag, index) => (
          <span
            key={tag}
            className={`rounded-full border px-3 py-1.5 text-[9px] ${
              index === 2
                ? "border-[#382820] bg-[#382820] text-white"
                : "border-[#d8d1ca] bg-white text-[#382820]"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="relative z-10 mt-6 flex min-h-[108px] justify-between gap-3 sm:mt-7">
        <div>
          <h2 className="max-w-[270px] text-[23px] leading-[1.08] tracking-[-0.05em] sm:text-[27px]">
            Unique design &amp;
            <br /> ergonomics
          </h2>
          <p className="mt-3 text-[11px] text-[#887d75]">From blueprints to renders.</p>
        </div>
        <button
          onClick={onPlay}
          className="group relative mr-1 flex h-[126px] w-[104px] shrink-0 flex-col overflow-visible rounded-[15px] bg-[#eae6e1] p-3 transition-transform hover:-translate-y-1 sm:mr-2 sm:h-[142px] sm:w-[116px]"
          aria-label="Play the room tour"
        >
          <span className="w-full text-[9px] font-semibold tracking-wide">ROOMTOUR</span>
          <span className="room-image mt-3 flex-1 rounded-[9px] bg-cover bg-center transition-transform group-hover:scale-[1.02]" />
          <span className="absolute -left-6 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-[#9b7e6a] text-white shadow-lg transition-transform group-hover:scale-110">
            <Play size={14} fill="currentColor" />
          </span>
        </button>
      </div>

      <div className="house-image relative -mx-6 mt-1 h-[245px] overflow-hidden rounded-b-[32px] bg-cover sm:-mx-8 sm:h-[310px] sm:rounded-b-[40px]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        <span className="hotspot absolute left-[17%] top-[36%] h-2 w-2 rounded-full bg-white" />
        <span className="hotspot absolute left-[48%] top-[24%] h-2 w-2 rounded-full bg-white" />
        <span className="hotspot absolute left-[72%] top-[52%] h-2 w-2 rounded-full bg-white" />
        <span className="hotspot absolute left-[83%] top-[82%] h-2 w-2 rounded-full bg-white" />
        <span className="absolute bottom-4 right-5 text-[9px] uppercase tracking-[0.17em] text-white/85">
          Residence No. 08
        </span>
      </div>
    </motion.div>
  );
}

function HeroSection() {
  const [tourOpen, setTourOpen] = useState(false);

  return (
    <section className="hero-scene" id="top">
      <SiteHeader />
      <div className="hero-content mx-auto grid max-w-[1250px] grid-cols-1 items-start gap-10 px-6 pb-12 pt-8 sm:px-10 sm:pt-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:px-12 lg:pt-[58px]">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.12 }}
          className="relative z-10 pt-2 sm:pt-5 lg:pt-5"
        >
          <motion.p variants={fadeUp} className="mb-3 pl-1 text-[10px] uppercase tracking-[0.25em] text-[#49382e]/75 lg:hidden">
            Architecture for living
          </motion.p>
          <motion.h1 variants={fadeUp} className="headline max-w-[530px] text-[clamp(3.25rem,8vw,7.3rem)] leading-[0.78] text-[#382820]">
            <span className="ml-[0.56em] block font-body text-[0.72em] font-light tracking-[-0.08em]">THE</span>
            <span className="mt-[0.1em] block">PERFECT</span>
            <span className="ml-[0.27em] mt-[0.04em] block font-body text-[0.84em] font-light tracking-[-0.085em]">
              HOME<sup className="ml-1 align-top font-body text-[0.22em] font-medium tracking-normal">®</sup>
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 pl-2 text-[14px] tracking-[-0.02em] sm:mt-7 sm:text-[15px]">
            / We craft custom homes /
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-7 inline-flex min-w-[112px] items-center justify-center rounded-full bg-[#382820] px-7 py-3 text-[10px] font-medium tracking-[0.08em] text-white transition-colors hover:bg-[#624b3d] sm:mt-8"
          >
            START
          </motion.a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.16, delayChildren: 0.3 }}
          className="relative z-10 lg:pt-0"
          id="homes"
        >
          <ArchitectureCard onPlay={() => setTourOpen(true)} />
        </motion.div>
      </div>

      <div className="field-strip absolute inset-x-0 bottom-0 h-[17%] sm:h-[19%]" />
      <AnimatePresence>
        {tourOpen && <RoomTourModal onClose={() => setTourOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}

function SocialProof() {
  return (
    <motion.div
      variants={fadeUp}
      className="flex items-center gap-4 sm:gap-5"
      id="about"
    >
      <div className="flex -space-x-3">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&q=80"
          alt="Ranty client"
          className="h-10 w-10 rounded-full border-2 border-[#5b5545] object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&q=80"
          alt="Ranty client"
          className="h-10 w-10 rounded-full border-2 border-[#5b5545] object-cover"
        />
        <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#5b5545] bg-[#c9b7a5] text-[9px] text-[#382820]">
          +12
        </span>
      </div>
      <div>
        <p className="font-display text-[28px] italic leading-none tracking-[-0.07em] sm:text-[34px]">12m+</p>
        <p className="mt-1 text-[9px] uppercase tracking-[0.13em] text-white/70">Happy customers</p>
      </div>
    </motion.div>
  );
}

function LowerSection() {
  return (
    <section className="relative -mt-px min-h-[315px] bg-[#35362e] text-white" id="services">
      <div className="absolute inset-0 opacity-30">
        <div className="lower-background-image" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#37362e]/75 via-[#37362e]/90 to-[#37362e]/95" />
      <div className="relative mx-auto grid max-w-[1250px] gap-9 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1.05fr_0.7fr_1fr] lg:items-center lg:gap-12 lg:px-12 lg:py-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.12 }}
          variants={fadeUp}
          className="relative min-h-[205px] overflow-hidden rounded-tr-[38px] rounded-bl-[38px] bg-[#9b7e6a] p-6 sm:min-h-[220px] sm:p-8"
        >
          <div className="material-image absolute inset-0 opacity-55 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#9b7e6a] via-[#9b7e6a]/75 to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <p className="max-w-[170px] text-[19px] leading-[1.13] tracking-[-0.04em] sm:text-[22px]">
              We use best
              <br /> materials!
            </p>
            <a href="#cases" className="group inline-flex w-fit items-center gap-2 text-[10px] uppercase tracking-[0.12em]">
              Explore materials <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </a>
          </div>
          <div className="absolute bottom-[-18px] right-[-7px] h-[190px] w-[48%] rounded-tl-[70px] bg-[linear-gradient(135deg,#e6ddd0_0%,#b5aaa0_35%,#756d65_36%,#d7d0c7_48%,#8d8175_50%,#c6b9a9_71%,#70675c_72%,#e2d6c6_100%)] opacity-85 shadow-xl sm:right-2" />
          <div className="absolute bottom-0 right-[31%] h-[146px] w-[2px] rotate-[23deg] bg-white/45" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          <SocialProof />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          id="cases"
          className="flex items-end justify-between gap-4"
        >
          <h2 className="max-w-[390px] text-[27px] font-light leading-[1.02] tracking-[-0.055em] sm:text-[35px]">
            WE CAN COMBINE
            <br /> NATURE &amp; HOME
            <br /> COMFORT
          </h2>
          <a href="mailto:hello@ranty.studio" aria-label="Contact Ranty" className="mb-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/35 transition-colors hover:bg-white hover:text-[#382820]">
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
      <div className="relative mx-6 border-t border-white/15 py-4 text-[9px] uppercase tracking-[0.14em] text-white/45 sm:mx-10 lg:mx-[5.5%]">
        <div className="flex justify-between gap-3">
          <span>© RANTY STUDIO 2026</span>
          <span>Made for living, made to last.</span>
        </div>
      </div>
    </section>
  );
}

export function LandingPage() {
  return (
    <main className="page-shell">
      <HeroSection />
      <LowerSection />
    </main>
  );
}
