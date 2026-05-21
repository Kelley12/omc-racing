import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Chip from '@mui/material/Chip';
import GroupIcon from '@mui/icons-material/Group';
import DownloadIcon from '@mui/icons-material/Download';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Membership',
  description: 'Join the Owyhee Motorcycle Club. View 2026 membership pricing, requirements, and how to apply.',
};

const memberBenefits = [
  'Year-round riding access during facility hours (7am – 10pm)',
  'Voting rights at monthly club meetings',
  'Discounts on entry fees for OMC events',
  'Access to work parties and club events',
  'Electronic gate card (one-time $25 fee)',
  'Ability to bring guests to practice sessions',
];

export default function MembershipPage() {
  return (
    <>
      {/* Page header */}
      <Box sx={{ py: { xs: 6, md: 10 }, background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)', borderBottom: '2px solid', borderColor: 'secondary.main' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <GroupIcon sx={{ color: 'secondary.main', fontSize: 40 }} />
            <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.2em' }}>Join the Club</Typography>
          </Box>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '5rem' }, mb: 3 }}>Membership</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 620, fontSize: '1.1rem' }}>
            OMC membership gives you year-round access to one of Idaho&apos;s oldest motorsports facilities.
            The 2026 season is open for applications.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">

          {/* Requirements */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.2em', display: 'block', mb: 1 }}>
              How to Apply
            </Typography>
            <Typography variant="h2" sx={{ mb: 4, fontSize: { xs: '2rem', md: '3rem' } }}>
              Requirements
            </Typography>
            <Grid container spacing={3}>
              {[
                { title: 'Waiver', body: 'A notarized or witnessed liability waiver is required for all members and must be submitted with your application.' },
                { title: 'Meeting Attendance', body: 'Attendance at monthly club meetings is required. Meetings are held the 3rd Friday of each month at 7pm.' },
                { title: 'Good Standing', body: 'Members must be in good standing and of good moral character as determined by the club board.' },
                { title: 'Volunteer Hours', body: 'Working members must complete the required number of volunteer hours (half due by June 1, remaining by season end). Non-working memberships waive hours in exchange for higher dues.' },
              ].map((req) => (
                <Grid key={req.title} size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ mb: 1, fontFamily: '"Barlow Condensed", sans-serif', color: 'secondary.main' }}>
                        {req.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">{req.body}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Pricing table */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.2em', display: 'block', mb: 1 }}>
              2026 Season
            </Typography>
            <Typography variant="h2" sx={{ mb: 4, fontSize: { xs: '2rem', md: '3rem' } }}>
              Membership Pricing
            </Typography>

            <Alert severity="info" sx={{ mb: 4 }}>
              <strong>Working memberships</strong> require volunteer hours. <strong>Non-working memberships</strong> have no
              hour requirements but carry higher dues. Prices listed are per season.
            </Alert>

            <Grid container spacing={4}>
              {/* Working */}
              <Grid size={{ xs: 12, lg: 6 }}>
                <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="h4" sx={{ fontSize: '1.5rem', fontFamily: '"Barlow Condensed", sans-serif' }}>Working Membership</Typography>
                  <Chip label="Hours Required" size="small" color="warning" />
                </Box>
                <TableContainer component={Paper} sx={{ backgroundColor: 'background.paper' }}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ color: 'text.secondary', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.08em' }}>Category</TableCell>
                        <TableCell align="right" sx={{ color: 'secondary.main', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.08em' }}>MX</TableCell>
                        <TableCell align="right" sx={{ color: 'secondary.main', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.08em' }}>Trials</TableCell>
                        <TableCell align="right" sx={{ color: 'text.secondary', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.08em' }}>Hours</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[
                        { cat: 'Working Household', mx: '$375', trials: '$200', hours: '20' },
                        { cat: 'Additional Youth (11–21)', mx: '$100', trials: '$25', hours: '5' },
                        { cat: 'Additional Adult (22+)', mx: '$200', trials: '$100', hours: '10' },
                      ].map((row) => (
                        <TableRow key={row.cat} sx={{ '&:last-child td': { border: 0 } }}>
                          <TableCell sx={{ color: 'text.primary', fontSize: '0.875rem' }}>{row.cat}</TableCell>
                          <TableCell align="right" sx={{ fontWeight: 600 }}>{row.mx}</TableCell>
                          <TableCell align="right" sx={{ fontWeight: 600 }}>{row.trials}</TableCell>
                          <TableCell align="right" sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>{row.hours} hrs</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>

              {/* Non-working */}
              <Grid size={{ xs: 12, lg: 6 }}>
                <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="h4" sx={{ fontSize: '1.5rem', fontFamily: '"Barlow Condensed", sans-serif' }}>Non-Working Membership</Typography>
                  <Chip label="No Hours Required" size="small" color="default" />
                </Box>
                <TableContainer component={Paper} sx={{ backgroundColor: 'background.paper' }}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ color: 'text.secondary', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.08em' }}>Category</TableCell>
                        <TableCell align="right" sx={{ color: 'secondary.main', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.08em' }}>MX</TableCell>
                        <TableCell align="right" sx={{ color: 'secondary.main', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.08em' }}>Trials</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[
                        { cat: 'Non-Working Household', mx: '$1,400', trials: '$1,000' },
                        { cat: 'Additional Youth (11–21)', mx: '$350', trials: '$100' },
                        { cat: 'Additional Adult (22+)', mx: '$700', trials: '$500' },
                      ].map((row) => (
                        <TableRow key={row.cat} sx={{ '&:last-child td': { border: 0 } }}>
                          <TableCell sx={{ color: 'text.primary', fontSize: '0.875rem' }}>{row.cat}</TableCell>
                          <TableCell align="right" sx={{ fontWeight: 600 }}>{row.mx}</TableCell>
                          <TableCell align="right" sx={{ fontWeight: 600 }}>{row.trials}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>

            {/* One-time fees */}
            <Box sx={{ mt: 4, p: 3, border: '1px solid rgba(255,255,255,0.08)', borderRadius: 1, backgroundColor: 'background.paper' }}>
              <Typography variant="h6" sx={{ mb: 2, fontFamily: '"Barlow Condensed", sans-serif' }}>One-Time Fees</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                <Box>
                  <Typography variant="body2" color="text.secondary">Electronic Gate Card</Typography>
                  <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed", sans-serif', color: 'secondary.main' }}>$25</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">Reinstatement Fee</Typography>
                  <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed", sans-serif', color: 'secondary.main' }}>$100</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Benefits */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h2" sx={{ mb: 4, fontSize: { xs: '2rem', md: '3rem' } }}>Member Benefits</Typography>
            <Grid container spacing={2}>
              {memberBenefits.map((benefit) => (
                <Grid key={benefit} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <CheckCircleIcon sx={{ color: 'secondary.main', fontSize: 20, mt: 0.25, flexShrink: 0 }} />
                    <Typography variant="body2" color="text.secondary">{benefit}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Download CTA */}
          <Card sx={{ border: '1px solid rgba(255,255,255,0.15)', backgroundColor: 'rgba(0,25,135,0.2)' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" sx={{ mb: 2, fontSize: '1.75rem', fontFamily: '"Barlow Condensed", sans-serif' }}>
                Ready to Apply?
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 600 }}>
                Download the membership application, complete it with all required signatures and notarization,
                and bring it to the next club meeting or mail it to the address on the form.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  component="a"
                  href="/pdfs/membership-application.pdf"
                  download
                  variant="contained"
                  color="primary"
                  startIcon={<DownloadIcon />}
                >
                  Download Application
                </Button>
                <Button
                  component="a"
                  href="/pdfs/club-rules.pdf"
                  download
                  variant="outlined"
                  color="secondary"
                  startIcon={<DownloadIcon />}
                >
                  Club Rules
                </Button>
                <Button
                  component="a"
                  href="/pdfs/constitution.pdf"
                  download
                  variant="outlined"
                  color="secondary"
                  startIcon={<DownloadIcon />}
                >
                  Constitution
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
}
