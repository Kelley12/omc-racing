import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EmailIcon from '@mui/icons-material/Email';
import { getAllSponsors } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsors',
  description: 'OMC Racing sponsors and partners. Thank you to the businesses that support the Owyhee Motorcycle Club.',
};

export default function SponsorsPage() {
  const sponsors = getAllSponsors();
  const titleSponsors = sponsors.filter((s) => s.tier === 'Title');
  const supportingSponsors = sponsors.filter((s) => s.tier === 'Supporting');

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
            OMC Racing is made possible by the generous support of our sponsors. These businesses
            believe in what we do and help keep our facility running for the Idaho motorsports community.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">

          {titleSponsors.length > 0 && (
            <Box sx={{ mb: 8 }}>
              <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', display: 'block', mb: 1 }}>
                Title Sponsors
              </Typography>
              <Typography variant="h2" sx={{ mb: 5, fontSize: { xs: '2rem', md: '3rem' } }}>Top-Level Partners</Typography>
              <Grid container spacing={3}>
                {titleSponsors.map((sponsor) => (
                  <Grid key={sponsor.name} size={{ xs: 12, sm: 6, md: 4 }}>
                    <Card
                      component="a"
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 4,
                        textDecoration: 'none',
                        minHeight: 160,
                        border: '1px solid rgba(255,255,255,0.15)',
                        transition: 'border-color 0.2s, transform 0.2s',
                        '&:hover': { borderColor: 'primary.main', transform: 'translateY(-3px)' },
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{ textAlign: 'center', fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 700, mb: 1 }}
                      >
                        {sponsor.name}
                      </Typography>
                      <OpenInNewIcon sx={{ color: 'primary.main', fontSize: 16, opacity: 0.6 }} />
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {supportingSponsors.length > 0 && (
            <Box sx={{ mb: 8 }}>
              <Divider sx={{ mb: 6 }} />
              <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: '0.2em', display: 'block', mb: 1 }}>
                Supporting Sponsors
              </Typography>
              <Typography variant="h2" sx={{ mb: 5, fontSize: { xs: '2rem', md: '3rem' } }}>Supporting Partners</Typography>
              <Grid container spacing={2}>
                {supportingSponsors.map((sponsor) => (
                  <Grid key={sponsor.name} size={{ xs: 12, sm: 6, md: 3 }}>
                    <Box
                      component="a"
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        px: 3,
                        py: 2.5,
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: 1,
                        textDecoration: 'none',
                        transition: 'border-color 0.2s',
                        '&:hover': { borderColor: 'primary.main' },
                      }}
                    >
                      <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 600, textAlign: 'center' }}>
                        {sponsor.name}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Become a sponsor CTA */}
          <Card sx={{ border: '1px solid rgba(255,255,255,0.12)', backgroundColor: 'rgba(77,142,247,0.1)' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" sx={{ mb: 2, fontFamily: '"Barlow Condensed", sans-serif', fontSize: '1.75rem' }}>
                Become a Sponsor
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 600 }}>
                Interested in sponsoring OMC Racing? Your support helps fund track maintenance, event
                operations, and keeps this historic facility accessible to the Idaho motorsports community.
                Reach out to discuss sponsorship opportunities.
              </Typography>
              <Button
                component="a"
                href="mailto:info@omcracing.com?subject=Sponsorship Inquiry"
                variant="contained"
                color="primary"
                startIcon={<EmailIcon />}
              >
                Contact Us About Sponsorship
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
}
