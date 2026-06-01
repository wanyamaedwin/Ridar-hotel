'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/hotel/SectionHeader';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend API
    const message = `Hello, my name is ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/256702290697?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 bg-gradient-to-b from-primary/10 to-background overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/5 to-transparent" />
        <div className="container mx-auto h-full flex items-center justify-center relative z-10 px-4">
          <div className="text-center max-w-2xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-4 font-serif text-charcoal"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-charcoal/70"
            >
              We&apos;re here to help. Get in touch with us anytime.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Contact Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                icon: '📍',
                title: 'Address',
                content: 'Seeta, Mukono\nUganda',
              },
              {
                icon: '📞',
                title: 'Phone',
                content: '+256 770 712 652\n+256 702 290 697',
              },
              {
                icon: '✉️',
                title: 'Email',
                content: 'reservations@ridarhotel.co.ug',
              },
            ].map((info, index) => (
              <motion.div key={index} variants={item} className="text-center">
                <div className="text-5xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">{info.title}</h3>
                <p className="text-charcoal/70 whitespace-pre-line text-sm">{info.content}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-charcoal/5 p-8 rounded-lg max-w-2xl mx-auto mb-16"
          >
            <h3 className="text-2xl font-serif font-bold text-charcoal mb-6 text-center">
              Operating Hours
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-charcoal mb-3">Front Desk</h4>
                <p className="text-charcoal/70">24 hours daily</p>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal mb-3">Restaurant</h4>
                <p className="text-charcoal/70 text-sm">
                  Breakfast: 6:30 AM - 10:00 AM<br/>
                  Lunch: 12:00 PM - 3:00 PM<br/>
                  Dinner: 6:00 PM - 10:00 PM
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-charcoal/5">
        <div className="container mx-auto px-4 max-w-2xl">
          <SectionHeader
            title="Send us a Message"
            subtitle="We&apos;ll get back to you as soon as possible"
            light={false}
          />

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-8 mt-12"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-charcoal/20 rounded-lg focus:outline-none focus:border-primary bg-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-charcoal/20 rounded-lg focus:outline-none focus:border-primary bg-white"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-charcoal/20 rounded-lg focus:outline-none focus:border-primary bg-white"
                  placeholder="+256..."
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-charcoal mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-charcoal/20 rounded-lg focus:outline-none focus:border-primary bg-white"
                >
                  <option value="">Select a subject</option>
                  <option value="booking">Room Booking</option>
                  <option value="dining">Dining Inquiry</option>
                  <option value="events">Events & Conferences</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-charcoal/20 rounded-lg focus:outline-none focus:border-primary bg-white resize-none"
                placeholder="Tell us how we can help..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Send via WhatsApp
            </button>

            <p className="text-center text-sm text-charcoal/60 mt-4">
              Your message will open WhatsApp for secure communication
            </p>
          </motion.form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal text-center mb-12">
            Our Location
          </h2>
          <div className="aspect-video bg-gradient-to-br from-charcoal/10 to-charcoal/5 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8185461784744!2d33.49833962346809!3d0.35919896378890005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x187d92e47a2a2a2d%3A0x1234567890abcdef!2sSeeta%2C%20Mukono!5e0!3m2!1sen!2sug!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
