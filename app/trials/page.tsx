import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import NatureIcon from '@mui/icons-material/Nature';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trials',
  description: 'OMC trials riding area with natural rocky terrain and challenging obstacles, endorsed by 6x National Champion Ryan Young and pro rider Taylor Robert.',
};

// Sponsor data — logos are self-hosted to survive the WordPress migration
const primarySponsors = [
  { name: 'Rock Placing Co.', logo: '/images/trials-sponsors/Rock-Placing-Co.png' },
  { name: 'Beta', logo: '/images/trials-sponsors/beta-logo-1024x979.png' },
  { name: 'ISMI', logo: '/images/trials-sponsors/ISMI-Logo.png' },
  { name: 'Rekluse', logo: '/images/trials-sponsors/rekluse.jpeg' },
];

const additionalSponsors = [
  { name: 'Sawtooth PT', logo: '/images/trials-sponsors/sawtooth-pt.png' },
  { name: 'Doc', logo: '/images/trials-sponsors/doc.jpeg' },
  { name: "Carl's Cycle", logo: '/images/trials-sponsors/carlscycle-logo.png' },
  { name: 'Snake River', logo: '/images/trials-sponsors/snake-river.png' },
  { name: 'Les Schwab', logo: '/images/trials-sponsors/les-schwab.png' },
];

const areaFeatures = [
  'Natural rocky terrain with challenging obstacles',
  'Located just left of the gate, below the arenacross track',
  'Suitable for all skill levels, from beginner to expert',
  'Practice area open year-round for members',
  'Club-organized trials events',
];

export default function TrialsPage() {
  return (
    <>
      {/* Page header */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
          borderBottom: '2px solid',
          borderColor: 'primary.main',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 20% 50%, rgba(77,142,247,0.14) 0%, transparent 60%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <NatureIcon sx={{ color: 'primary.main', fontSize: 40 }} />
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em' }}>Discipline</Typography>
          </Box>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '5rem' }, mb: 3 }}>Trials</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 680, mb: 4, fontSize: '1.1rem', lineHeight: 1.7 }}>
            OMC is pleased to announce a trials riding practice area! Located just left of the gate,
            below the arenacross track, with challenging obstacles and features for skill development
            in trials riding.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button component={Link} href="/calendar" variant="contained" color="primary" endIcon={<ArrowForwardIcon />} size="large">
              View Events
            </Button>
            <Button component="a" href="https://app.iraceready.com" target="_blank" rel="noopener noreferrer" variant="outlined" color="secondary" endIcon={<OpenInNewIcon />} size="large">
              Register on iRaceReady
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Area details */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: 'flex-start' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em' }}>The Riding Area</Typography>
              <Typography variant="h2" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.75rem' } }}>Natural Terrain, Real Challenge</Typography>
              <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                The OMC trials area features natural rocky terrain with the kind of authentic obstacles
                that make trials riding so demanding. Whether you&apos;re just starting out or an experienced
                trials rider, the area has sections to challenge your skill and improve your technique.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {areaFeatures.map((feature) => (
                  <Box key={feature} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 18, flexShrink: 0 }} />
                    <Typography variant="body2" color="text.secondary">{feature}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  border: '1px solid rgba(77,142,247,0.3)',
                  borderRadius: 1,
                  backgroundColor: 'rgba(77,142,247,0.06)',
                }}
              >
                <Typography variant="h6" sx={{ fontFamily: '"Barlow Condensed", sans-serif', mb: 1 }}>Trials Membership</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                  Trials membership is available as a standalone option or combined with motocross.
                  Trials-only membership is priced separately from the full motocross membership.
                </Typography>
                <Button component={Link} href="/membership" variant="text" color="primary" size="small" sx={{ pl: 0 }}>
                  View Membership Options →
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* Pro rider videos */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', display: 'block', mb: 1 }}>
            Pro Riders
          </Typography>
          <Typography variant="h2" sx={{ mb: 8, fontSize: { xs: '2rem', md: '2.75rem' } }}>
            What the Pros Say
          </Typography>

          <Grid container spacing={4}>
            {/* Ryan Young — YouTube embed */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed", sans-serif', mb: 0.5 }}>
                Ryan Young
              </Typography>
              <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', mb: 2 }}>
                6x National Trials Champion
              </Typography>
              <Box sx={{ position: 'relative', paddingTop: '56.25%', borderRadius: 1, overflow: 'hidden', backgroundColor: '#000' }}>
                <Box
                  component="iframe"
                  src="https://www.youtube.com/embed/oy5aYH4h000"
                  title="Ryan Young OMC Trials Area"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                />
              </Box>
            </Grid>

            {/* Taylor Robert — self-hosted video */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed", sans-serif', mb: 0.5 }}>
                Taylor Robert
              </Typography>
              <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', mb: 2 }}>
                Professional Trials &amp; Enduro Rider
              </Typography>
              <Box
                component="video"
                controls
                src="/videos/taylor-robert.mov"
                sx={{
                  width: '100%',
                  maxHeight: 320,
                  display: 'block',
                  borderRadius: 1,
                  backgroundColor: '#000',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* Sponsors */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', display: 'block', mb: 1 }}>
            Community Support
          </Typography>
          <Typography variant="h2" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.75rem' } }}>
            Trials Area Sponsors
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 6, lineHeight: 1.8 }}>
            This area has been built and expanded thanks to generous donations from the following sponsors.
          </Typography>

          {/* Primary sponsors */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 6, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            {primarySponsors.map((sponsor) => (
              <Box
                key={sponsor.name}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 2.5,
                  backgroundColor: '#d8d8d8',
                  borderRadius: 1,
                  width: { xs: 140, sm: 160 },
                  height: 100,
                  flexShrink: 0,
                }}
              >
                <Box
                  component="img"
                  src={sponsor.logo}
                  alt={sponsor.name}
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            ))}
          </Box>

          <Divider sx={{ mb: 5 }} />

          {/* Additional sponsors */}
          <Typography color="text.secondary" sx={{ mb: 3, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Thank you to additional sponsors for making the trials area possible
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            {additionalSponsors.map((sponsor) => (
              <Box
                key={sponsor.name}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 2,
                  backgroundColor: '#d8d8d8',
                  borderRadius: 1,
                  width: { xs: 110, sm: 130 },
                  height: 80,
                  flexShrink: 0,
                }}
              >
                <Box
                  component="img"
                  src={sponsor.logo}
                  alt={sponsor.name}
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
