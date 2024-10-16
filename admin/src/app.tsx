import React, { useState, useEffect } from 'react';
import { Calendar, Music, Users, ChevronRight, Menu, X } from 'lucide-react';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = ['Home', 'About', 'Services', 'Gallery', 'Contact'];

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'About':
        return <About />;
      case 'Services':
        return <Services />;
      case 'Gallery':
        return <Gallery />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-aileron">
      <motion.header
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-effect' : 'py-6'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      >
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <motion.div
              className="text-3xl font-bold text-gradient hover-neon"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('Home')}
              style={{ cursor: 'pointer' }}
            >
              amplify
            </motion.div>
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => setCurrentPage(item)}
                  className={`hover:text-primary-400 transition-colors duration-300 ${
                    currentPage === item ? 'text-primary-400 font-semibold' : ''
                  } hover-neon`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
            <div className="md:hidden">
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-100 hover:text-primary-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 glass-effect md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex flex-col items-center justify-center h-full space-y-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => {
                    setCurrentPage(item);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-2xl font-semibold hover:text-primary-400 transition-colors duration-300 ${
                    currentPage === item ? 'text-primary-400' : ''
                  } hover-neon`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24 page-transition">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-gray-800 py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; 2024 amplify. all rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <motion.a
                key={social}
                href={`https://www.${social.toLowerCase()}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300 hover-neon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
