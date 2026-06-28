// Vercel Serverless Function proxying Booking.com iCal feed to bypass CORS
export default async function handler(req, res) {
  const bookingICalUrl = 'https://ical.booking.com/v1/export?t=mock-uuid-villa-posija-ical-feed';

  try {
    const response = await fetch(bookingICalUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch iCal feed: ${response.status} ${response.statusText}`);
    }

    const icalText = await response.text();

    res.setHeader('Content-Type', 'text/calendar');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
    
    return res.status(200).send(icalText);
  } catch (error) {
    console.error('Error fetching calendar iCal feed:', error);
    return res.status(500).json({ error: 'Failed to fetch calendar data' });
  }
}
