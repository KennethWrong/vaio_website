'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const NotFound: React.FC = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="md:text-4xl text-2xl font-bold mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-sm md:text-lg mb-6">
            Sorry, the page you are looking for does not exist.
          </p>
          <Button
            onClick={handleBackToHome}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-slate-50 hover:text-black transition duration-300"
          >
            Back to Home
          </Button>
        </div>
      </body>
    </html>
  );
};

export default NotFound;
