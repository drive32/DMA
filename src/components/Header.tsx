import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { motion } from 'framer-motion';

export function Header() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Skip authentication and go directly to decision page
    navigate('/decision');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-sand-900/80 backdrop-blur-md border-b border-sand-200 dark:border-sand-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <motion.span 
              className="text-2xl font-display bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Decikar.ai
            </motion.span>
          </Link>

          <div className="flex items-center gap-6">
            <Link to="/pricing" className="text-sand-800 dark:text-sand-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Pricing
            </Link>
            
            <div className="flex items-center gap-3">
              <ThemeToggle />
              
              <button
                onClick={handleSignIn}
                className="px-4 py-2 text-sand-800 dark:text-sand-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Sign In
              </button>
              
              <Link
                to="/decision"
                className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}