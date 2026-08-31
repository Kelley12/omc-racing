'use client';

import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

// Contact details are stored as character codes rather than plain text and
// decoded client-side on mount. This keeps phone numbers and email addresses
// out of the server-rendered HTML and the readable JS source, so simple
// crawlers/scrapers that scan static markup won't pick them up.
const officers: { role: string; name: string; phone: number[]; email: number[] }[] = [
  { role: 'President', name: 'Ryan Haygood', phone: [50,48,56,57,50,49,49,55,52,55], email: [104,97,121,103,111,111,100,55,51,64,104,111,116,109,97,105,108,46,99,111,109] },
  { role: 'Vice President', name: 'Don Biava', phone: [57,49,54,51,57,54,54,54,54,53], email: [100,97,98,105,97,118,97,64,97,111,108,46,99,111,109] },
  { role: 'Treasurer', name: 'Sandy Forst', phone: [50,48,56,56,54,49,55,57,54,53], email: [115,97,110,100,114,97,102,111,114,115,116,64,104,111,116,109,97,105,108,46,99,111,109] },
  { role: 'Road Captain', name: 'Skyler Lenty', phone: [50,48,56,56,56,48,48,52,56,55], email: [115,107,121,108,101,114,55,51,50,64,103,109,97,105,108,46,99,111,109] },
  { role: 'Sargent at Arms / Referee', name: 'Garrett Sherwood', phone: [50,48,56,53,55,55,49,48,48,50], email: [103,97,114,114,101,116,116,46,115,104,101,114,119,111,111,100,64,105,99,108,111,117,100,46,99,111,109] },
  { role: 'Sponsorship Coordinator', name: 'Chelsi Benger', phone: [50,48,56,50,56,51,50,52,48,57], email: [98,114,105,103,104,116,101,121,101,50,48,56,64,103,109,97,105,108,46,99,111,109] },
  { role: 'Race Coordinator', name: 'Josh Dougherty', phone: [50,48,56,55,57,52,52,56,54,53], email: [106,111,115,104,100,111,117,103,104,101,114,116,121,51,49,50,64,121,97,104,111,111,46,99,111,109] },
  { role: 'Office Coordinator', name: 'Tina Elmblad', phone: [57,50,56,50,48,56,53,54,48,49], email: [84,105,110,97,95,101,108,109,98,108,97,100,64,121,97,104,111,111,46,99,111,109] },
  { role: 'Pee Wee Coordinator', name: 'Cory Christiansen', phone: [50,48,56,52,48,57,48,50,55,51], email: [115,97,108,101,115,64,99,97,114,108,115,99,121,99,108,101,46,99,111,109] },
  { role: 'Membership Coordinator', name: 'Ray Bradshaw', phone: [50,48,56,51,52,48,48,55,56,52], email: [111,109,99,46,98,111,105,115,101,64,103,109,97,105,108,46,99,111,109] },
];

function decode(codes: number[]): string {
  return String.fromCharCode(...codes);
}

function formatPhone(digits: string): string {
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function BoardMembers() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setRevealed(true);
  }, []);

  return (
    <Grid container spacing={3}>
      {officers.map((officer) => {
        const phone = decode(officer.phone);
        const email = decode(officer.email);

        return (
          <Grid key={officer.role} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ border: '1px solid rgba(255,255,255,0.08)', height: '100%' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="overline"
                  sx={{ color: 'primary.main', letterSpacing: '0.08em', display: 'block', mb: 0.5 }}
                >
                  {officer.role}
                </Typography>

                {officer.name && (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                    <PersonIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                    <Typography variant="h6" sx={{ fontFamily: '"Barlow Condensed", sans-serif' }}>
                      {officer.name}
                    </Typography>
                  </Box>
                )}

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75, mt: officer.name ? 0 : 1.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PhoneIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                    {revealed ? (
                      <Link href={`tel:+1${phone}`} color="text.secondary" underline="hover" sx={{ fontSize: '0.95rem' }}>
                        {formatPhone(phone)}
                      </Link>
                    ) : (
                      <Typography color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                        &hellip;
                      </Typography>
                    )}
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <EmailIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                    {revealed ? (
                      <Link
                        href={`mailto:${email}`}
                        color="text.secondary"
                        underline="hover"
                        sx={{ fontSize: '0.95rem', wordBreak: 'break-all' }}
                      >
                        {email}
                      </Link>
                    ) : (
                      <Typography color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                        &hellip;
                      </Typography>
                    )}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
