import type { Metadata } from 'next';
import '@fontsource/barlow-condensed/400.css';
import '@fontsource/barlow-condensed/600.css';
import '@fontsource/barlow-condensed/700.css';
import '@fontsource/barlow-condensed/800.css';
import './globals.css';
import ThemeRegistry from '@/components/ThemeRegistry';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Box from '@mui/material/Box';

export const metadata: Metadata = {
  title: {
    default: 'OMC Racing | Owyhee Motorcycle Club',
    template: '%s | OMC Racing',
  },
  description:
    'Owyhee Motorcycle Club — AMA-chartered motocross and trials club established in 1940. Located in Southwest Idaho near Boise.',
  keywords: ['motocross', 'trials', 'motorcycle club', 'Boise Idaho', 'OMC', 'Owyhee'],
  openGraph: {
    siteName: 'OMC Racing',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box component="main" sx={{ flex: 1 }}>
              {children}
            </Box>
            <Footer />
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
