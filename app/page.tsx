import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Link from 'next/link';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import NatureIcon from '@mui/icons-material/Nature';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupIcon from '@mui/icons-material/Group';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TrackStatusBanner from '@/components/TrackStatusBanner';
import { getTrackStatus, getAllNewsPosts } from '@/lib/content';

// Diamond and Gold sponsors — shown on the homepage
const titleSponsors = [
  { name: 'Yamaha Outdoor Access Initiative / Dillon Powersports', url: 'https://www.dennisdillonpowersports.com/', logo: '/images/sponsors/yoai-dillon-powersports.png', tier: 'diamond', whiteBg: true },
  { name: 'Project Filter', url: 'https://projectfilter.org', logo: '/images/sponsors/project-filter.png', tier: 'diamond' },
  { name: "Carl's Cycle Sales", url: 'https://carlscycle.com', logo: '/images/sponsors/carls-sponsor-logo.jpeg', tier: 'gold' },
  { name: 'Dave Evans Construction', url: 'https://devansconstruction.com', logo: '/images/sponsors/dec_logo.jpeg', tier: 'gold' },
];


export default function HomePage() {
  const trackStatus = getTrackStatus();
  const newsPosts = getAllNewsPosts().slice(0, 3);

  return (
    <>
      <TrackStatusBanner status={trackStatus} />

      {/* Hero */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0D0D0D 100%)',
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 8, md: 14 },
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 70% 50%, rgba(77,142,247,0.18) 0%, transparent 60%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: { xs: 3, md: 5 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Box
              component="img"
              src="/images/logo/omc-logo.png"
              alt="Owyhee Motorcycle Club"
              sx={{ height: { xs: 90, sm: 110, md: 130 }, width: 'auto', flexShrink: 0 }}
            />
            <Box sx={{ maxWidth: 700 }}>
              <Typography
                variant="overline"
                sx={{ color: 'primary.main', letterSpacing: '0.2em', fontSize: '0.75rem', fontWeight: 700 }}
              >
                Est. 1940 · Boise, Idaho
              </Typography>
              <Typography
                variant="h1"
                sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5.5rem' }, lineHeight: 0.95, mt: 1, mb: 3 }}
              >
                Owyhee
                <Box component="span" sx={{ color: 'primary.main', display: 'block' }}>
                  Motorcycle
                </Box>
                Club
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ fontFamily: 'inherit', fontWeight: 400, mb: 4, maxWidth: 560 }}>
                AMA-chartered motocross and trials club in Southwest Idaho.
                Open to members and non-members alike.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Button
                  component={Link}
                  href="/membership"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                >
                  Become a Member
                </Button>
                <Button
                  component={Link}
                  href="/calendar"
                  variant="outlined"
                  color="secondary"
                  size="large"
                >
                  View Events
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Disciplines */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', display: 'block', mb: 1 }}>
            What We Ride
          </Typography>
          <Typography variant="h2" sx={{ mb: 6, fontSize: { xs: '2rem', md: '3rem' } }}>
            Two Disciplines, One Club
          </Typography>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                component={Link}
                href="/motocross"
                sx={{
                  display: 'block',
                  textDecoration: 'none',
                  height: '100%',
                  border: '1px solid rgba(255,255,255,0.12)',
                  transition: 'border-color 0.2s, transform 0.2s',
                  '&:hover': { borderColor: 'primary.main', transform: 'translateY(-2px)' },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    <DirectionsBikeIcon sx={{ fontSize: 48 }} />
                  </Box>
                  <Typography variant="h3" sx={{ mb: 2, fontSize: '2rem' }}>Motocross</Typography>
                  <Typography color="text.secondary" sx={{ mb: 3 }}>
                    Full-sized motocross track at approximately 2,400 ft elevation. Open to all skill levels
                    for practice and competitive racing events throughout the season.
                  </Typography>
                  <Typography sx={{ color: 'primary.main', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Learn More →
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                component={Link}
                href="/trials"
                sx={{
                  display: 'block',
                  textDecoration: 'none',
                  height: '100%',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'border-color 0.2s, transform 0.2s',
                  '&:hover': { borderColor: 'primary.main', transform: 'translateY(-2px)' },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    <NatureIcon sx={{ fontSize: 48 }} />
                  </Box>
                  <Typography variant="h3" sx={{ mb: 2, fontSize: '2rem' }}>Trials</Typography>
                  <Typography color="text.secondary" sx={{ mb: 3 }}>
                    Technical trials riding area featuring challenging natural obstacles. Endorsed by
                    professionals including 6x National Trials Champion Ryan Young.
                  </Typography>
                  <Typography sx={{ color: 'primary.main', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Learn More →
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Quick Stats */}
      <Box sx={{ py: { xs: 5, md: 8 }, borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {[
              { value: '1940', label: 'Year Founded', icon: <CalendarMonthIcon /> },
              { value: '80+', label: 'Years of Racing', icon: <DirectionsBikeIcon /> },
              { value: 'AMA', label: 'Chartered Club', icon: <GroupIcon /> },
              { value: 'NPS', label: 'Historic Registry', icon: <NatureIcon /> },
            ].map((stat) => (
              <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box sx={{ color: 'primary.main', mb: 1 }}>{stat.icon}</Box>
                  <Typography variant="h3" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, color: 'primary.main' }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.7rem' }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* News */}
      {newsPosts.length > 0 && (
        <Box sx={{ py: { xs: 6, md: 10 } }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', mb: 5, flexWrap: 'wrap', gap: 2 }}>
              <Box>
                <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', display: 'block', mb: 1 }}>
                  Latest Updates
                </Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
                  Club News
                </Typography>
              </Box>
              <Button component={Link} href="/news" variant="text" color="primary" endIcon={<ArrowForwardIcon />}>
                All News
              </Button>
            </Box>
            <Grid container spacing={3}>
              {newsPosts.map((post) => (
                <Grid key={post.slug} size={{ xs: 12, md: 4 }}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      border: '1px solid rgba(255,255,255,0.08)',
                      transition: 'border-color 0.2s',
                      '&:hover': { borderColor: 'rgba(255,255,255,0.2)' },
                    }}
                  >
                    <CardActionArea component={Link} href={`/news/${post.slug}`} sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <CardContent sx={{ p: 3, flex: 1 }}>
                        <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}
                        </Typography>
                        <Typography variant="h5" sx={{ mt: 1, mb: 1.5, fontSize: '1.1rem', lineHeight: 1.3 }}>
                          {post.title}
                        </Typography>
                        {post.excerpt && (
                          <Typography variant="body2" color="text.secondary" sx={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                            {post.excerpt}
                          </Typography>
                        )}
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )}

      {/* Sponsors */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'background.paper', borderTop: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', display: 'block', mb: 1, textAlign: 'center' }}>
            Proud Partners
          </Typography>
          <Typography variant="h2" sx={{ mb: 6, textAlign: 'center', fontSize: { xs: '2rem', md: '3rem' } }}>
            Our Sponsors
          </Typography>

          {/* Title sponsors — large tiles */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, mb: 6 }}>
            {titleSponsors.map((sponsor) => {
              const isDiamond = sponsor.tier === 'diamond';
              return (
                <Box
                  key={sponsor.name}
                  component="a"
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={sponsor.name}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 3,
                    borderRadius: 1,
                    width: isDiamond ? { xs: 180, sm: 220 } : { xs: 140, sm: 180 },
                    height: isDiamond ? 150 : 110,
                    flexShrink: 0,
                    textDecoration: 'none',
                    transition: 'opacity 0.2s, box-shadow 0.2s',
                    '&:hover': { opacity: 0.85, boxShadow: '0 0 0 2px #4d8ef7' },
                    ...(sponsor.whiteBg && { backgroundColor: '#fff' }),
                  }}
                >
                  <Box
                    component="img"
                    src={sponsor.logo}
                    alt={sponsor.name}
                    sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </Box>
              );
            })}
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Button component={Link} href="/sponsors" variant="outlined" color="primary">
              View All Sponsors
            </Button>
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, rgba(77,142,247,0.18) 0%, transparent 60%)',
          borderTop: '1px solid rgba(255,255,255,0.12)',
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
            Ready to Ride?
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, mb: 4 }}>
            You don&apos;t have to be a member to race at OMC events. Everyone is welcome on race day.
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
            <Button component={Link} href="/calendar" variant="contained" color="primary" size="large" endIcon={<ArrowForwardIcon />}>
              See Upcoming Events
            </Button>
            <Button component={Link} href="/membership" variant="outlined" color="secondary" size="large">
              Membership Info
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
