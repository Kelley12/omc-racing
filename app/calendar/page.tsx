'use client';

import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { fetchUpcomingEvents, type CalendarEvent } from '@/lib/googleCalendar';

function formatEventDate(start: string, end?: string, allDay?: boolean): string {
  const opts: Intl.DateTimeFormatOptions = allDay
    ? { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }
    : { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', timeZoneName: 'short' };
  const startStr = new Date(start).toLocaleDateString('en-US', opts);
  if (!end) return startStr;
  return startStr;
}

function EventCard({ event }: { event: CalendarEvent }) {
  const date = formatEventDate(event.start, event.end, event.allDay);
  const month = new Date(event.start).toLocaleDateString('en-US', { month: 'short', timeZone: event.allDay ? 'UTC' : undefined }).toUpperCase();
  const day = new Date(event.start).toLocaleDateString('en-US', { day: 'numeric', timeZone: event.allDay ? 'UTC' : undefined });

  return (
    <Card sx={{ display: 'flex', border: '1px solid rgba(255,255,255,0.08)', transition: 'border-color 0.2s', '&:hover': { borderColor: 'rgba(255,255,255,0.2)' } }}>
      {/* Date block */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: 72,
          backgroundColor: 'rgba(77,142,247,0.18)',
          borderRight: '1px solid rgba(255,255,255,0.12)',
          px: 2,
          py: 2,
        }}
      >
        <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 700, lineHeight: 1 }}>
          {month}
        </Typography>
        <Typography variant="h4" sx={{ color: 'white', lineHeight: 1, fontFamily: '"Barlow Condensed", sans-serif' }}>
          {day}
        </Typography>
      </Box>

      <CardContent sx={{ flex: 1, py: 2 }}>
        <Typography variant="h6" sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 700, mb: 0.5, lineHeight: 1.2 }}>
          {event.title}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          {date}
        </Typography>
        {event.location && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
            <LocationOnIcon sx={{ fontSize: 14, color: 'secondary.main' }} />
            <Typography variant="caption" color="text.secondary">{event.location}</Typography>
          </Box>
        )}
        {event.description && (
          <Typography variant="body2" color="text.secondary" sx={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {event.description.replace(/<[^>]*>/g, '')}
          </Typography>
        )}
      </CardContent>

      {event.htmlLink && (
        <Box sx={{ display: 'flex', alignItems: 'center', pr: 2 }}>
          <Button
            component="a"
            href={event.htmlLink}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            endIcon={<OpenInNewIcon fontSize="small" />}
            sx={{ whiteSpace: 'nowrap', fontSize: '0.75rem' }}
          >
            Details
          </Button>
        </Box>
      )}
    </Card>
  );
}

export default function CalendarPage() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID;
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;

    if (!calendarId || !apiKey) {
      setError('Calendar configuration is missing. Please set NEXT_PUBLIC_GOOGLE_CALENDAR_ID and NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY.');
      setLoading(false);
      return;
    }

    fetchUpcomingEvents(calendarId, apiKey, 20)
      .then(setEvents)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* Page header */}
      <Box sx={{ py: { xs: 6, md: 10 }, background: 'linear-gradient(180deg, #1A1A1A 0%, #121212 100%)', borderBottom: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <CalendarMonthIcon sx={{ color: 'secondary.main', fontSize: 40 }} />
            <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.2em' }}>Schedule</Typography>
          </Box>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, mb: 2 }}>
            Event Calendar
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 600 }}>
            Upcoming motocross races, trials events, club meetings, and work parties.
            All times are Mountain Time unless noted.
          </Typography>
        </Container>
      </Box>

      {/* Events list */}
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, flexWrap: 'wrap', gap: 2 }}>
            <Typography variant="h5" sx={{ fontFamily: '"Barlow Condensed", sans-serif' }}>
              Upcoming Events
            </Typography>
            <Chip label="Powered by Google Calendar" size="small" sx={{ opacity: 0.5, fontSize: '0.7rem' }} />
          </Box>

          {loading && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} variant="rectangular" height={100} sx={{ borderRadius: 1 }} />
              ))}
            </Box>
          )}

          {error && (
            <Alert severity="error" sx={{ mb: 4 }}>
              {error}
            </Alert>
          )}

          {!loading && !error && events.length === 0 && (
            <Alert severity="info">No upcoming events found. Check back soon!</Alert>
          )}

          {!loading && !error && events.length > 0 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </Box>
          )}

          <Box sx={{ mt: 6, p: 3, border: '1px solid rgba(255,255,255,0.08)', borderRadius: 1, backgroundColor: 'background.paper' }}>
            <Typography variant="h6" sx={{ mb: 1, fontFamily: '"Barlow Condensed", sans-serif' }}>Register for Events</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Race registration and entry for OMC events is handled through iRaceReady.
            </Typography>
            <Button
              component="a"
              href="https://app.iraceready.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="primary"
              endIcon={<OpenInNewIcon />}
            >
              Register on iRaceReady
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
