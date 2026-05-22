import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

const footerLinks = [
  { label: 'Calendar', href: '/calendar' },
  { label: 'Membership', href: '/membership' },
  { label: 'Motocross', href: '/motocross' },
  { label: 'Trials', href: '/trials' },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'History', href: '/history' },
  { label: 'Contact', href: '/contact' },
  { label: 'News', href: '/news' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0A0A0A',
        borderTop: '2px solid',
        borderColor: 'primary.main',
        mt: 'auto',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                mb: 1,
              }}
            >
              OMC<Box component="span" sx={{ color: 'primary.main' }}> Racing</Box>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 300 }}>
              Owyhee Motorcycle Club — Est. 1940. AMA-chartered, member-supported motorsports club
              in Southwest Idaho.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                component="a"
                href="https://www.facebook.com/omcracing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/omcracing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick links */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  component={NextLink}
                  href={link.href}
                  underline="none"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.875rem',
                    '&:hover': { color: 'primary.main' },
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
              Find Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1.5 }}>
              <LocationOnIcon sx={{ color: 'primary.main', fontSize: 20, mt: 0.25, flexShrink: 0 }} />
              <Typography variant="body2" color="text.secondary">
                6600 Cartwright Rd<br />
                Boise, ID 83714
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon sx={{ color: 'primary.main', fontSize: 20, flexShrink: 0 }} />
              <Link
                href="mailto:info@omcracing.com"
                underline="none"
                sx={{ color: 'text.secondary', fontSize: '0.875rem', '&:hover': { color: 'primary.main' } }}
              >
                info@omcracing.com
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} Owyhee Motorcycle Club. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              AMA-Chartered Club · National Register of Historic Places
            </Typography>
            <Link
              component={NextLink}
              href="/privacy"
              underline="none"
              sx={{ color: 'text.secondary', fontSize: '0.75rem', '&:hover': { color: 'primary.main' } }}
            >
              Privacy Policy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
