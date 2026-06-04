import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsors',
  description: 'OMC Racing sponsors and partners. Thank you to the businesses that support the Owyhee Motorcycle Club.',
};

// All logos self-hosted under /public/images/sponsors/
const diamondSponsors = [
  { name: 'Yamaha Outdoor Access Initiative / Dillon Powersports', url: 'https://www.dennisdillonpowersports.com/', logo: '/images/sponsors/yoai-dillon-powersports.png' },
];

const goldSponsors = [
  { name: "Carl's Cycle Sales", url: 'https://carlscycle.com', logo: '/images/sponsors/carls-sponsor-logo.jpeg' },
  { name: 'Dave Evans Construction', url: 'https://devansconstruction.com', logo: '/images/sponsors/dec_logo.jpeg' },
];

const bronzeSponsors = [
  { name: 'InnTeck', url: 'https://innteck-usa.com', logo: '/images/sponsors/innteck-logo.png' },
  { name: 'Idaho Muscle Cars', url: 'https://www.idahomusclecars.com/', logo: '/images/sponsors/idaho-muscle-cars.png' },
  { name: 'Seat Concepts', url: 'https://www.seatconcepts.com', logo: '/images/sponsors/seat-concepts-logo.png' },
  { name: 'Moto One KTM', url: 'https://motoonektm.com', logo: '/images/sponsors/moto-one-ktm.png' },
  { name: 'Attorneys of Idaho', url: 'https://attorneysofidaho.com', logo: '/images/sponsors/attorneysofidaho-logo.jpeg' },
  { name: 'Podium Home Inspections', url: 'https://podiuminspections.com', logo: '/images/sponsors/Podium-Home-Inspections.png' },
  { name: 'RG3', url: 'https://rg3factory.com/', logo: '/images/sponsors/rg3-factory.png' },
];

const specialSponsors = [
  { name: 'Alpha Pest Control', url: 'https://alphahomepestcontrol.com', logo: '/images/sponsors/sponsor-alpha-home-pest.png' },
];

// Shared logo tile styles
const logoTileBase = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#d8d8d8',
  borderRadius: 1,
  overflow: 'hidden',
  textDecoration: 'none',
  transition: 'opacity 0.2s, box-shadow 0.2s',
  '&:hover': { opacity: 0.85, boxShadow: '0 0 0 2px #4d8ef7' },
};

export default function SponsorsPage() {
  return (
    <>
      {/* Page header */}
      <Box sx={{ py: { xs: 6, md: 10 }, background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)', borderBottom: '2px solid', borderColor: 'primary.main' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <FavoriteIcon sx={{ color: 'primary.main', fontSize: 40 }} />
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em' }}>Proud Partners</Typography>
          </Box>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '5rem' }, mb: 3 }}>Our Sponsors</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 620, fontSize: '1.1rem' }}>
            Please support the businesses that support us. OMC Racing is made possible by these
            generous partners who help keep our historic facility running for the Idaho motorsports community.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">

          {/* Diamond Sponsors */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', display: 'block', mb: 1 }}>
              Diamond
            </Typography>
            <Typography variant="h2" sx={{ mb: 5, fontSize: { xs: '2rem', md: '3rem' } }}>
              Diamond Sponsors
            </Typography>
            <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
              {diamondSponsors.map((sponsor) => (
                <Grid key={sponsor.name} size={{ xs: 12, sm: 8, md: 6 }}>
                  <Box
                    component="a"
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={sponsor.name}
                    sx={{ ...logoTileBase, p: 4, height: 180 }}
                  >
                    <Box
                      component="img"
                      src={sponsor.logo}
                      alt={sponsor.name}
                      sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Divider sx={{ mb: 8 }} />

          {/* Gold Sponsors */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', display: 'block', mb: 1 }}>
              Gold
            </Typography>
            <Typography variant="h2" sx={{ mb: 5, fontSize: { xs: '2rem', md: '3rem' } }}>
              Gold Sponsors
            </Typography>
            <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
              {goldSponsors.map((sponsor) => (
                <Grid key={sponsor.name} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Box
                    component="a"
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={sponsor.name}
                    sx={{ ...logoTileBase, p: 3, height: 140 }}
                  >
                    <Box
                      component="img"
                      src={sponsor.logo}
                      alt={sponsor.name}
                      sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Divider sx={{ mb: 8 }} />

          {/* Bronze Sponsors */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', display: 'block', mb: 1 }}>
              Bronze
            </Typography>
            <Typography variant="h2" sx={{ mb: 5, fontSize: { xs: '2rem', md: '3rem' } }}>
              Bronze Sponsors
            </Typography>
            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
              {bronzeSponsors.map((sponsor) => (
                <Grid key={sponsor.name} size={{ xs: 6, sm: 4, md: 3 }}>
                  <Box
                    component="a"
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={sponsor.name}
                    sx={{ ...logoTileBase, p: 2, height: 110 }}
                  >
                    <Box
                      component="img"
                      src={sponsor.logo}
                      alt={sponsor.name}
                      sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Divider sx={{ mb: 8 }} />

          {/* Special Sponsor */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', display: 'block', mb: 1 }}>
              Special Sponsor
            </Typography>
            <Typography variant="h2" sx={{ mb: 5, fontSize: { xs: '2rem', md: '3rem' } }}>
              Special Partner
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
              {specialSponsors.map((sponsor) => (
                <Box
                  key={sponsor.name}
                  component="a"
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={sponsor.name}
                  sx={{ ...logoTileBase, p: 4, width: { xs: '100%', sm: 280 }, height: 140 }}
                >
                  <Box
                    component="img"
                    src={sponsor.logo}
                    alt={sponsor.name}
                    sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </Box>
              ))}
            </Box>
          </Box>

          <Divider sx={{ mb: 6 }} />

          {/* Kurt Caselli Foundation callout */}
          <Box sx={{ mb: 8, p: { xs: 3, md: 4 }, border: '1px solid rgba(255,255,255,0.08)', borderRadius: 1 }}>
            <Typography variant="h6" sx={{ fontFamily: '"Barlow Condensed", sans-serif', mb: 1 }}>
              Kurt Caselli Foundation
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Thank you to the Kurt Caselli Foundation for your continued support. We appreciate the flags,
              flagger vests, and sweeper bags!
            </Typography>
          </Box>

          {/* Become a sponsor CTA */}
          <Card sx={{ border: '1px solid rgba(255,255,255,0.12)', backgroundColor: 'rgba(77,142,247,0.1)' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" sx={{ mb: 2, fontFamily: '"Barlow Condensed", sans-serif', fontSize: '1.75rem' }}>
                Become a Sponsor
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 600 }}>
                Interested in sponsoring OMC Racing? Your support helps fund track maintenance, event
                operations, and keeps this historic facility accessible to the Idaho motorsports community.
                Contact our Public Relations/Advertising Coordinator to learn more.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  component="a"
                  href="mailto:brighteye208@gmail.com?subject=OMC Sponsorship Inquiry"
                  variant="contained"
                  color="primary"
                  startIcon={<EmailIcon />}
                >
                  Contact About Sponsorship
                </Button>
                <Button
                  component="a"
                  href="/files/OMC-Advertising-Letter-2025.pdf"
                  download
                  variant="outlined"
                  color="secondary"
                  startIcon={<DownloadIcon />}
                >
                  Download Advertising Letter
                </Button>
              </Box>
            </CardContent>
          </Card>

        </Container>
      </Box>
    </>
  );
}
