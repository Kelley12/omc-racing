import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Motocross',
  description: 'OMC Racing motocross with summer and winter tracks for year-round riding in Southwest Idaho. Open to members and non-members on race days.',
};

export default function MotocrossPage() {
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
            background: 'radial-gradient(ellipse at 80% 50%, rgba(77,142,247,0.14) 0%, transparent 60%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <DirectionsBikeIcon sx={{ color: 'primary.main', fontSize: 40 }} />
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em' }}>Discipline</Typography>
          </Box>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '5rem' }, mb: 3 }}>Motocross</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 680, mb: 4, fontSize: '1.1rem', lineHeight: 1.7 }}>
            You do not have to be a member to ride on race days or during Paid Public Practices.
            OMC has both a summer and winter track to enable year-round racing.
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

      {/* Two Tracks */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', display: 'block', mb: 1 }}>The Facility</Typography>
          <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '2rem', md: '2.75rem' } }}>
            Two Tracks, Year-Round Riding
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 680, mb: 6, lineHeight: 1.8 }}>
            OMC maintains both a summer and a winter track so racing never stops, regardless of the season.
            In addition to local events, OMC hosts regional series events that draw riders from across the
            Pacific Northwest.
          </Typography>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: '100%', border: '1px solid rgba(255,255,255,0.12)' }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <WbSunnyIcon sx={{ color: 'primary.main', fontSize: 28 }} />
                    <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed", sans-serif' }}>Summer Track</Typography>
                  </Box>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    The main motocross track situated in the Owyhee foothills west of Boise. A full-sized
                    layout at approximately 2,400 ft elevation featuring natural terrain, elevation changes,
                    and the classic Southwest Idaho soil conditions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: '100%', border: '1px solid rgba(255,255,255,0.12)' }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <AcUnitIcon sx={{ color: 'primary.main', fontSize: 28 }} />
                    <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed", sans-serif' }}>Winter Track</Typography>
                  </Box>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    When the summer track is out of season, OMC&apos;s dedicated winter track keeps members
                    and racers riding all year long. Year-round access is one of the core benefits of
                    OMC membership in Southwest Idaho.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Featured Events strip */}
          <Box sx={{ mt: 5, p: { xs: 3, md: 4 }, border: '1px solid rgba(77,142,247,0.3)', borderRadius: 1, backgroundColor: 'rgba(77,142,247,0.06)' }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', display: 'block', mb: 1 }}>
              Featured Events
            </Typography>
            <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed", sans-serif', mb: 1.5 }}>
              We Host Regional &amp; National Series
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 0, lineHeight: 1.8 }}>
              In addition to our local events, OMC looks forward to hosting great events such as the{' '}
              <strong style={{ color: 'white' }}>RMX Series</strong>,{' '}
              <strong style={{ color: 'white' }}>Pacific Northwest Vintage Race</strong>,{' '}
              <strong style={{ color: 'white' }}>Idaho Old Timer International Series</strong>, and more.
              Check the calendar for the full schedule.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Divider />

      {/* Events / Race Days */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', display: 'block', mb: 1 }}>Racing</Typography>
          <Typography variant="h2" sx={{ mb: 6, fontSize: { xs: '2rem', md: '2.75rem' } }}>
            Events &amp; Admission
          </Typography>

          <Grid container spacing={4}>
            {/* Race day schedule */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: '100%', border: '1px solid rgba(255,255,255,0.12)' }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                    <AccessTimeIcon sx={{ color: 'primary.main' }} />
                    <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed", sans-serif' }}>Race Day Schedule</Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                    {[
                      { time: '6:30 AM', desc: 'Gates & office open' },
                      { time: '8:00 AM', desc: 'Practice begins' },
                      { time: 'After practice', desc: 'Racing begins' },
                    ].map(({ time, desc }) => (
                      <Box key={time} sx={{ display: 'flex', gap: 2, alignItems: 'baseline' }}>
                        <Typography sx={{ color: 'primary.main', fontWeight: 700, fontFamily: '"Barlow Condensed", sans-serif', fontSize: '1.1rem', minWidth: 130, flexShrink: 0 }}>
                          {time}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">{desc}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box sx={{ p: 2, border: '1px solid rgba(255,255,255,0.08)', borderRadius: 1, mb: 2 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      <strong style={{ color: 'white' }}>Two-day weekends may have earlier start times.</strong>{' '}
                      Always check the event details for any two-day or special events.
                    </Typography>
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    <strong style={{ color: 'white' }}>Registration must be completed online</strong> prior to
                    race day. Find upcoming events and register at iRaceReady.
                  </Typography>

                  <Button
                    component="a"
                    href="https://app.iraceready.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    color="primary"
                    endIcon={<OpenInNewIcon />}
                    sx={{ mt: 3 }}
                  >
                    Register on iRaceReady
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Admission & Public Practice */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ mb: 3, border: '1px solid rgba(255,255,255,0.12)' }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <InfoOutlinedIcon sx={{ color: 'primary.main' }} />
                    <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed", sans-serif' }}>Admission</Typography>
                  </Box>
                  <Typography color="text.secondary" sx={{ mb: 1.5, lineHeight: 1.8 }}>
                    Come and see the races, or better yet, come and join in the fun! Racing at OMC is open
                    to everyone. Club rules and regulations must be followed and all required waivers
                    collected prior to access.
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    Prices may vary for special events. See the event details for any added information.
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h6" sx={{ fontFamily: '"Barlow Condensed", sans-serif', mb: 1 }}>
                    Paid Public Practice
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, lineHeight: 1.7 }}>
                    Non-members are welcome on paid public practice days. Times vary, so check the website,
                    Instagram, or Facebook for current schedules.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Button component={Link} href="/calendar" variant="text" color="primary" size="small" sx={{ pl: 0 }}>
                      View Calendar →
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* Member Practice */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', display: 'block', mb: 1 }}>Members</Typography>
          <Typography variant="h2" sx={{ mb: 6, fontSize: { xs: '2rem', md: '2.75rem' } }}>
            Member Practice
          </Typography>

          <Grid container spacing={4}>
            {/* Watered Wednesday */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: '100%', border: '1px solid rgba(77,142,247,0.3)', backgroundColor: 'rgba(77,142,247,0.06)' }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <WaterDropIcon sx={{ color: 'primary.main', fontSize: 28 }} />
                    <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed", sans-serif' }}>
                      Watered Wednesday Practice
                    </Typography>
                  </Box>
                  <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                    Members-only watered practices are held{' '}
                    <strong style={{ color: 'white' }}>every Wednesday evening</strong> between{' '}
                    <strong style={{ color: 'white' }}>Memorial Day and Labor Day at 6:00 PM</strong>,
                    weather permitting.
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    Check the calendar page for information regarding open public practices.
                  </Typography>
                  <Button component={Link} href="/calendar" variant="text" color="primary" size="small" sx={{ mt: 2, pl: 0 }}>
                    View Calendar →
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Open practice */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: '100%', border: '1px solid rgba(255,255,255,0.12)' }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <AccessTimeIcon sx={{ color: 'primary.main', fontSize: 28 }} />
                    <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed", sans-serif' }}>
                      Open Member Practice
                    </Typography>
                  </Box>
                  <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                    The club is open to members for practice{' '}
                    <strong style={{ color: 'white' }}>7 AM to 9 PM</strong> every day, with two exceptions:
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {[
                      'Race days (track is reserved for the event)',
                      'The day prior to any race event',
                    ].map((item) => (
                      <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'primary.main', mt: '6px', flexShrink: 0 }} />
                        <Typography variant="body2" color="text.secondary">{item}</Typography>
                      </Box>
                    ))}
                  </Box>
                  <Box sx={{ mt: 3, p: 2, border: '1px solid rgba(255,255,255,0.08)', borderRadius: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      Membership card required for gate access.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Membership CTA */}
          <Box sx={{ mt: 5, textAlign: 'center' }}>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Not a member yet? Joining OMC gives you year-round track access, Wednesday practices, and more.
            </Typography>
            <Button component={Link} href="/membership" variant="contained" color="primary" endIcon={<ArrowForwardIcon />}>
              View Membership Info
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
