import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from 'next/link';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Motocross',
  description: 'OMC Racing motocross track — full-sized track at 2,400 ft elevation in Southwest Idaho. Open to members and non-members.',
};

const trackFeatures = [
  'Full-sized motocross track layout',
  'Approximately 2,400 ft elevation',
  'Maintained year-round by club members',
  'Open for member practice any time during facility hours',
  'Race events open to non-members',
  'AMA-sanctioned events',
  'Separate PeeWee/beginner track area',
];

export default function MotocrossPage() {
  return (
    <>
      {/* Page header */}
      <Box sx={{ py: { xs: 6, md: 10 }, background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)', borderBottom: '2px solid', borderColor: 'secondary.main', position: 'relative', overflow: 'hidden',
        '&::before': { content: '""', position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(77,142,247,0.14) 0%, transparent 60%)', pointerEvents: 'none' } }}>
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <DirectionsBikeIcon sx={{ color: 'secondary.main', fontSize: 40 }} />
            <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.2em' }}>Discipline</Typography>
          </Box>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '5rem' }, mb: 3 }}>Motocross</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 620, mb: 4, fontSize: '1.1rem' }}>
            The OMC motocross track is one of the longest-running motocross facilities in Southwest Idaho,
            continuously operated since 1940. Whether you&apos;re here to practice or race, the track is yours.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button component={Link} href="/calendar" variant="contained" color="primary" endIcon={<ArrowForwardIcon />} size="large">
              View Race Schedule
            </Button>
            <Button component="a" href="https://app.iraceready.com" target="_blank" rel="noopener noreferrer" variant="outlined" color="secondary" endIcon={<OpenInNewIcon />} size="large">
              Register on iRaceReady
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Track details */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: 'flex-start' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.2em' }}>The Track</Typography>
              <Typography variant="h2" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.75rem' } }}>Built for Real Racing</Typography>
              <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                Situated in the Owyhee foothills west of Boise, the OMC track features the natural terrain
                variations and elevation changes that make Southwest Idaho riding so unique. The main track
                is a full-sized motocross layout suitable for all displacement classes.
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                The facility is maintained entirely by club members through regular work parties. This
                hands-on approach keeps costs low and gives members true ownership of their track.
              </Typography>
              <Typography variant="h6" sx={{ mb: 2, fontFamily: '"Barlow Condensed", sans-serif' }}>Track Features</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {trackFeatures.map((feature) => (
                  <Box key={feature} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <CheckCircleIcon sx={{ color: 'secondary.main', fontSize: 18, flexShrink: 0 }} />
                    <Typography variant="body2" color="text.secondary">{feature}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Card sx={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ mb: 3, fontFamily: '"Barlow Condensed", sans-serif', color: 'secondary.main' }}>
                    Quick Facts
                  </Typography>
                  {[
                    { label: 'Elevation', value: '~2,400 ft' },
                    { label: 'Location', value: 'Boise, ID 83714' },
                    { label: 'Facility Hours', value: '7am – 10pm' },
                    { label: 'Non-member Racing', value: 'Welcome' },
                    { label: 'Membership Required', value: 'For practice/riding' },
                  ].map(({ label, value }) => (
                    <Box key={label} sx={{ display: 'flex', justifyContent: 'space-between', py: 1.5, borderBottom: '1px solid', borderColor: 'divider' }}>
                      <Typography variant="body2" color="text.secondary">{label}</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>{value}</Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>

              <Card sx={{ mt: 3, border: '1px solid rgba(255,255,255,0.08)', backgroundColor: 'rgba(77,142,247,0.1)' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 1, fontFamily: '"Barlow Condensed", sans-serif' }}>
                    Non-Members Welcome to Race
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    You do not need to be an OMC member to enter our race events. Show up, register,
                    and ride.
                  </Typography>
                  <Button component={Link} href="/membership" variant="text" color="primary" size="small">
                    Learn about membership benefits →
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
