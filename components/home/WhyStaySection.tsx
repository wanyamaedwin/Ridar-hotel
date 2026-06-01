'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function WhyStaySection() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Wellness & Spa Panel */}
      <section id="wellness" className="py-28 bg-white" aria-label="Wellness and Spa">
        <div className="max-w-[1440px] mx-auto px-4 md:px-9">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left side: Text details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <span className="text-[#B09B7C] text-[10.5px] uppercase tracking-[0.3em] font-sans font-semibold mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B09B7C]" />
                Spa &amp; Wellness
              </span>
              <h2 className="font-serif text-[38px] font-light text-[#1A1A1A] leading-tight mb-6">
                Rejuvenate Your Mind &amp; Body
              </h2>
              <div className="w-12 h-[1px] bg-[#B09B7C]/40 mb-6" />

              <p className="text-[#4A4A4A] text-[14.5px] leading-[1.65] mb-8 font-light">
                Indulge in relaxation at our premium spa. From deep tissue massages to facial treatments, our professional therapists are here to restore your balance and help you unwind after a productive day of business or travel.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8 text-[12px] text-medium-gray font-sans font-light">
                <span className="flex items-center gap-2 border border-[#EDEAE5] p-3 bg-[#FAF9F7] rounded-none">Massage Therapy</span>
                <span className="flex items-center gap-2 border border-[#EDEAE5] p-3 bg-[#FAF9F7] rounded-none">Aromatherapy</span>
                <span className="flex items-center gap-2 border border-[#EDEAE5] p-3 bg-[#FAF9F7] rounded-none">Facial Treatments</span>
                <span className="flex items-center gap-2 border border-[#EDEAE5] p-3 bg-[#FAF9F7] rounded-none">Relaxation Lounge</span>
              </div>

              <Link
                href="/contact"
                className="bg-[#1A1A1A] text-white text-[11.5px] uppercase tracking-[0.18em] font-semibold px-8 py-3.5 rounded-none hover:bg-[#B09B7C] transition-all duration-300 self-start flex items-center gap-2 shadow-none cursor-pointer"
              >
                Book Spa Session <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Right side: Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7 relative h-[350px] sm:h-[450px] lg:h-[500px] border border-[#EDEAE5] overflow-hidden group rounded-none shadow-none"
            >
              <Image
                src="/assets/spa2.jpg"
                alt="Spa massage treatment room at Riders Hotel"
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Weddings & Celebrations Panel (Alternating Layout) */}
      <section id="weddings" className="py-28 bg-[#F6F5F2]" aria-label="Weddings and celebrations">
        <div className="max-w-[1440px] mx-auto px-4 md:px-9">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left side: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 order-2 lg:order-1 relative h-[350px] sm:h-[450px] lg:h-[500px] border border-[#EDEAE5] overflow-hidden group rounded-none shadow-none"
            >
              <Image
                src="/assets/riders-exterior.webp"
                alt="Outdoor wedding aisle setup"
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300" />
            </motion.div>

            {/* Right side: Text details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center"
            >
              <span className="text-[#B09B7C] text-[10.5px] uppercase tracking-[0.3em] font-sans font-semibold mb-2 block">
                Social Moments
              </span>
              <h2 className="font-serif text-[38px] font-light text-[#1A1A1A] leading-tight mb-6">
                Weddings &amp; Celebrations
              </h2>
              <div className="w-12 h-[1px] bg-[#B09B7C]/40 mb-6" />

              <p className="text-[#4A4A4A] text-[14.5px] leading-[1.65] mb-8 font-light">
                Say your vows in a beautifully curated garden or host a spectacular indoor reception. Our professional wedding coordinators, culinary team, and banquet planners take care of every detail to craft an unforgettable celebration.
              </p>

              <Link
                href="/events"
                className="bg-[#1A1A1A] text-white text-[11.5px] uppercase tracking-[0.18em] font-semibold px-8 py-3.5 rounded-none hover:bg-[#B09B7C] transition-all duration-300 self-start flex items-center gap-2 shadow-none cursor-pointer"
              >
                Inquire About Weddings <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Cultural Heritage Panel */}
      <section className="py-28 bg-white" aria-label="Cultural Heritage">
        <div className="max-w-[1440px] mx-auto px-4 md:px-9">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left side: Text details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <span className="text-[#B09B7C] text-[10.5px] uppercase tracking-[0.3em] font-sans font-semibold mb-2 block">
                Art &amp; Legacy
              </span>
              <h2 className="font-serif text-[38px] font-light text-[#1A1A1A] leading-tight mb-6">
                African Art &amp; Heritage
              </h2>
              <div className="w-12 h-[1px] bg-[#B09B7C]/40 mb-6" />

              <p className="text-[#4A4A4A] text-[14.5px] leading-[1.65] mb-8 font-light">
                Riders Hotel celebrates local craftsmanship and cultural history. Walk through our spaces to enjoy beautiful, locally sourced bronze sculptures, traditional artifacts, and a unique architectural style inspired by Ugandan history.
              </p>

              <Link
                href="/gallery"
                className="bg-[#1A1A1A] text-white text-[11.5px] uppercase tracking-[0.18em] font-semibold px-8 py-3.5 rounded-none hover:bg-[#B09B7C] transition-all duration-300 self-start flex items-center gap-2 shadow-none cursor-pointer"
              >
                View Art Showcase <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Right side: Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7 relative h-[350px] sm:h-[450px] lg:h-[500px] border border-[#EDEAE5] overflow-hidden group rounded-none shadow-none"
            >
              <Image
                src="/assets/Ridar-Hotel-3.jpg"
                alt="Traditional African bronze sculpture decoration at Riders Hotel"
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
