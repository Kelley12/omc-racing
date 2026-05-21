import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from 'next/link';
import NatureIcon from '@mui/icons-material/Nature';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trials',
  description: 'OMC trials riding area — technical natural obstacles, endorsed by pro riders including Ryan Young.',
};

const areaFeatures = [
  'Natural rocky terrain with challenging obstacles',
  'Located just left of the gate, below the arenacross track',
  'Suitable for all skill levels — beginner to expert',
  'Practice area open year-round',
  'Club-organized trials events',
];

const proEndorsements = [
  { name: 'Ryan Young', title: '6x AMA National Trials Champion', note: 'Has ridden and endorsed the OMC trials area.' },
  { name: 'Taylor Robert', title: 'Professional trials & enduro rider', note: 'Has ridden at the OMC facility.' },
];

export default function TrialsPage() {
  return (
    <>
      {/* Page header */}
      <Box sx={{ py: { xs: 6, md: 10 }, background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)', borderBottom: '2px solid', borderColor: 'secondary.main', position: 'relative', overflow: 'hidden',
        '&::before': { content: '""', position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%, rgba(253,220,1,0.08) 0%, transparent 60%)', pointerEvents: 'none' } }}>
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <NatureIcon sx={{ color: 'secondary.main', fontSize: 40 }} />
            <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.2em' }}>Discipline</Typography>
          </Box>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '5rem' }, mb: 3 }}>Trials</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 620, mb: 4, fontSize: '1.1rem' }}>
            The OMC trials area features natural rocky terrain with challenging obstacles that will push
            riders of any skill level. Endorsed by some of the best trials riders in the country.
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
              <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.2em' }}>The Riding Area</Typography>
              <Typography variant="h2" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.75rem' } }}>Natural Terrain, Real Challenge</Typography>
              <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                The OMC trials area is located just to the left of the main gate, below the arenacross
                track. The terrain features natural rocky outcroppings and technical obstacles that make
                for authentic trials riding — not manufactured difficulty.
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                Whether you&apos;re just starting out or an experienced trials rider, the area has sections
                to challenge your skill and improve your technique.
              </Typography>
              <Typography variant="h6" sx={{ mb: 2, fontFamily: '"Barlow Condensed", sans-serif' }}>Area Features</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 4 }}>
                {areaFeatures.map((feature) => (
                  <Box key={feature} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <CheckCircleIcon sx={{ color: 'secondary.main', fontSize: 18, flexShrink: 0 }} />
                    <Typography variant="body2" color="text.secondary">{feature}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Card sx={{ border: '1px solid rgba(253,220,1,0.15)', mb: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                    <StarIcon sx={{ color: 'secondary.main' }} />
                    <Typography variant="h6" sx={{ fontFamily: '"Barlow Condensed", sans-serif', color: 'secondary.main' }}>
                      Pro Endorsements
                    </Typography>
                  </Box>
                  {proEndorsements.map((pro) => (
                    <Box key={pro.name} sx={{ mb: 2, pb: 2, borderBottom: '1px solid', borderColor: 'divider', '&:last-child': { mb: 0, pb: 0, borderBottom: 'none' } }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{pro.name}</Typography>
                      <Typography variant="caption" sx={{ color: 'secondary.main', display: 'block', mb: 0.5 }}>{pro.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{pro.note}</Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>

              <Card sx={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 1, fontFamily: '"Barlow Condensed", sans-serif' }}>Trials Membership</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Trials membership is available as a standalone option or combined with motocross.
                    Trials-only membership is priced separately from the full motocross membership.
                  </Typography>
                  <Button component={Link} href="/membership" variant="outlined" color="primary" size="small">
                    View Membership Options →
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
