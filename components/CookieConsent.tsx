'use client';

import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import NextLink from 'next/link';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if no preference has been recorded
    if (!localStorage.getItem('cookie-consent')) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
    // Signal GoogleAnalytics component to load
    window.dispatchEvent(new Event('cookie-consent-accepted'));
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <Box
      role="dialog"
      aria-label="Cookie consent"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: '#1A1A1A',
        borderTop: '2px solid',
        borderColor: 'primary.main',
        px: { xs: 2, md: 4 },
        py: { xs: 2, md: 2.5 },
      }}
    >
      <Box
        sx={{
          maxWidth: 'lg',
          mx: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' },
          gap: 2,
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 680 }}>
          We use cookies to understand how visitors use our site and to improve your experience.
          By clicking &ldquo;Accept&rdquo;, you consent to analytics cookies.{' '}
          <Link
            component={NextLink}
            href="/privacy"
            underline="always"
            sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
          >
            Privacy Policy
          </Link>
        </Typography>
        <Box sx={{ display: 'flex', gap: 1.5, flexShrink: 0 }}>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={decline}
            sx={{ minWidth: 90 }}
          >
            Decline
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={accept}
            sx={{ minWidth: 90 }}
          >
            Accept
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
