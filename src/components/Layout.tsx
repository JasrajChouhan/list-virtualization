import { useState } from 'react';
import { Hero } from './Hero';
import { VirtualMatrix } from './VirtualMatrix/VirtualMatrix';
import { Container } from './ui/Container';

export function Layout() {
  const [showMatrix, setShowMatrix] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors dark:bg-gray-900 dark:text-white">
      {!showMatrix ? (
        <Hero onGetStarted={() => setShowMatrix(true)} />
      ) : (
        <Container className="py-16">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Virtual Matrix Demo</h2>
            <button
              onClick={() => setShowMatrix(false)}
              className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              Back to Home
            </button>
          </div>
          <VirtualMatrix />
        </Container>
      )}
    </div>
  );
}
