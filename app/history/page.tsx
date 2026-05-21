import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import HistoryIcon from '@mui/icons-material/History';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'History',
  description: 'The history of the Owyhee Motorcycle Club since 1940 — one of Idaho\'s oldest motorsports clubs.',
};

const timeline = [
  { year: '1940', title: 'Club Founded', body: 'The Owyhee Motorcycle Club is established in Boise, Idaho, bringing together motorcycle enthusiasts from across Southwest Idaho.' },
  { year: '1940s–60s', title: 'Early Growth', body: 'The club grows through the post-war era, establishing its facility in the Owyhee foothills and hosting some of the first organized motorcycle competitions in the region.' },
  { year: '1970s–80s', title: 'Motocross Era', body: 'As motocross sweeps the country, OMC builds out its full-sized motocross track and begins hosting AMA-sanctioned events, drawing riders from across the Pacific Northwest.' },
  { year: '1990s–2000s', title: 'Trials Program', body: 'A dedicated trials riding area is added to the facility, attracting a new generation of technical riders and hosting regional trials competitions.' },
  { year: '2022', title: 'National Historic Designation', body: 'The OMC facility is added to the National Register of Historic Places in partnership with Preservation Idaho, recognizing over 80 years of continuous motorsports heritage.' },
  { year: 'Today', title: 'Still Going Strong', body: 'OMC continues to operate as a member-supported club, hosting motocross and trials events open to the public while maintaining year-round access for its members.' },
];

export default function HistoryPage() {
  return (
    <>
      {/* Page header */}
      <Box sx={{ py: { xs: 6, md: 10 }, background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)', borderBottom: '2px solid', borderColor: 'secondary.main' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <HistoryIcon sx={{ color: 'secondary.main', fontSize: 40 }} />
            <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.2em' }}>Est. 1940</Typography>
          </Box>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '5rem' }, mb: 3 }}>Our History</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 620, fontSize: '1.1rem' }}>
            Over 80 years of motorsports in Southwest Idaho. The Owyhee Motorcycle Club is one of the
            oldest continuously-operating motorcycle clubs in the Pacific Northwest.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          {/* Intro */}
          <Box sx={{ maxWidth: 720, mb: 8 }}>
            <Typography variant="h2" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.75rem' } }}>
              A Legacy Built by Riders
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
              The Owyhee Motorcycle Club was founded in 1940 by a group of motorcycle enthusiasts who
              wanted a dedicated place to ride in the Boise area. What started as a small club has
              grown into one of the most respected motorsports facilities in Idaho.
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Throughout its history, OMC has remained entirely member-supported — no corporate
              ownership, no outside funding. The facility exists because members show up to work
              parties, pay their dues, and take pride in what they&apos;ve built together.
            </Typography>
          </Box>

          {/* Timeline */}
          <Typography variant="h2" sx={{ mb: 6, fontSize: { xs: '2rem', md: '2.75rem' } }}>Timeline</Typography>
          <Box sx={{ position: 'relative' }}>
            {/* Vertical line */}
            <Box sx={{ position: 'absolute', left: { xs: 20, md: 120 }, top: 0, bottom: 0, width: 2, backgroundColor: 'rgba(255,255,255,0.12)' }} />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {timeline.map((event) => (
                <Box
                  key={event.year}
                  sx={{ display: 'flex', gap: { xs: 3, md: 6 }, alignItems: 'flex-start', position: 'relative' }}
                >
                  {/* Year label */}
                  <Box sx={{ flexShrink: 0, width: { xs: 40, md: 120 }, textAlign: { xs: 'left', md: 'right' } }}>
                    <Typography
                      variant="h6"
                      sx={{ fontFamily: '"Barlow Condensed", sans-serif', color: 'secondary.main', fontSize: { xs: '0.9rem', md: '1rem' }, lineHeight: 1.2 }}
                    >
                      {event.year}
                    </Typography>
                  </Box>

                  {/* Dot */}
                  <Box sx={{ position: 'relative', flexShrink: 0 }}>
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: 'secondary.main', mt: 0.5, boxShadow: '0 0 0 3px rgba(255,255,255,0.12)' }} />
                  </Box>

                  {/* Content */}
                  <Card sx={{ flex: 1, border: '1px solid rgba(255,255,255,0.08)' }}>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ mb: 1, fontFamily: '"Barlow Condensed", sans-serif' }}>{event.title}</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>{event.body}</Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>

          {/* NPS recognition */}
          <Box
            sx={{
              mt: 10,
              p: { xs: 3, md: 5 },
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 1,
              background: 'linear-gradient(135deg, rgba(77,142,247,0.1) 0%, transparent 100%)',
            }}
          >
            <Typography variant="h3" sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}>
              National Register of Historic Places
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.8, maxWidth: 720 }}>
              In 2022, the OMC facility was added to the National Register of Historic Places through
              a collaborative effort with Preservation Idaho. This designation recognizes the track&apos;s
              significance as one of the longest-running continuously-operated motorsports venues in the
              Pacific Northwest and its role in the cultural and recreational heritage of Southwest Idaho.
              The designation protects the land while allowing normal club operations to continue.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
