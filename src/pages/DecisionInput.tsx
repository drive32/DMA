import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ThumbsUp, ThumbsDown, Loader, RefreshCw } from 'lucide-react';
import { DecisionOutput } from '../components/Decision/DecisionOutput';
import { EmotionalImpact } from '../components/Decision/EmotionalImpact';

export function DecisionInput() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [decision, setDecision] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    // Simulated API call
    setTimeout(() => {
      setDecision({
        recommendation: "Based on the analysis, you should proceed with the decision.",
        pros: [
          "Increased potential for growth",
          "Aligns with long-term goals",
          "Minimal financial risk"
        ],
        cons: [
          "Requires time investment",
          "Initial learning curve",
          "Short-term uncertainty"
        ],
        emotion: {
          type: "excited",
          description: "This decision shows great potential for positive outcomes"
        }
      });
      setIsLoading(false);
    }, 2000);
  };

  const handleReset = () => {
    setQuery('');
    setDecision(null);
  };

  return (
    <div className="min-h-screen bg-sand-50 dark:bg-sand-900">
      <Header />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-sand-800 rounded-xl shadow-lg p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <label 
                htmlFor="decision-query" 
                className="block text-xl font-semibold text-sand-900 dark:text-sand-100"
              >
                What decision do you need help with?
              </label>
              <textarea
                id="decision-query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full h-32 px-4 py-3 rounded-lg border border-sand-200 dark:border-sand-700 bg-white dark:bg-sand-900 text-sand-900 dark:text-sand-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Describe your decision..."
              />
              <div className="flex justify-end gap-4">
                {decision && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2 rounded-lg text-sand-600 dark:text-sand-400 hover:text-sand-900 dark:hover:text-sand-100 transition-colors flex items-center gap-2"
                  >
                    <RefreshCw className="w-5 h-5" />
                    New Decision
                  </button>
                )}
                <button
                  type="submit"
                  disabled={!query.trim() || isLoading}
                  className="px-6 py-2 rounded-lg text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Make Decision'
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Output Section */}
          <AnimatePresence mode="wait">
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center py-12"
              >
                <Loader className="w-8 h-8 animate-spin text-purple-600" />
              </motion.div>
            )}

            {decision && !isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <DecisionOutput decision={decision} />
                <EmotionalImpact emotion={decision.emotion} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
}