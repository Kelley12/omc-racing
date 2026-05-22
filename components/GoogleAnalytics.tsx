'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const GA_ID = 'G-C46JP0H51C';

export default function GoogleAnalytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    // Check initial consent
    setConsented(localStorage.getItem('cookie-consent') === 'accepted');

    // Listen for consent granted later in the session (from CookieConsent banner)
    const handler = () => setConsented(true);
    window.addEventListener('cookie-consent-accepted', handler);
    return () => window.removeEventListener('cookie-consent-accepted', handler);
  }, []);

  if (!consented) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
