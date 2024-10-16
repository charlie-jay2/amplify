import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { src: 'https://source.unsplash.com/random/800x600?concert', alt: 'Concert' },
    { src: 'https://source.unsplash.com/random/800x600?conference', alt: 'Conference' },
    { src: 'https://source.unsplash.com/random/800x600?exhibition', alt: 'Exhibition' },
    { src: 'https://source.unsplash.com/random/800x600?festival', alt: 'Festival' },
    { src: 'https://source.unsplash.com/random/800x600?corporate-event', alt: 'Corporate Event' },
    { src: 'https://source.unsplash.com/random/800x600?gala', alt: 'Gala' },
  ];

  return (
    <motion.div
      className="page-transition container mx-auto px-4 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-12 text-center text-gradient hover-neon"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Event Gallery
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl gradient-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-bold">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;
