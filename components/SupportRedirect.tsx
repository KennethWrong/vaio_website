'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SupportRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Check if we're on tw.vaio.com
    if (
      typeof window !== 'undefined' &&
      window.location.hostname === 'tw.vaio.com'
    ) {
      const hash = window.location.hash.replace('#', '');

      // Hash-based redirects for support routes
      const supportHashRedirects: Record<string, string> = {
        'support-center':
          'https://shopvaio.cyberbiz.co/pages/%E8%81%AF%E7%B5%A1%E6%88%91%E5%80%91',
        'support-warranty':
          'https://shopvaio.cyberbiz.co/pages/%E4%BF%9D%E5%9B%BA%E6%A2%9D%E6%AC%BE',
      };

      if (hash && supportHashRedirects[hash]) {
        window.location.href = supportHashRedirects[hash];
      }
    }
  }, []);

  return null;
}
