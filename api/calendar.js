import https from 'https';

export default async function handler(req, res) {
  const bookingICalUrl = 'https://ical.booking.com/v1/export?t=mock-uuid-villa-posija-ical-feed';

  // Set standard CORS headers to permit frontend access
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    const icalText = await new Promise((resolve, reject) => {
      const request = https.get(bookingICalUrl, { timeout: 4000 }, (response) => {
        if (response.statusCode < 200 || response.statusCode >= 300) {
          reject(new Error(`Failed to fetch: HTTP status code ${response.statusCode}`));
          return;
        }

        let data = '';
        response.on('data', (chunk) => {
          data += chunk;
        });

        response.on('end', () => {
          resolve(data);
        });
      });

      request.on('error', (err) => {
        reject(err);
      });

      request.on('timeout', () => {
        request.destroy();
        reject(new Error('Fetch timeout exceeded'));
      });
    });

    res.setHeader('Content-Type', 'text/calendar');
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
    return res.status(200).send(icalText);
  } catch (error) {
    console.error('Error fetching real calendar iCal feed, falling back to simulated blocks:', error);
    
    // Graceful fallback iCal content to prevent frontend 500 error crashes
    const fallbackICal = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Booking.com//NONSGML Booking.com Calendar//EN
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260708
DTEND;VALUE=DATE:20260715
SUMMARY:Booked - Booking.com
END:VEVENT
END:VCALENDAR`;

    res.setHeader('Content-Type', 'text/calendar');
    return res.status(200).send(fallbackICal);
  }
}
