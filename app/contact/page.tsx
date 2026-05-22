import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact the Owyhee Motorcycle Club — location, email, social media, and facility hours.',
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <Box sx={{ py: { xs: 6, md: 10 }, background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)', borderBottom: '2px solid', borderColor: 'primary.main' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <ContactMailIcon sx={{ color: 'primary.main', fontSize: 40 }} />
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em' }}>Get in Touch</Typography>
          </Box>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '5rem' }, mb: 3 }}>Contact Us</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 620, fontSize: '1.1rem' }}>
            Questions about membership, events, or facility access? Reach out and a club officer
            will get back to you.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Contact info */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>

                <Card sx={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                      <EmailIcon sx={{ color: 'primary.main' }} />
                      <Typography variant="h6" sx={{ fontFamily: '"Barlow Condensed", sans-serif' }}>Email</Typography>
                    </Box>
                    <Button
                      component="a"
                      href="mailto:info@omcracing.com"
                      variant="text"
                      color="primary"
                      sx={{ fontSize: '1rem', pl: 0 }}
                    >
                      info@omcracing.com
                    </Button>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      For general inquiries, membership questions, and sponsorship.
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                      <LocationOnIcon sx={{ color: 'primary.main' }} />
                      <Typography variant="h6" sx={{ fontFamily: '"Barlow Condensed", sans-serif' }}>Location</Typography>
                    </Box>
                    <Typography color="text.secondary">
                      6600 Cartwright Rd<br />
                      Boise, ID 83714
                    </Typography>
                    <Button
                      component="a"
                      href="https://maps.google.com/?q=6600+Cartwright+Rd+Boise+ID+83714"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="text"
                      color="primary"
                      size="small"
                      sx={{ mt: 1, pl: 0 }}
                    >
                      Open in Google Maps →
                    </Button>
                  </CardContent>
                </Card>

                <Card sx={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                      <AccessTimeIcon sx={{ color: 'primary.main' }} />
                      <Typography variant="h6" sx={{ fontFamily: '"Barlow Condensed", sans-serif' }}>Facility Hours</Typography>
                    </Box>
                    <Typography color="text.secondary">7:00 AM - 10:00 PM daily</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      Members only during non-event hours. Membership card required for gate access.
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontFamily: '"Barlow Condensed", sans-serif', mb: 2 }}>Follow Us</Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Button
                        component="a"
                        href="https://www.facebook.com/omcracing"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        color="secondary"
                        startIcon={<FacebookIcon />}
                      >
                        Facebook
                      </Button>
                      <Button
                        component="a"
                        href="https://www.instagram.com/omcracing"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        color="secondary"
                        startIcon={<InstagramIcon />}
                      >
                        Instagram
                      </Button>
                    </Box>
                  </CardContent>
                </Card>

              </Box>
            </Grid>

            {/* Monthly meetings */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Card sx={{ border: '1px solid rgba(255,255,255,0.12)', mb: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" sx={{ mb: 2, fontFamily: '"Barlow Condensed", sans-serif', fontSize: '1.75rem' }}>
                    Monthly Club Meetings
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                    Club meetings are held on the <strong style={{ color: 'white' }}>3rd Friday of each month at 7:00 PM</strong>.
                    All members are expected to attend. Prospective members and guests are welcome.
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    Meetings are where the club votes on decisions, plans upcoming events, discusses track
                    maintenance, and catches up as a community. If you&apos;re thinking about joining OMC,
                    coming to a meeting is the best way to get to know us.
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" sx={{ mb: 2, fontFamily: '"Barlow Condensed", sans-serif', fontSize: '1.75rem' }}>
                    For Race Day
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                    You do <strong style={{ color: 'white' }}>not</strong> need to be a member to race at OMC events.
                    Race day registration and entries are handled through iRaceReady.
                  </Typography>
                  <Button
                    component="a"
                    href="https://app.iraceready.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    color="primary"
                  >
                    Register on iRaceReady →
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
