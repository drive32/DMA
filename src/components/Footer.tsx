import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-sand-900 border-t border-sand-200 dark:border-sand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-sm text-sand-600 dark:text-sand-400">
            <Link to="/contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Contact
            </Link>
            <Link to="/support" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Support
            </Link>
          </div>
          
          <div className="text-sm text-sand-600 dark:text-sand-400">
            © 2024 Decikar.ai. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}