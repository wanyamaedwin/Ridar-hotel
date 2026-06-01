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
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

export function GalleryPageContent() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryImages = [
    { id: 1, category: 'rooms', title: 'Deluxe Suite', description: 'Spacious room with modern amenities' },
    { id: 2, category: 'rooms', title: 'Standard Room', description: 'Comfortable and cozy accommodation' },
    { id: 3, category: 'dining', title: 'Main Restaurant', description: 'Fine dining experience' },
    { id: 4, category: 'dining', title: 'Garden Cafe', description: 'Outdoor dining area' },
    { id: 5, category: 'facilities', title: 'Swimming Pool', description: 'Refreshing pool area' },
    { id: 6, category: 'facilities', title: 'Conference Hall', description: 'Modern event space' },
    { id: 7, category: 'grounds', title: 'Lush Gardens', description: 'Beautiful landscaped grounds' },
    { id: 8, category: 'grounds', title: 'Sunset View', description: 'Scenic evening ambiance' },
  ];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'dining', label: 'Dining' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'grounds', label: 'Grounds' },
  ];

  const getColorClass = (index: number) => {
    const colors = [
      'from-primary/20 to-accent/20',
      'from-secondary/20 to-primary/20',
      'from-accent/20 to-secondary/20',
      'from-primary/30 to-secondary/30',
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 bg-gradient-to-b from-charcoal/10 to-background overflow-hidden"
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
              Photo Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-charcoal/70"
            >
              Discover the beauty and elegance of Riders Hotel
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Filter Buttons */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-charcoal/5 text-charcoal hover:bg-charcoal/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={item}
                className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer h-64"
              >
                {/* Image Placeholder */}
                <div className={`w-full h-full bg-gradient-to-br ${getColorClass(index)} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Image content area */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      📷
                    </div>
                  </div>

                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-serif font-bold text-white mb-1">{image.title}</h3>
                    <p className="text-sm text-white/90">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-charcoal/70">No images in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-charcoal/5">
        <div className="container mx-auto px-4 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
            Ready to Experience It?
          </h2>
          <p className="text-lg text-charcoal/70 mb-8">
            These are just glimpses of what awaits you at Riders Hotel. Book your stay today.
          </p>
          <a
            href="https://wa.me/256700000000"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Book Your Stay
          </a>
        </div>
      </section>
    </div>
  );
}
