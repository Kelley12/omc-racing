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
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsors',
  description: 'OMC Racing sponsors and partners. Thank you to the businesses that support the Owyhee Motorcycle Club.',
};

// All logos self-hosted under /public/images/sponsors/ — won't break when WordPress is shut down
const titleSponsors = [
  { name: "Carl's Cycle", url: 'https://carlscycle.com', logo: '/images/sponsors/carls-sponsor-logo.jpeg' },
  { name: 'Fly Racing', url: 'https://flyracing.com', logo: '/images/sponsors/fly-racing-logo.png' },
  { name: 'FirePower Parts', url: 'https://firepowerparts.com', logo: '/images/sponsors/FirePower-ComboMark-Color.png' },
  { name: 'Shinko Tire USA', url: 'https://shinkotireusa.com', logo: '/images/sponsors/ShinkoLogo_Fullcolor_Black_2019-01.png' },
];

const specialSponsors = [
  { name: 'Alpha Home Pest Control', url: 'https://alphahomepestcontrol.com', logo: '/images/sponsors/sponsor-alpha-home-pest.png' },
];

const supportingSponsors = [
  { name: 'Project Filter', url: 'https://projectfilter.org', logo: '/images/sponsors/project-filter.png' },
  { name: 'Tuf Flooring', url: 'https://tufflooring.com', logo: '/images/sponsors/tuf.png' },
  { name: 'Devans Construction', url: 'https://devansconstruction.com', logo: '/images/sponsors/dec_logo.jpeg' },
  { name: 'Moto One KTM', url: 'https://motoonektm.com', logo: '/images/sponsors/moto-one-ktm.png' },
  { name: 'PCI Race Radios', url: 'https://www.pciraceradios.com', logo: '/images/sponsors/pci-radios-logo.png' },
  { name: 'Seat Concepts', url: 'https://www.seatconcepts.com', logo: '/images/sponsors/seat-concepts-logo.png' },
  { name: 'Rekluse', url: 'https://rekluse.com', logo: '/images/sponsors/rekluse.png' },
  { name: 'Snake River Yamaha', url: 'https://www.snakeriveryamaha.com', logo: '/images/sponsors/sponsor-snake-river.png' },
  { name: 'Nielson State Farm', url: 'https://208neighbor.com', logo: '/images/sponsors/sponsor-nielson-state-farm.png' },
  { name: 'Emerald West Dental', url: 'https://emeraldwest.net', logo: '/images/sponsors/emerald-west-dental.png' },
  { name: 'Kaveman Trailers', url: 'https://kavemantrailers.com', logo: '/images/sponsors/kaveman-trailers-logo.jpeg' },
  { name: 'Fastway Pro Moto Billet', url: 'https://fastway.zone', logo: '/images/sponsors/fastway-logo.png' },
  { name: 'Grizzly Motorsports', url: 'https://grizzlysportsusa.com', logo: '/images/sponsors/grizzly-logo.png' },
  { name: 'Attorneys of Idaho', url: 'https://attorneysofidaho.com', logo: '/images/sponsors/attorneysofidaho-logo.jpeg' },
  { name: 'Fast Under Car', url: 'http://fastundercar.com', logo: '/images/sponsors/fast-undercar-logo.png' },
  { name: 'Fast Blast and Coat', url: 'http://fastblastandcoat.com', logo: '/images/sponsors/fast-bc-logo.jpg' },
  { name: 'innTeck', url: 'https://innteck-usa.com', logo: '/images/sponsors/innteck-logo.png' },
  { name: 'Podium Home Inspections', url: 'https://podiuminspections.com', logo: '/images/sponsors/Podium-Home-Inspections.png' },
  { name: 'Dennis Dillon Canyon Honda', url: 'https://www.dennisdilloncanyonhonda.com', logo: '/images/sponsors/dennis-dillon-canyon-honda.jpeg' },
  { name: 'Direct Orthopedic Care', url: 'http://www.boisedoc.com', logo: '/images/sponsors/sponsor-doc-300x146.png' },
  { name: 'The Good Life Group', url: 'http://www.thegoodlifegroupidaho.com', logo: '/images/sponsors/the-good-life-group-170x300.png' },
  { name: 'Driven Automotive', url: 'https://drivenautomotivemeridian.com', logo: '/images/sponsors/sponsor-driven-automotive.jpg' },
  { name: 'CORE Engineering', url: '#', logo: '/images/sponsors/sponsor-core-engineering.jpg' },
  { name: 'Value Homes of Idaho', url: '#', logo: '/images/sponsors/sponsor-value-homes-of-idaho.png' },
  { name: 'Homes of Idaho', url: 'http://homesofidaho.com', logo: '/images/sponsors/sponsor-homes-of-idaho.png' },
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

          {/* Title Sponsors */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', display: 'block', mb: 1 }}>
              Title Sponsors
            </Typography>
            <Typography variant="h2" sx={{ mb: 5, fontSize: { xs: '2rem', md: '3rem' } }}>
              Top-Level Partners
            </Typography>
            <Grid container spacing={3}>
              {titleSponsors.map((sponsor) => (
                <Grid key={sponsor.name} size={{ xs: 6, sm: 6, md: 3 }}>
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

          {/* Special Sponsor */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', display: 'block', mb: 1 }}>
              Special Sponsor
            </Typography>
            <Typography variant="h2" sx={{ mb: 5, fontSize: { xs: '2rem', md: '3rem' } }}>
              Featured Partner
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
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

          <Divider sx={{ mb: 8 }} />

          {/* Supporting Sponsors */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', display: 'block', mb: 1 }}>
              Supporting Sponsors
            </Typography>
            <Typography variant="h2" sx={{ mb: 5, fontSize: { xs: '2rem', md: '3rem' } }}>
              Community Partners
            </Typography>
            <Grid container spacing={2}>
              {supportingSponsors.map((sponsor) => (
                <Grid key={sponsor.name} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                  <Box
                    component={sponsor.url === '#' ? 'div' : 'a'}
                    {...(sponsor.url !== '#' ? { href: sponsor.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
                    aria-label={sponsor.name}
                    sx={{ ...logoTileBase, p: 2, height: 90, ...(sponsor.url === '#' && { cursor: 'default', '&:hover': {} }) }}
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

          <Divider sx={{ mb: 6 }} />

          {/* Kurt Caselli Foundation callout */}
          <Box sx={{ mb: 8, p: { xs: 3, md: 4 }, border: '1px solid rgba(255,255,255,0.08)', borderRadius: 1 }}>
            <Typography variant="h6" sx={{ fontFamily: '"Barlow Condensed", sans-serif', mb: 1 }}>
              Kurt Caselli Foundation
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Thank you to the Kurt Caselli Foundation for your continued support — we appreciate the flags,
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
              <Button
                component="a"
                href="mailto:brighteye208@gmail.com?subject=OMC Sponsorship Inquiry"
                variant="contained"
                color="primary"
                startIcon={<EmailIcon />}
              >
                Contact About Sponsorship
              </Button>
            </CardContent>
          </Card>

        </Container>
      </Box>
    </>
  );
}
