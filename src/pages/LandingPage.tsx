import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Brain, Users, BarChart2, Zap } from 'lucide-react';

export function LandingPage() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations based on your specific decision criteria.'
    },
    {
      icon: Users,
      title: 'Collaborative Decision Making',
      description: 'Involve your team and stakeholders in the decision-making process.'
    },
    {
      icon: BarChart2,
      title: 'Advanced Analytics',
      description: 'Visualize and analyze decision factors with powerful analytics tools.'
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Stay informed with real-time updates and notifications on decision progress.'
    }
  ];

  return (
    <div className="min-h-screen bg-sand-50 dark:bg-sand-900">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl sm:text-6xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"
            >
              Make Better Decisions
              <br />
              with AI
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-xl text-sand-600 dark:text-sand-300 max-w-3xl mx-auto"
            >
              Decikar.ai combines artificial intelligence with collaborative insights to help you make smarter, data-driven decisions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/signup"
                className="px-8 py-3 text-lg font-medium rounded-lg text-white bg-gradient-to-r from-sand-600 to-pink-600 hover:from-sand-700 hover:to-pink-700 transition-colors"
              >
                Try Now for Free
              </Link>
              <Link
                to="/signup"
                className="px-8 py-3 text-lg font-medium rounded-lg text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                Sign Up
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-sand-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-sand-50 dark:bg-sand-800 hover:shadow-lg transition-shadow"
                >
                  <feature.icon className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-sand-900 dark:text-sand-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sand-600 dark:text-sand-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-sand-900 dark:text-sand-100 mb-12">
              How It Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Input Your Decision', description: 'Describe your decision and set your criteria.' },
                { step: '02', title: 'Get AI Analysis', description: 'Receive AI-powered recommendations and insights.' },
                { step: '03', title: 'Collaborate & Decide', description: 'Share with your team and make informed decisions.' }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="text-4xl font-display font-bold text-purple-600/20 dark:text-purple-400/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-sand-900 dark:text-sand-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sand-600 dark:text-sand-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}