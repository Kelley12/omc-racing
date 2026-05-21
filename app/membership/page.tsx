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
  'Year-round track access 7am – 9pm daily (except race days and day prior)',
  'Members-only Watered Wednesday practices (Memorial Day through Labor Day)',
  'Voting rights at monthly club meetings',
  'Participation in all club social functions',
  'Access to work parties and club events',
  'Electronic gate card (one-time $25 fee)',
];

export default function MembershipPage() {
  return (
    <>
      {/* Page header */}
      <Box sx={{ py: { xs: 6, md: 10 }, background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)', borderBottom: '2px solid', borderColor: 'primary.main' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <GroupIcon sx={{ color: 'primary.main', fontSize: 40 }} />
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em' }}>Join the Club</Typography>
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
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', display: 'block', mb: 1 }}>
              How to Apply
            </Typography>
            <Typography variant="h2" sx={{ mb: 4, fontSize: { xs: '2rem', md: '3rem' } }}>
              Requirements
            </Typography>
            <Grid container spacing={3}>
              {[
                { title: 'Waiver', body: 'An annual waiver must be completed on the official form — no copies or prints allowed. Must be witnessed (or notarized if completing remotely). Available at meetings, events, or by contacting a board member.' },
                { title: 'Meeting Attendance', body: 'Attend monthly club meetings held the first Thursday of each month at 7:00 PM. To be voted in, attend 2 meetings and work half your required hours, or attend 3 meetings.' },
                { title: 'Good Standing', body: 'Members must be in good standing and of good moral character as determined by the club board.' },
                { title: 'Volunteer Hours', body: 'Working members must complete the required number of volunteer hours (half due by June 1, remaining by season end). Non-working memberships waive hours in exchange for higher dues.' },
              ].map((req) => (
                <Grid key={req.title} size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ mb: 1, fontFamily: '"Barlow Condensed", sans-serif', color: 'primary.main' }}>
                        {req.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">{req.body}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Member responsibilities */}
          <Box sx={{ mb: 8 }}>
            <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
              After you have accomplished the above and paid your dues, you may be voted into the club
              and will be able to start enjoying the benefits of being a club member.
            </Typography>

            <Grid container spacing={3}>
              {/* Volunteer hours */}
              <Grid size={{ xs: 12, md: 7 }}>
                <Card sx={{ height: '100%', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontFamily: '"Barlow Condensed", sans-serif', color: 'primary.main' }}>
                      Volunteer Hours
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      {[
                        'A member MUST work 1 event during the year — these hours count toward your required total.',
                        'You are responsible for tracking your own hours. Work vouchers are provided by OMC and must be legible, signed, and dated by a board member. Keep the yellow copy for your records.',
                        'Vouchers that are not signed and legible will not be counted.',
                        'Members who have not completed half their work hours by June 1st will have their gate card deactivated.',
                        'All hours must be completed by the end of December.',
                        'The day before each public event is a work day for prep — flaggers are required at each event. Hours can also be earned via grounds clean-up: trash pick-up, weeds, emptying cans, starting gate, fence repair, and more. Contact the Groundskeeper or any board member for details.',
                      ].map((item, i) => (
                        <Box key={i} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                          <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'primary.main', mt: '6px', flexShrink: 0 }} />
                          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>{item}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Access & conduct */}
              <Grid size={{ xs: 12, md: 5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
                  <Card sx={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ mb: 2, fontFamily: '"Barlow Condensed", sans-serif', color: 'primary.main' }}>
                        Club Access
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, lineHeight: 1.7 }}>
                        Access is prohibited to anyone who is not a current member in good standing —
                        this includes proper paperwork and volunteer requirements.
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        There is a <strong style={{ color: 'white' }}>$100 reinstatement fee</strong> any
                        time a membership goes into default and is returned to good standing.
                      </Typography>
                    </CardContent>
                  </Card>

                  <Card sx={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ mb: 2, fontFamily: '"Barlow Condensed", sans-serif', color: 'primary.main' }}>
                        Non-Working Membership
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        Meeting attendance and volunteer hours are not required for fee-only memberships,
                        but the membership form, payment, gate card, and official waiver requirements
                        still apply.
                      </Typography>
                    </CardContent>
                  </Card>

                  <Box sx={{ p: 3, border: '1px solid rgba(77,142,247,0.3)', borderRadius: 1, backgroundColor: 'rgba(77,142,247,0.06)' }}>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                      All members, regardless of membership type, must follow club rules and maintain
                      member conduct. We hope you&apos;ll join us in making OMC the{' '}
                      <strong style={{ color: 'white' }}>BEST in the Valley!</strong>
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Pricing table */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', display: 'block', mb: 1 }}>
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
                        <TableCell align="right" sx={{ color: 'primary.main', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.08em' }}>MX</TableCell>
                        <TableCell align="right" sx={{ color: 'primary.main', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.08em' }}>Trials</TableCell>
                        <TableCell align="right" sx={{ color: 'text.secondary', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.08em' }}>Hours</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[
                        { cat: 'Working Household', mx: '$375', trials: '$200', hours: '20' },
                        { cat: 'Additional Youth (11–21)', mx: '$100', trials: '$25', hours: '5' },
                        { cat: 'Additional Adult (22+)', mx: '$200', trials: '$200', hours: '10' },
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
                        <TableCell align="right" sx={{ color: 'primary.main', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.08em' }}>MX</TableCell>
                        <TableCell align="right" sx={{ color: 'primary.main', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.08em' }}>Trials</TableCell>
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
                  <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed", sans-serif', color: 'primary.main' }}>$25</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">Reinstatement Fee</Typography>
                  <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed", sans-serif', color: 'primary.main' }}>$100</Typography>
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
                    <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 20, mt: 0.25, flexShrink: 0 }} />
                    <Typography variant="body2" color="text.secondary">{benefit}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Track & riding etiquette */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', display: 'block', mb: 1 }}>
              Before You Ride
            </Typography>
            <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
              Track &amp; Riding Etiquette
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 640, lineHeight: 1.8 }}>
              All members and guests are expected to follow proper track etiquette. Knowing the rules
              keeps everyone safe and ensures the best experience for all riders.
            </Typography>
            <Box sx={{ maxWidth: 800 }}>
              <Box sx={{ position: 'relative', paddingTop: '56.25%', borderRadius: 1, overflow: 'hidden', backgroundColor: '#000' }}>
                <Box
                  component="iframe"
                  src="https://www.youtube.com/embed/vylDJJSrFDA"
                  title="Top 5 Motocross Track Riding Etiquette Tips"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                />
              </Box>
            </Box>
          </Box>

          {/* Download CTA */}
          <Card sx={{ border: '1px solid rgba(255,255,255,0.15)', backgroundColor: 'rgba(77,142,247,0.1)' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" sx={{ mb: 2, fontSize: '1.75rem', fontFamily: '"Barlow Condensed", sans-serif' }}>
                Ready to Apply?
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 1, maxWidth: 640 }}>
                Download the membership application for your discipline, complete it with all required
                signatures, and bring it to the next club meeting or mail it with a check to:
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: 'white', fontWeight: 600 }}>
                OMC Membership · P.O. Box 865 · Meridian, ID 83680
              </Typography>
              <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.1em', display: 'block', mb: 1.5 }}>
                Membership Applications
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                <Button
                  component="a"
                  href="/files/membership-mx-2026.pdf"
                  download
                  variant="contained"
                  color="primary"
                  startIcon={<DownloadIcon />}
                >
                  Motocross Application
                </Button>
                <Button
                  component="a"
                  href="/files/membership-trials-2026.pdf"
                  download
                  variant="contained"
                  color="primary"
                  startIcon={<DownloadIcon />}
                >
                  Trials Application
                </Button>
              </Box>
              <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: '0.1em', display: 'block', mb: 1.5 }}>
                Club Documents
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  component="a"
                  href="/files/club-rules-2026.pdf"
                  download
                  variant="outlined"
                  color="secondary"
                  startIcon={<DownloadIcon />}
                >
                  Club Rules
                </Button>
                <Button
                  component="a"
                  href="/files/constitution-bylaws.pdf"
                  download
                  variant="outlined"
                  color="secondary"
                  startIcon={<DownloadIcon />}
                >
                  Constitution &amp; By-Laws
                </Button>
                <Button
                  component="a"
                  href="/files/flagger-form.pdf"
                  download
                  variant="outlined"
                  color="secondary"
                  startIcon={<DownloadIcon />}
                >
                  Flagger Form
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
}
