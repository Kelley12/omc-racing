export type CalendarEvent = {
  id: string;
  title: string;
  start: string;
  end?: string;
  allDay: boolean;
  description?: string;
  location?: string;
  htmlLink?: string;
};

const CALENDAR_API_BASE = 'https://www.googleapis.com/calendar/v3/calendars';

export async function fetchUpcomingEvents(
  calendarId: string,
  apiKey: string,
  maxResults = 10
): Promise<CalendarEvent[]> {
  const now = new Date().toISOString();
  const url = new URL(`${CALENDAR_API_BASE}/${encodeURIComponent(calendarId)}/events`);
  url.searchParams.set('key', apiKey);
  url.searchParams.set('timeMin', now);
  url.searchParams.set('maxResults', String(maxResults));
  url.searchParams.set('singleEvents', 'true');
  url.searchParams.set('orderBy', 'startTime');

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`Google Calendar API error: ${res.status}`);

  const data = await res.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (data.items ?? []).map((item: any): CalendarEvent => ({
    id: item.id,
    title: item.summary ?? 'Event',
    start: item.start?.dateTime ?? item.start?.date ?? '',
    end: item.end?.dateTime ?? item.end?.date,
    allDay: !item.start?.dateTime,
    description: item.description,
    location: item.location,
    htmlLink: item.htmlLink,
  }));
}
