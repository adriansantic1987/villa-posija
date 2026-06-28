const { test, expect } = require('@playwright/test');

test.describe('Villa Posija - Mobile Booking & UX Verification', () => {
  test.beforeEach(async ({ page }) => {
    // Set playwright-testing flag in localStorage before loading page
    await page.addInitScript(() => {
      window.localStorage.setItem('playwright-testing', 'true');
    });

    // Intercept api/calendar requests to mock a stable calendar iCal feed
    await page.route('**/api/calendar', route => {
      route.fulfill({
        status: 200,
        contentType: 'text/calendar',
        body: `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Booking.com//NONSGML Booking.com Calendar//EN
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260708
DTEND;VALUE=DATE:20260715
SUMMARY:Booked - Booking.com
END:VEVENT
END:VCALENDAR`
      });
    });

    // Navigate to the local server base URL
    await page.goto('/');
    // Accept cookie consent to prevent overlaps
    const acceptBtn = page.locator('#cookieAcceptAll');
    if (await acceptBtn.isVisible()) {
      await acceptBtn.click();
    }
  });

  test('should have zero horizontal scroll/overflow on mobile', async ({ page }) => {
    // Scroll through the page to check for dynamic overflows
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);

    // Verify page horizontal scroll position is locked at 0
    const scrollX = await page.evaluate(() => window.scrollX);
    expect(scrollX).toBe(0);

    // Verify main containment bounds match viewport client width
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);

    const appWrapperScrollWidth = await page.locator('.app-wrapper').evaluate(el => el.scrollWidth);
    const appWrapperClientWidth = await page.locator('.app-wrapper').evaluate(el => el.clientWidth);
    expect(appWrapperScrollWidth).toBeLessThanOrEqual(appWrapperClientWidth);
  });

  test('should disable hyphenation on headings and paragraphs', async ({ page }) => {
    // Inspect CSS properties of headings and paragraphs
    const elements = page.locator('h1, h2, h3, p');
    const count = await elements.count();
    
    for (let i = 0; i < count; i++) {
      const hyphens = await elements.nth(i).evaluate(el => window.getComputedStyle(el).hyphens);
      const wordBreak = await elements.nth(i).evaluate(el => window.getComputedStyle(el).wordBreak);
      const overflowWrap = await elements.nth(i).evaluate(el => window.getComputedStyle(el).overflowWrap);
      
      expect(hyphens).toBe('none');
      expect(wordBreak).toBe('keep-all');
      expect(overflowWrap).toBe('break-word');
    }
  });

  test('should successfully complete the booking form and trigger WhatsApp redirect', async ({ page }) => {
    // Scroll down to the contact/booking form
    const contactSection = page.locator('#contact');
    await contactSection.scrollIntoViewIfNeeded();

    // Fill out the user's name
    await page.fill('#formName', 'John Doe');

    // Fill out special requests message
    await page.fill('#formMessage', 'Looking forward to a wonderful stay at Villa Posija!');

    // Click next month in the calendar widget to guarantee plenty of available days
    await page.click('#calendarNext');
    await page.waitForTimeout(200);

    // Programmatically select two dates at least 7 nights apart in the next month
    await page.evaluate(() => {
      const availableDays = Array.from(document.querySelectorAll('.calendar-day.available'));
      for (let i = 0; i < availableDays.length; i++) {
        const checkInStr = availableDays[i].getAttribute('data-date');
        const checkInDate = new Date(checkInStr);
        for (let j = i + 1; j < availableDays.length; j++) {
          const checkOutStr = availableDays[j].getAttribute('data-date');
          const checkOutDate = new Date(checkOutStr);
          const diffNights = Math.ceil(Math.abs(checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
          if (diffNights >= 7) {
            // Click check-in day and check-out day
            availableDays[i].click();
            availableDays[j].click();
            return;
          }
        }
      }
    });

    // Start waiting for the popup before clicking the button
    const popupPromise = page.waitForEvent('popup');

    // Click the WhatsApp submission button
    const submitBtn = page.locator('button[type="submit"]');
    await submitBtn.click();

    // Await the popup page to be opened
    const popup = await popupPromise;

    // Verify the URL of the popup page
    const popupUrl = popup.url();
    expect(popupUrl).toContain('https://wa.me/385994111894');
    expect(popupUrl).toContain('text=');
    expect(popupUrl).toContain(encodeURIComponent('John Doe'));
    expect(popupUrl).toContain(encodeURIComponent('Villa Posija'));
  });
});
