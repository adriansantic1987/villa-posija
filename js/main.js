/* ==========================================================================
   VILLA POSIJA - COMPREHENSIVE INTERACTIVE SCRIPT & ICAL CALENDAR
   ========================================================================== */

// --- Cookie Helper Functions ---
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

/// --- Translation Dictionary ---
const translations = {
  en: {
    "meta-title": "Villa Posija | Luxury Stone Villa in Kras, Krk Island",
    nav_about: "About",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    nav_book_now: "Book Now",
    hero_subtitle: "Premium Adriatic Escape",
    hero_title: "A Modern Oasis of Peace and Luxury in the Heart of Krk",
    hero_text: "Villa Posija offers a perfect blend of elegance, comfort, and complete privacy in the idyllic village of Kras. Surrounded by beautiful nature and a landscaped garden, this exclusive villa provides a peaceful retreat from city noise, with everything you need close at hand.",
    hero_cta_explore: "Explore Villa",
    hero_cta_availability: "View Availability",
    about_subtitle: "The Retreat",
    about_heading: "Elegant Interior and Spacious Terrace for the Perfect Getaway",
    about_desc: "The interior of Villa Posija is designed with high-end comfort and space in mind. The bright, open-plan living area features large panoramic doors that lead directly to the spacious terrace, seamlessly connecting the indoor and outdoor spaces.<br><br>The highlight of the outdoor area is the large private pool surrounded by comfortable loungers, perfect for cooling off during warm summer days. Next to the pool, a covered outdoor dining area and a modern barbecue await, ideal for enjoying Mediterranean meals in the gentle breeze.",
    about_amenities_title: "Amenities That Matter: Entertainment and Relaxation Combined",
    about_amenities_desc: "Villa Posija comfortably accommodates up to 10 guests in spacious, fully air-conditioned bedrooms, each featuring an en-suite modern bathroom and a flat-screen TV.<br><br>A standout feature of the villa is the dedicated entertainment room, complete with a pool table, darts, a PlayStation console, board games, and a wine fridge – making it the perfect spot for relaxing evenings with family and friends after a day by the pool or at the beach.",
    about_cta: "Contact Guest Services",
    gallery_subtitle: "Visual Splendor",
    gallery_title: "Experience Villa Posija",
    gallery_filter_exterior: "Exterior",
    gallery_filter_interior: "Interior",
    gallery_cat_exterior: "Exterior",
    gallery_cat_interior: "Interior",
    gallery_t_pool: "Heated Infinity Pool",
    gallery_t_bbq: "Barbecue & Dining Pergola",
    gallery_t_facade: "Villa Facade at Sunset",
    gallery_t_balcony: "Scenic Balcony View",
    gallery_t_guvno: "Traditional Stone Circle (Guvno)",
    gallery_t_playground: "Playground & Sports Area",
    gallery_t_far1: "Panoramic Estate View",
    gallery_t_far2: "Aerial Villa & Countryside",
    gallery_t_far3: "Distant Villa Perspective",
    gallery_t_kitchen: "Fully Equipped Kitchen",
    gallery_t_dining: "Elegant Dining Area",
    gallery_t_living: "Grand Living Room",
    gallery_t_entertainment: "Entertainment Room",
    gallery_t_soba1: "Master Suite Sanctuary",
    gallery_t_soba2: "Deluxe Bedroom 2",
    gallery_t_soba3: "Premium Bedroom 3",
    gallery_t_soba4: "Cozy Guest Room 4",
    gallery_t_wc1: "En-suite Bathroom 1",
    gallery_t_wc2: "En-suite Bathroom 2",
    gallery_t_wc3: "En-suite Bathroom 3",
    gallery_t_wc4: "En-suite Bathroom 4",
    btn_view_more: "View More",
    btn_view_less: "View Less",
    faq_subtitle: "Common Inquiries",
    faq_title: "Frequently Asked Questions",
    faq_q1: "What are the standard Check-in and Check-out times?",
    faq_a1: "Check-in is from 16:00, and Check-out is until 10:00. This buffer allows our professional housekeeping team to perform a deep-cleaning and sanitize the villa before each guest arrival, ensuring our premium cleanliness standards are fully maintained.",
    faq_q2: "Are pets allowed at the villa?",
    faq_a2: "To preserve the high-end interior fabrics, premium hardwood floor finishings, and accommodate guests with severe allergies, pets are strictly not allowed at Villa Posija. We appreciate your understanding in helping us maintain the pristine state of the property.",
    faq_q3: "Is parking available and is there a charging station for electric vehicles?",
    faq_a3: "Yes, Villa Posija includes secure private parking for multiple vehicles right in front of the villa. We also offer a free Type 2 electric vehicle (EV) charging station for all our guests.",
    faq_q4: "Is there a minimum stay requirement?",
    faq_a4: "Yes, to provide a complete, high-end experience, Villa Posija has a minimum stay requirement of 7 nights. Bookings can be made directly via our availability calendar and confirmed through a WhatsApp inquiry with guest services.",
    contact_subtitle: "Inquiries",
    contact_heading: "Begin Your Exclusive Journey",
    contact_desc: "Contact our dedicated guest relations team to request your reservations, customize your itinerary, or arrange VIP private concierge services in Kras, Krk.",
    contact_lbl_location: "Location",
    contact_lbl_reservations: "Reservations",
    contact_lbl_email: "E-mail Address",
    map_title: "Find Villa Posija",
    map_sub: "Kras, Krk Island, Croatia",
    map_btn: "Open Google Maps",
    form_label_name: "Full Name",
    calendar_label: "Select Availability / Dates",
    day_mon: "Mon",
    day_tue: "Tue",
    day_wed: "Wed",
    day_thu: "Thu",
    day_fri: "Fri",
    day_sat: "Sat",
    day_sun: "Sun",
    legend_available: "Available",
    legend_booked: "Booked",
    legend_selected: "Selected",
    lbl_checkin_date: "Check-In Date",
    lbl_checkout_date: "Check-Out Date",
    form_label_message: "Special Requests / Message",
    btn_book_wa: "Book Now via WhatsApp",
    wa_notice: "*You will be redirected to WhatsApp to confirm details directly.",
    success_title: "Opening WhatsApp",
    success_message: "We are opening WhatsApp in a new tab to submit your reservation request for the selected dates. If the page did not open automatically, please click below.",
    btn_manual_wa: "Open WhatsApp Manually",
    btn_close_window: "Close Window",
    footer_brand_desc: "Send us a direct inquiry via WhatsApp to book your stay and secure an unforgettable holiday at Villa Posija in Kras on the island of Krk.",
    footer_nav_hdr: "Navigations",
    footer_link_home: "Home",
    footer_link_about: "About the Villa",
    footer_link_gallery: "Photo Gallery",
    footer_link_contact: "Contact / Booking",
    footer_connect_hdr: "Stay Connected",
    footer_connect_desc: "Follow our social media channels for luxury design inspirations and seasonal availability updates in Croatia.",
    footer_copy: "&copy; 2026 Villa Posija. All Rights Reserved.",
    footer_designed_by: "Designed by <a href=\"#hero\" class=\"footer-studio-link\">Antigravity Studio</a>",
    
    // Dynamic JS Translations
    select_checkin: "Select Check-in Date",
    select_checkout: "Select Check-out Date",
    min_stay_warning: "Minimum stay at Villa Posija is 7 nights. Please select a longer period.",
    past_date: "Past Date",
    booked_date: "Booked Date",
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    whatsapp_opening: "OPENING WHATSAPP...",
    cookie_title: "We value your privacy",
    cookie_desc: "We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking \"Accept All\", you consent to our use of cookies.",
    cookie_btn_accept: "Accept All",
    cookie_btn_customize: "Customize",
    cookie_modal_title: "Cookie Preferences",
    cookie_modal_desc: "Customize your cookie preferences. Essential cookies are required to run the site and cannot be disabled.",
    cookie_lbl_essential: "Essential Cookies",
    cookie_desc_essential: "Required for basic website functionality, language selection, and theme settings.",
    cookie_lbl_analytics: "Analytics Cookies",
    cookie_desc_analytics: "Help us analyze website traffic and user behavior to continuously improve our services.",
    cookie_lbl_marketing: "Marketing Cookies",
    cookie_desc_marketing: "Enable personalized features, social sharing, and targeted promotional content.",
    cookie_btn_save: "Save Preferences",
    cookie_always_active: "Always Active"
  },
  hr: {
    "meta-title": "Villa Posija | Luksuzna kamena vila u Krasu, otok Krk",
    nav_about: "O vili",
    nav_gallery: "Galerija",
    nav_contact: "Kontakt",
    nav_book_now: "Rezerviraj",
    hero_subtitle: "Vrhunski jadranski bijeg",
    hero_title: "Moderna oaza mira i luksuza u srcu Krka",
    hero_text: "Villa Posija nudi savršen spoj elegancije, udobnosti i potpune privatnosti u idiličnom i mirnom mjestu Kras. Okružena prekrasnom prirodom i bogato uređenim vrtom, ova ekskluzivna vila pruža bijeg od gradske buke, dok vam je sve što trebate nadohvat ruke.",
    hero_cta_explore: "Istražite vilu",
    hero_cta_availability: "Slobodni termini",
    about_subtitle: "Utočište",
    about_heading: "Elegantan interijer i prostrana terasa za savršen odmor",
    about_desc: "Unutrašnjost Ville Posije osmišljena je s fokusom na vrhunsku udobnost i prostranost. Svijetli, otvoreni dnevni boravak s velikim panoramskim vratima izravno se povezuje s prostranom vanjskom terasom, stvarajući savršen sklad unutarnjeg i vanjskog prostora.<br><br>Srce eksterijera je veliki privatni bazen okružen udobnim ležaljkama, idealan za osvježenje tijekom toplih ljetnih dana. Odmah uz bazen nalazi se natkrivena vanjska blagovaonica i moderan roštilj, stvoreni za uživanje u mediteranskim jelima na laganom ljetnom povjetarcu.",
    about_amenities_title: "Sadržaji koji čine razliku: Zabava i opuštanje na jednom mjestu",
    about_amenities_desc: "Villa Posija nudi smještaj za do 10 osoba u prostranim, potpuno klimatiziranim spavaćim sobama, od kojih svaka ima vlastitu modernu kupaonicu i TV.<br><br>Posebna zvijezda vile je odvojena soba za zabavu i igru, opremljena stolom za biljar, pikadom, PlayStation konzolom, društvenim igrama i vinskim hladnjakom – savršeno mjesto za opuštene večeri s obitelji i prijateljima nakon dana provedenog na bazenu ili plaži.",
    about_cta: "Kontaktirajte recepciju",
    gallery_subtitle: "Vizualni sjaj",
    gallery_title: "Doživite Villu Posija",
    gallery_filter_exterior: "Eksterijer",
    gallery_filter_interior: "Interijer",
    gallery_cat_exterior: "Eksterijer",
    gallery_cat_interior: "Interijer",
    gallery_t_pool: "Grijani preljevni bazen",
    gallery_t_bbq: "Kamin i vanjska blagovaonica",
    gallery_t_facade: "Fasada vile u sumrak",
    gallery_t_balcony: "Pogled s balkona",
    gallery_t_guvno: "Tradicionalno guvno",
    gallery_t_playground: "Igralište i sportska zona",
    gallery_t_far1: "Panoramski pogled na posjed",
    gallery_t_far2: "Vila i slikoviti krajolik",
    gallery_t_far3: "Perspektiva vile iz daljine",
    gallery_t_kitchen: "Gourmet kuhinja",
    gallery_t_dining: "Prostrana blagovaonica",
    gallery_t_living: "Luksuzni dnevni boravak",
    gallery_t_entertainment: "Soba za zabavu i razonodu",
    gallery_t_soba1: "Glavna spavaća soba",
    gallery_t_soba2: "Deluxe spavaća soba 2",
    gallery_t_soba3: "Premium spavaća soba 3",
    gallery_t_soba4: "Udobna spavaća soba 4",
    gallery_t_wc1: "Kupaonica 1",
    gallery_t_wc2: "Kupaonica 2",
    gallery_t_wc3: "Kupaonica 3",
    gallery_t_wc4: "Kupaonica 4",
    btn_view_more: "Prikaži više",
    btn_view_less: "Prikaži manje",
    faq_subtitle: "Česta pitanja",
    faq_title: "Često postavljana pitanja",
    faq_q1: "Koje je standardno vrijeme prijave i odjave?",
    faq_a1: "Prijava je od 16:00, a odjava do 10:00. Ovo vrijeme omogućuje našem profesionalnom osoblju da temeljito očisti i dezinficira vilu prije dolaska sljedećih gostiju, osiguravajući najviše standarde čistoće.",
    faq_q2: "Jesu li kućni ljubimci dopušteni u vili?",
    faq_a2: "Kako bismo očuvali luksuzne tkanine u interijeru, vrhunski drveni pod te osigurali ugodan boravak gostima s alergijama, kućni ljubimci u Villi Posija strogo su zabranjeni. Cijenimo vaše razumijevanje.",
    faq_q3: "Je li osiguran parking i postoji li punionica za električna vozila?",
    faq_a3: "Da, Villa Posija ima osiguran privatni parking za više vozila ispred same vile. Za sve naše goste na raspolaganju je i besplatna Type 2 punionicu za električna vozila (EV).",
    faq_q4: "Postoji li pravilo o minimalnom trajanju boravka?",
    faq_a4: "Da, kako bismo pružili vrhunsko iskustvo, minimalan boravak u Villi Posija iznosi 7 noćenja. Rezervacije se vrše izravno putem našeg kalendara i potvrđuju slanjem upita na WhatsApp.",
    contact_subtitle: "Upiti",
    contact_heading: "Započnite svoje ekskluzivno putovanje",
    contact_desc: "Kontaktirajte naš tim za odnose s gostima kako biste rezervirali smještaj, prilagodili svoj plan putovanja ili dogovorili VIP usluge u Krasu na Krku.",
    contact_lbl_location: "Lokacija",
    contact_lbl_reservations: "Rezervacije",
    contact_lbl_email: "E-mail adresa",
    map_title: "Pronađite Villu Posija",
    map_sub: "Kras, otok Krk, Hrvatska",
    map_btn: "Otvori Google karte",
    form_label_name: "Ime i prezime",
    calendar_label: "Odaberite slobodne termine",
    day_mon: "Pon",
    day_tue: "Uto",
    day_wed: "Sri",
    day_thu: "Čet",
    day_fri: "Pet",
    day_sat: "Sub",
    day_sun: "Ned",
    legend_available: "Slobodno",
    legend_booked: "Zauzeto",
    legend_selected: "Odabrano",
    lbl_checkin_date: "Datum prijave",
    lbl_checkout_date: "Datum odjave",
    form_label_message: "Posebni zahtvi / Poruka",
    btn_book_wa: "Rezerviraj putem WhatsAppa",
    wa_notice: "*Bit ćete preusmjereni na WhatsApp radi potvrde detalja.",
    success_title: "Otvaranje WhatsAppa",
    success_message: "Otvaramo WhatsApp u novom prozoru kako biste poslali upit za rezervaciju za odabrane datume. Ako se stranica ne otvori automatski, kliknite ispod.",
    btn_manual_wa: "Ručno otvori WhatsApp",
    btn_close_window: "Zatvori prozor",
    footer_brand_desc: "Pošaljite nam izravan upit putem WhatsAppa kako biste rezervirali svoj termin i osigurali nezaboravan odmor u Villi Posiji u Krasu na otoku Krku.",
    footer_nav_hdr: "Navigacija",
    footer_link_home: "Početna",
    footer_link_about: "O vili",
    footer_link_gallery: "Galerija slika",
    footer_link_contact: "Kontakt / Rezervacija",
    footer_connect_hdr: "Povežite se s nama",
    footer_connect_desc: "Pratite naše profile na društvenim mrežama za luksuzne dizajnerske inspiracije i novosti o slobodnim terminima.",
    footer_copy: "&copy; 2026 Villa Posija. Sva prava pridržana.",
    footer_designed_by: "Dizajnirao <a href=\"#hero\" class=\"footer-studio-link\">Antigravity Studio</a>",
    
    // Dynamic JS Translations
    select_checkin: "Odaberite datum prijave",
    select_checkout: "Odaberite datum odjave",
    min_stay_warning: "Minimalan boravak u Villi Posija je 7 noćenja. Molimo odaberite duži period.",
    past_date: "Prošli datum",
    booked_date: "Zauzet datum",
    months: ['Siječanj', 'Veljača', 'Ožujak', 'Travanj', 'Svibanj', 'Lipanj', 'Srpanj', 'Kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac'],
    whatsapp_opening: "OTVARANJE WHATSAPPA...",
    cookie_title: "Cijenimo vašu privatnost",
    cookie_desc: "Koristimo kolačiće kako bismo poboljšali vaše iskustvo pregledavanja, prikazivali personalizirani sadržaj i analizirali naš promet. Klikom na \"Prihvati sve\", pristajete na našu upotrebu kolačića.",
    cookie_btn_accept: "Prihvati sve",
    cookie_btn_customize: "Prilagodi",
    cookie_modal_title: "Postavke kolačića",
    cookie_modal_desc: "Prilagodite svoje postavke kolačića. Neophodni kolačići potrebni su za rad web stranice i ne mogu se isključiti.",
    cookie_lbl_essential: "Neophodni kolačići",
    cookie_desc_essential: "Potrebni za osnovnu funkcionalnost web stranice, odabir jezika i postavke teme.",
    cookie_lbl_analytics: "Analitički kolačići",
    cookie_desc_analytics: "Pomažu nam analizirati promet na web stranici i ponašanje korisnika kako bismo poboljšali uslugu.",
    cookie_lbl_marketing: "Marketinški kolačići",
    cookie_desc_marketing: "Omogućuju personalizirane značajke, dijeljenje na društvenim mrežama i ciljani promotivni sadržaj.",
    cookie_btn_save: "Spremi odabir",
    cookie_always_active: "Uvijek aktivno"
  },
  de: {
    "meta-title": "Villa Posija | Luxus-Steinvilla in Kras, Insel Krk",
    nav_about: "Über uns",
    nav_gallery: "Galerie",
    nav_contact: "Kontakt",
    nav_book_now: "Buchen",
    hero_subtitle: "Exklusiver Rückzugsort an der Adria",
    hero_title: "Eine moderne Oase der Ruhe und des Luxus im Herzen von Krk",
    hero_text: "Die Villa Posija bietet eine perfekte Mischung aus Eleganz, Komfort und absoluter Privatsphäre im idyllischen Dorf Kras. Umgeben von wunderschöner Natur und einem gepflegten Garten bietet diese exklusive Villa einen ruhigen Rückzugsort vom Stadtlärm, während alles, was Sie brauchen, in greifbarer Nähe ist.",
    hero_cta_explore: "Villa erkunden",
    hero_cta_availability: "Verfügbarkeit prüfen",
    about_subtitle: "Das Anwesen",
    about_heading: "Eleganter Innenbereich und großzügige Terrasse für den perfekten Urlaub",
    about_desc: "Das Interieur der Villa Posija wurde mit dem Fokus auf erstklassigen Komfort und Großzügigkeit gestaltet. Der helle, offene Wohnbereich mit großen Panoramatüren verbindet sich direkt mit der weitläufigen Außenterrasse und schafft so eine perfekte Harmonie zwischen Innen- und Außenraum.<br><br>Das Herzstück des Außenbereichs ist der große private Pool, umgeben von bequemen Liegestühlen – ideal für eine Abkühlung an warmen Sommertagen. Direkt neben dem Pool erwarten Sie ein überdachter Essbereich im Freien und ein moderner Grill, perfekt um mediterrane Gerichte bei einer leichten Sommerbrise zu genießen.",
    about_amenities_title: "Ausstattung, die überzeugt: Unterhaltung und Entspannung vereint",
    about_amenities_desc: "Die Villa Posija bietet bequem Platz für bis zu 10 Gäste in geräumigen, voll klimatisierten Schlafzimmern, die jeweils mit einem modernen eigenen Bad und einem Flachbild-TV ausgestattet sind.<br><br>Ein besonderes Highlight der Villa ist der separate Spiel- und Unterhaltungsraum, komplett mit Billardtisch, Darts, PlayStation-Konsole, Gesellschaftsspielen und einem Weinkühlschrank – der perfekte Ort für entspannte Abende mit Familie und Freunden nach einem Tag am Pool oder am Strand.",
    about_cta: "Gästeservice kontaktieren",
    gallery_subtitle: "Visuelle Pracht",
    gallery_title: "Erleben Sie die Villa Posija",
    gallery_filter_exterior: "Außenbereich",
    gallery_filter_interior: "Innenbereich",
    gallery_cat_exterior: "Außenbereich",
    gallery_cat_interior: "Innenbereich",
    gallery_t_pool: "Beheizter Infinity-Pool",
    gallery_t_bbq: "Grill- & Essbereich",
    gallery_t_facade: "Villen-Fassade bei Sonnenuntergang",
    gallery_t_balcony: "Balkonaussicht",
    gallery_t_guvno: "Traditioneller Steinkreis (Guvno)",
    gallery_t_playground: "Spielplatz & Sportbereich",
    gallery_t_far1: "Panoramablick auf das Anwesen",
    gallery_t_far2: "Villa & malerische Landschaft",
    gallery_t_far3: "Villa-Perspektive aus der Ferne",
    gallery_t_kitchen: "Gourmet-Küche",
    gallery_t_dining: "Eleganter Essbereich",
    gallery_t_living: "Luxuriöses Wohnzimmer",
    gallery_t_entertainment: "Freizeit- & Unterhaltungsraum",
    gallery_t_soba1: "Master-Suite",
    gallery_t_soba2: "Deluxe Schlafzimmer 2",
    gallery_t_soba3: "Premium Schlafzimmer 3",
    gallery_t_soba4: "Gästezimmer 4",
    gallery_t_wc1: "Badezimmer 1",
    gallery_t_wc2: "Badezimmer 2",
    gallery_t_wc3: "Badezimmer 3",
    gallery_t_wc4: "Badezimmer 4",
    btn_view_more: "Mehr anzeigen",
    btn_view_less: "Weniger anzeigen",
    faq_subtitle: "Häufige Fragen",
    faq_title: "Häufig gestellte Fragen",
    faq_q1: "Wie sind die standardmäßigen An- und Abreisezeiten?",
    faq_a1: "Der Check-in ist ab 16:00 Uhr und der Check-out bis 10:00 Uhr möglich. Dieser Zeitpuffer ermöglicht es unserem Reinigungsteam, die Villa vor der Ankunft neuer Gäste gründlich zu reinigen, um unsere hohen Sauberkeitsstandards zu gewährleisten.",
    faq_q2: "Sind Haustiere in der Villa erlaubt?",
    faq_a2: "Um die hochwertigen Stoffe im Innenbereich und die edlen Holzböden zu schonen sowie Gästen mit Tierhaarallergien einen angenehmen Aufenthalt zu ermöglichen, sind Haustiere in der Villa Posija strengstens verboten. Wir danken Ihnen für Ihr Verständnis.",
    faq_q3: "Gibt es Parkplätze und eine Ladestation für Elektrofahrzeuge?",
    faq_a3: "Ja, die Villa Posija verfügt über einen gesicherten Privatparkplatz für mehrere Fahrzeuge direkt vor der Villa. Zudem steht allen unseren Gästen eine kostenfreie Typ-2-Ladestation für Elektrofahrzeuge (EV) zur Verfügung.",
    faq_q4: "Gibt es eine Mindestaufenthaltsdauer?",
    faq_a4: "Ja, um ein exklusives Urlaubserlebnis zu gewährleisten, gilt in der Villa Posija ein Mindestaufenthalt von 7 Nächten. Buchungen können direkt über den Belegungskalender vorgenommen und per WhatsApp-Anfrage bestätigt werden.",
    contact_subtitle: "Anfragen",
    contact_heading: "Beginnen Sie Ihre Reise",
    contact_desc: "Kontaktieren Sie unser Gäteservice-Team, um Reservierungen vorzunehmen, Ihre Reiseroute zu planen oder VIP-Services in Kras, Krk zu buchen.",
    contact_lbl_location: "Standort",
    contact_lbl_reservations: "Buchungen",
    contact_lbl_email: "E-Mail-Adresse",
    map_title: "Finden Sie die Villa Posija",
    map_sub: "Kras, Insel Krk, Kroatien",
    map_btn: "In Google Maps öffnen",
    form_label_name: "Vollständiger Name",
    calendar_label: "Reisedaten auswählen",
    day_mon: "Mo",
    day_tue: "Di",
    day_wed: "Mi",
    day_thu: "Do",
    day_fri: "Fr",
    day_sat: "Sa",
    day_sun: "So",
    legend_available: "Verfügbar",
    legend_booked: "Gebucht",
    legend_selected: "Ausgewählt",
    lbl_checkin_date: "Anreisedatum",
    lbl_checkout_date: "Abreisedatum",
    form_label_message: "Besondere Wünsche / Nachricht",
    btn_book_wa: "Jetzt über WhatsApp buchen",
    wa_notice: "*Sie werden zur Bestätigung direkt zu WhatsApp weitergeleitet.",
    success_title: "WhatsApp wird geöffnet",
    success_message: "Wir öffnen WhatsApp in einem neuen Tab, um Ihre Anfrage zu senden. Falls dies nicht automatisch geschieht, klicken Sie bitte unten.",
    btn_manual_wa: "WhatsApp manuell öffnen",
    btn_close_window: "Fenster schließen",
    footer_brand_desc: "Senden Sie uns eine direkte Anfrage über WhatsApp, um Ihren Aufenthalt zu buchen und sich einen unvergesslichen Urlaub in der Villa Posija in Kras auf der Insel Krk zu sichern.",
    footer_nav_hdr: "Navigation",
    footer_link_home: "Startseite",
    footer_link_about: "Über die Villa",
    footer_link_gallery: "Fotogalerie",
    footer_link_contact: "Kontakt / Buchung",
    footer_connect_hdr: "Social Media",
    footer_connect_desc: "Folgen Sie uns auf unseren Kanälen für Impressionen und aktuelle Informationen zur Verfügbarkeit.",
    footer_copy: "&copy; 2026 Villa Posija. Alle Rechte vorbehalten.",
    footer_designed_by: "Gestaltet von <a href=\"#hero\" class=\"footer-studio-link\">Antigravity Studio</a>",
    
    // Dynamic JS Translations
    select_checkin: "Anreisedatum wählen",
    select_checkout: "Abreisedatum wählen",
    min_stay_warning: "Der Mindestaufenthalt in der Villa Posija beträgt 7 Nächte. Bitte wählen Sie einen längeren Zeitraum.",
    past_date: "Vergangenes Datum",
    booked_date: "Gebuchtes Datum",
    months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    whatsapp_opening: "WHATSAPP WIRD GEÖFFNET...",
    cookie_title: "Wir schätzen Ihre Privatsphäre",
    cookie_desc: "Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern, personalisierte Inhalte bereitzustellen und unseren Datenverkehr zu analysieren. Durch Klicken auf „Alle akzeptieren“ stimmen Sie der Verwendung von Cookies zu.",
    cookie_btn_accept: "Alle akzeptieren",
    cookie_btn_customize: "Anpassen",
    cookie_modal_title: "Cookie-Einstellungen",
    cookie_modal_desc: "Passen Sie Ihre Cookie-Einstellungen an. Essenzielle Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden.",
    cookie_lbl_essential: "Essenzielle Cookies",
    cookie_desc_essential: "Erforderlich für die grundlegende Funktionalität der Website, Sprachauswahl und Theme-Einstellungen.",
    cookie_lbl_analytics: "Analytische Cookies",
    cookie_desc_analytics: "Helfen uns, den Website-Verkehr und das Nutzerverhalten zu analysieren, um unsere Dienste stetig zu verbessern.",
    cookie_lbl_marketing: "Marketing-Cookies",
    cookie_desc_marketing: "Ermöglichen personalisierte Funktionen, das Teilen in sozialen Netzwerken und zielgerichtete Werbeinhalte.",
    cookie_btn_save: "Auswahl speichern",
    cookie_always_active: "Immer aktiv"
  },
  it: {
    "meta-title": "Villa Posija | Villa di lusso in pietra a Kras, isola di Krk",
    nav_about: "La villa",
    nav_gallery: "Galleria",
    nav_contact: "Contatto",
    nav_book_now: "Prenota",
    hero_subtitle: "Fuga esclusiva sull'Adriatico",
    hero_title: "Una moderna oasi di pace e lusso nel cuore di Krk",
    hero_text: "Villa Posija offre un perfetto connubio tra eleganza, comfort e totale privacy nell'idilliaco villaggio di Kras. Circondata da una splendida natura e da un giardino curato, questa villa esclusiva offre un rifugio tranquillo dal rumore della città, con tutto ciò di cui avete bisogno a portata di mano.",
    hero_cta_explore: "Esplora la villa",
    hero_cta_availability: "Verifica disponibilità",
    about_subtitle: "Il rifugio",
    about_heading: "Interni eleganti e terrazza spaziosa per una vacanza perfetta",
    about_desc: "L'interno di Villa Posija è progettato all'insegna del massimo comfort e della spaziosità. La luminosa zona giorno open-space, dotata di ampie vetrate panoramiche, si collega direttamente alla spaziosa terrazza esterna, creando una perfetta armonia tra spazi interni ed esterni.<br><br>Il cuore dell'area esterna è la grande piscina privata circondata da comodi lettini, ideale per rinfrescarsi nelle calde giornate estive. Accanto alla piscina, una zona pranzo all'aperto coperta e un moderno barbecue vi attendono per gustare piatti mediterranei accarezzati dalla piacevole brezza estiva.",
    about_amenities_title: "Servizi che fanno la differenza: intrattenimento e relax in un unico posto",
    about_amenities_desc: "Villa Posija può ospitare comodamente fino a 10 persone in ampie camere da letto completamente climatizzate, ognuna dotata di bagno privato moderno e TV a schermo piatto.<br><br>Il fiore all'occhiello della villa è la sala giochi dedicata, dotata di tavolo da biliardo, freccette, console PlayStation, giochi da tavolo e cantinetta per i vini: il luogo ideale per trascorrere serate rilassanti con la famiglia e gli amici dopo una giornata trascorsa in piscina o in spiaggia.",
    about_cta: "Contatta il servizio ospiti",
    gallery_subtitle: "Splendore visivo",
    gallery_title: "Scoprite Villa Posija",
    gallery_filter_exterior: "Esterni",
    gallery_filter_interior: "Interni",
    gallery_cat_exterior: "Esterni",
    gallery_cat_interior: "Interni",
    gallery_t_pool: "Piscina a sfioro riscaldata",
    gallery_t_bbq: "Area barbecue & pranzo",
    gallery_t_facade: "Facciata della villa al tramonto",
    gallery_t_balcony: "Vista dal balcone",
    gallery_t_guvno: "Cerchio di pietra tradizionale (Guvno)",
    gallery_t_playground: "Parco giochi e area sportiva",
    gallery_t_far1: "Vista panoramica della tenuta",
    gallery_t_far2: "Villa e paesaggio collinare",
    gallery_t_far3: "Prospettiva della villa in lontananza",
    gallery_t_kitchen: "Cucina gourmet",
    gallery_t_dining: "Elegante sala da pranzo",
    gallery_t_living: "Soggiorno di lusso",
    gallery_t_entertainment: "Sala da svago e intrattenimento",
    gallery_t_soba1: "Master suite",
    gallery_t_soba2: "Camera da letto Deluxe 2",
    gallery_t_soba3: "Camera da letto Premium 3",
    gallery_t_soba4: "Camera degli ospiti 4",
    gallery_t_wc1: "Bagno in camera 1",
    gallery_t_wc2: "Bagno in camera 2",
    gallery_t_wc3: "Bagno in camera 3",
    gallery_t_wc4: "Bagno in camera 4",
    btn_view_more: "Mostra altro",
    btn_view_less: "Mostra meno",
    faq_subtitle: "Domande frequenti",
    faq_title: "Domande frequenti",
    faq_q1: "Quali sono gli orari standard di check-in e check-out?",
    faq_a1: "Il check-in è a partire dalle 16:00 e il check-out è entro le 10:00. Questo intervallo consente al nostro team di pulizia professionale di igienizzare a fondo la villa prima di ogni arrivo, garantendo standard di pulizia eccellenti.",
    faq_q2: "Sono ammessi animali domestici nella villa?",
    faq_a2: "Per preservare i tessuti di pregio degli interni, i pagamenti in legno e accogliere al meglio gli ospiti con allergie, gli animali domestici non sono ammessi a Villa Posija. Vi ringraziamo per la comprensione.",
    faq_q3: "È disponibile un parcheggio e c'è una stazione di ricarica per veicoli elettrici?",
    faq_a3: "Sì, Villa Posija dispone di un parcheggio privato sicuro per più veicoli proprio di fronte alla villa. Offriamo inoltre una stazione di ricarica gratuita di Tipo 2 per veicoli elettrici (EV) per tutti i nostri ospiti.",
    faq_q4: "È previsto un soggiorno minimo?",
    faq_a4: "Sì, per offrire un'esperienza esclusiva, Villa Posija richiede un soggiorno minimo di 7 notti. Le prenotazioni possono essere effettuate tramite il calendario delle disponibilità e confermate via WhatsApp.",
    contact_subtitle: "Richieste",
    contact_heading: "Iniziate il vostro viaggio",
    contact_desc: "Contattate il nostro team dedicato per prenotare il vostro soggiorno, personalizzare il vostro itinerario o richiedere servizi VIP a Kras, Krk.",
    contact_lbl_location: "Posizione",
    contact_lbl_reservations: "Prenotazioni",
    contact_lbl_email: "Indirizzo e-mail",
    map_title: "Trovate Villa Posija",
    map_sub: "Kras, Isola di Krk, Croazia",
    map_btn: "Apri Google Maps",
    form_label_name: "Nome completo",
    calendar_label: "Seleziona le date del soggiorno",
    day_mon: "Lun",
    day_tue: "Mar",
    day_wed: "Mer",
    day_thu: "Gio",
    day_fri: "Ven",
    day_sat: "Sab",
    day_sun: "Dom",
    legend_available: "Disponibile",
    legend_booked: "Prenotato",
    legend_selected: "Selezionato",
    lbl_checkin_date: "Data di arrivo",
    lbl_checkout_date: "Data di partenza",
    form_label_message: "Richieste speciali / Messaggio",
    btn_book_wa: "Prenota ora via WhatsApp",
    wa_notice: "*Sarete reindirizzati a WhatsApp per confermare i dettagli.",
    success_title: "Apertura di WhatsApp",
    success_message: "Stiamo aprendo WhatsApp in una nuova scheda per inviare la richiesta. Se non si apre automaticamente, cliccate qui sotto.",
    btn_manual_wa: "Apri WhatsApp manualmente",
    btn_close_window: "Chiudi finestra",
    footer_brand_desc: "Inviaci una richiesta diretta tramite WhatsApp per prenotare il tuo soggiorno e assicurarti una vacanza indimenticabile a Villa Posija a Kras, sull'isola di Krk.",
    footer_nav_hdr: "Navigazione",
    footer_link_home: "Home",
    footer_link_about: "La Villa",
    footer_link_gallery: "Galleria fotografica",
    footer_link_contact: "Contatto / Prenotazione",
    footer_connect_hdr: "Rimani connesso",
    footer_connect_desc: "Seguite i nostri profili social per ispirazioni di design e aggiornamenti sulla disponibilità.",
    footer_copy: "&copy; 2026 Villa Posija. Tutti i diritti riservati.",
    footer_designed_by: "Ideato da <a href=\"#hero\" class=\"footer-studio-link\">Antigravity Studio</a>",
    
    // Dynamic JS Translations
    select_checkin: "Seleziona arrivo",
    select_checkout: "Seleziona partenza",
    min_stay_warning: "Il soggiorno minimo a Villa Posija è di 7 notti. Si prega di selezionare un periodo più lungo.",
    past_date: "Data passata",
    booked_date: "Data prenotata",
    months: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
    whatsapp_opening: "APERTURA WHATSAPP...",
    cookie_title: "Valorizziamo la tua privacy",
    cookie_desc: "Utilizziamo i cookie per migliorare la tua esperienza di navigazione, mostrare contenuti personalizzati e analizzare il nostro traffico. Cliccando su \"Accetta tutti\", acconsenti al nostro utilizzo dei cookie.",
    cookie_btn_accept: "Accetta tutti",
    cookie_btn_customize: "Personalizza",
    cookie_modal_title: "Preferenze Cookie",
    cookie_modal_desc: "Personalizza le tue preferenze sui cookie. I cookie essenziali sono necessari per il funzionamento del sito e non possono essere disattivati.",
    cookie_lbl_essential: "Cookie Essenziali",
    cookie_desc_essential: "Richiesti per le funzionalità di base del sito, la selezione della lingua e le impostazioni del tema.",
    cookie_lbl_analytics: "Cookie Analitici",
    cookie_desc_analytics: "Ci aiutano ad analizzare il traffico del sito e il comportamento degli utenti per migliorare costantemente i nostri servizi.",
    cookie_lbl_marketing: "Cookie di Marketing",
    cookie_desc_marketing: "Abilitano funzioni personalizzate, la condivisione sui social e contenuti promozionali mirati.",
    cookie_btn_save: "Salva preferenze",
    cookie_always_active: "Sempre attivo"
  }
};

document.addEventListener('DOMContentLoaded', () => {

  // ------------------------------------------------------------------------
  // 1. MOBILE NAVIGATION DRAWER & SCROLL EVENTS
  // ------------------------------------------------------------------------
  const navbar = document.querySelector('.navbar');
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');

  // Shrink navbar on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Toggle Mobile Menu
  if (burgerMenu && navLinks) {
    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('active');
      navLinks.classList.toggle('active');

      // Prevent body scrolling when menu is open
      if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
  }

  // Active Link Highlighter on Scroll
  const sections = document.querySelectorAll('section, header');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 150; // offset

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id') || 'hero';
      }
    });

    navLinkItems.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href').substring(1);
      if (href === current || (current === 'hero' && href === '')) {
        link.classList.add('active');
      }
    });
  });

  // ------------------------------------------------------------------------
  // 2. SCROLL REVEAL (INTERSECTION OBSERVER)
  // ------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach(element => {
      element.classList.add('active');
    });
  }

  // ------------------------------------------------------------------------
  // 3. FILTERABLE PHOTO GALLERY & VIEW MORE LIMITS
  // ------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  let galleryItems = [];
  const viewMoreBtn = document.getElementById('viewMoreBtn');
  let isGalleryExpanded = false;

  // Dynamic gallery image objects array matching renamed files
  const galleryData = [
    {
      src: './images/vanjski_dio_kuce_bazen.jpg',
      alt: 'Villa Posija Infinity Pool',
      category: 'exterior',
      categoryName: 'Exterior',
      catTranslateKey: 'gallery_cat_exterior',
      title: 'Heated Infinity Pool',
      titleTranslateKey: 'gallery_t_pool'
    },
    {
      src: './images/vanjski_dio_kuce_rostilj.jpg',
      alt: 'Villa Posija BBQ and Dining',
      category: 'exterior',
      categoryName: 'Exterior',
      catTranslateKey: 'gallery_cat_exterior',
      title: 'Barbecue & Dining Pergola',
      titleTranslateKey: 'gallery_t_bbq'
    },
    {
      src: './images/hero_villa.png',
      alt: 'Villa Posija Facade at Sunset',
      category: 'exterior',
      categoryName: 'Exterior',
      catTranslateKey: 'gallery_cat_exterior',
      title: 'Villa Facade at Sunset',
      titleTranslateKey: 'gallery_t_facade'
    },
    {
      src: './images/vanjski_dio_kuce_balkon.jpg',
      alt: 'Villa Posija Balcony View',
      category: 'exterior',
      categoryName: 'Exterior',
      catTranslateKey: 'gallery_cat_exterior',
      title: 'Scenic Balcony View',
      titleTranslateKey: 'gallery_t_balcony'
    },
    {
      src: './images/vanjski_dio_kuce_guvno.jpg',
      alt: 'Villa Posija Traditional Stone Guvno',
      category: 'exterior',
      categoryName: 'Exterior',
      catTranslateKey: 'gallery_cat_exterior',
      title: 'Traditional Stone Circle (Guvno)',
      titleTranslateKey: 'gallery_t_guvno'
    },
    {
      src: './images/vanjski_dio_kuce_igraliste.jpg',
      alt: 'Villa Posija Playground and Sport Field',
      category: 'exterior',
      categoryName: 'Exterior',
      catTranslateKey: 'gallery_cat_exterior',
      title: 'Playground & Sports Area',
      titleTranslateKey: 'gallery_t_playground'
    },
    {
      src: './images/vanjski_dio_kuce_iz_daleka.jpg',
      alt: 'Villa Posija Panoramic Estate View',
      category: 'exterior',
      categoryName: 'Exterior',
      catTranslateKey: 'gallery_cat_exterior',
      title: 'Panoramic Estate View',
      titleTranslateKey: 'gallery_t_far1'
    },
    {
      src: './images/vanjski_dio_kuce_iz_daleka2.jpg',
      alt: 'Villa Posija Aerial Villa & Countryside',
      category: 'exterior',
      categoryName: 'Exterior',
      catTranslateKey: 'gallery_cat_exterior',
      title: 'Aerial Villa & Countryside',
      titleTranslateKey: 'gallery_t_far2'
    },
    {
      src: './images/vanjski_dio_kuce_iz_daleka3.jpg',
      alt: 'Villa Posija Distant Villa Perspective',
      category: 'exterior',
      categoryName: 'Exterior',
      catTranslateKey: 'gallery_cat_exterior',
      title: 'Distant Villa Perspective',
      titleTranslateKey: 'gallery_t_far3'
    },
    {
      src: './images/unutranji_dio_kuce_kuhinja.jpg',
      alt: 'Villa Posija Kitchen Area',
      category: 'interior',
      categoryName: 'Interior',
      catTranslateKey: 'gallery_cat_interior',
      title: 'Fully Equipped Kitchen',
      titleTranslateKey: 'gallery_t_kitchen'
    },
    {
      src: './images/unutarnji_dio_kuce_blagavaonica.jpg',
      alt: 'Villa Posija Dining Area',
      category: 'interior',
      categoryName: 'Interior',
      catTranslateKey: 'gallery_cat_interior',
      title: 'Elegant Dining Area',
      titleTranslateKey: 'gallery_t_dining'
    },
    {
      src: './images/unutarnji_dio_kuce_dnevni_boravak.jpg',
      alt: 'Villa Posija Living Room',
      category: 'interior',
      categoryName: 'Interior',
      catTranslateKey: 'gallery_cat_interior',
      title: 'Grand Living Room',
      titleTranslateKey: 'gallery_t_living'
    },
    {
      src: './images/unutarnji_dio_kuce_soba_za_razonodu.jpg',
      alt: 'Villa Posija Entertainment Room',
      category: 'interior',
      categoryName: 'Interior',
      catTranslateKey: 'gallery_cat_interior',
      title: 'Entertainment Room',
      titleTranslateKey: 'gallery_t_entertainment'
    },
    {
      src: './images/unutarnji_dio_kuce_soba1.jpg',
      alt: 'Villa Posija Master Bedroom',
      category: 'interior',
      categoryName: 'Interior',
      catTranslateKey: 'gallery_cat_interior',
      title: 'Master Suite',
      titleTranslateKey: 'gallery_t_soba1'
    },
    {
      src: './images/unutarnji_dio_kuce_soba2.jpg',
      alt: 'Villa Posija Deluxe Room 2',
      category: 'interior',
      categoryName: 'Interior',
      catTranslateKey: 'gallery_cat_interior',
      title: 'Deluxe Bedroom 2',
      titleTranslateKey: 'gallery_t_soba2'
    },
    {
      src: './images/unutarnji_dio_kuce_soba3.jpg',
      alt: 'Villa Posija Premium Room 3',
      category: 'interior',
      categoryName: 'Interior',
      catTranslateKey: 'gallery_cat_interior',
      title: 'Premium Bedroom 3',
      titleTranslateKey: 'gallery_t_soba3'
    },
    {
      src: './images/unutarnji_dio_kuce_soba4.jpg',
      alt: 'Villa Posija Cozy Room 4',
      category: 'interior',
      categoryName: 'Interior',
      catTranslateKey: 'gallery_cat_interior',
      title: 'Cozy Guest Room 4',
      titleTranslateKey: 'gallery_t_soba4'
    },
    {
      src: './images/unutarnji_dio_kuce_wc1.jpg',
      alt: 'Villa Posija Bathroom 1',
      category: 'interior',
      categoryName: 'Interior',
      catTranslateKey: 'gallery_cat_interior',
      title: 'En-suite Bathroom 1',
      titleTranslateKey: 'gallery_t_wc1'
    },
    {
      src: './images/unutarnji_dio_kuce_wc2.jpg',
      alt: 'Villa Posija Bathroom 2',
      category: 'interior',
      categoryName: 'Interior',
      catTranslateKey: 'gallery_cat_interior',
      title: 'En-suite Bathroom 2',
      titleTranslateKey: 'gallery_t_wc2'
    },
    {
      src: './images/unutarnji_dio_kuce_wc3.jpg',
      alt: 'Villa Posija Bathroom 3',
      category: 'interior',
      categoryName: 'Interior',
      catTranslateKey: 'gallery_cat_interior',
      title: 'En-suite Bathroom 3',
      titleTranslateKey: 'gallery_t_wc3'
    },
    {
      src: './images/unutarnji_dio_kuce_wc4.jpg',
      alt: 'Villa Posija Bathroom 4',
      category: 'interior',
      categoryName: 'Interior',
      catTranslateKey: 'gallery_cat_interior',
      title: 'En-suite Bathroom 4',
      titleTranslateKey: 'gallery_t_wc4'
    }
  ];

  function renderGallery() {
    const galleryGrid = document.getElementById('dynamicGallery');
    if (!galleryGrid) return;

    galleryGrid.innerHTML = '';

    galleryData.forEach((item, index) => {
      const itemHtml = `
        <div class="gallery-item visible" data-category="${item.category}" data-index="${index}">
          <img src="${item.src}" alt="${item.alt}" class="gallery-img" loading="lazy">
          <div class="gallery-overlay">
            <div class="gallery-info">
              <span class="gallery-category" data-translate="${item.catTranslateKey}">${item.categoryName}</span>
              <h3 class="gallery-title" data-translate="${item.titleTranslateKey}">${item.title}</h3>
            </div>
            <div class="gallery-icon-view" style="align-self: flex-end; margin-top: auto;">
              <i class="fa-solid fa-expand"></i>
            </div>
          </div>
        </div>
      `;
      galleryGrid.insertAdjacentHTML('beforeend', itemHtml);
    });

    // Update reference to galleryItems
    galleryItems = document.querySelectorAll('.gallery-item');

    // Bind event listeners for lightbox
    galleryItems.forEach((item) => {
      item.addEventListener('click', () => {
        const index = parseInt(item.getAttribute('data-index'));
        openLightbox(index);
      });
    });
  }

  function updateGalleryVisibility() {
    const activeFilterBtn = document.querySelector('.filter-btn.active');
    const filterValue = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'exterior';
    
    // Determine columns based on window width
    const width = window.innerWidth;
    let cols = 3;
    if (width <= 480) {
      cols = 1;
    } else if (width <= 992) {
      cols = 2;
    }
    
    const limit = cols * 2;
    let matchCount = 0;
    
    galleryItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      const matchesFilter = (filterValue === 'all' || filterValue === itemCategory);
      
      if (matchesFilter) {
        item.classList.remove('filtered-out');
        matchCount++;
        
        if (!isGalleryExpanded && matchCount > limit) {
          item.classList.add('gallery-hidden');
        } else {
          item.classList.remove('gallery-hidden');
        }
      } else {
        item.classList.add('filtered-out');
        item.classList.remove('gallery-hidden');
      }
    });

    // Determine if the "View More" button should be visible
    const totalMatching = Array.from(galleryItems).filter(item => {
      const cat = item.getAttribute('data-category');
      return filterValue === 'all' || cat === filterValue;
    }).length;

    if (viewMoreBtn) {
      if (totalMatching <= limit) {
        viewMoreBtn.style.display = 'none';
      } else {
        viewMoreBtn.style.display = 'inline-block';
        updateGalleryBtnText();
      }
    }
  }

  function updateGalleryBtnText() {
    if (!viewMoreBtn) return;
    const currentLang = getCookie('lang') || 'en';
    const key = isGalleryExpanded ? 'btn_view_less' : 'btn_view_more';
    if (translations[currentLang] && translations[currentLang][key]) {
      viewMoreBtn.textContent = translations[currentLang][key];
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Reset expanded state to false when changing filters (good UX)
      isGalleryExpanded = false;
      updateGalleryVisibility();
    });
  });

  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
      isGalleryExpanded = !isGalleryExpanded;
      updateGalleryVisibility();
      
      // If collapsing, scroll back to gallery section start smoothly
      if (!isGalleryExpanded) {
        const gallerySection = document.getElementById('gallery');
        if (gallerySection) {
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const targetOffset = gallerySection.offsetTop - navbarHeight;
          window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
          });
        }
      }
    });
  }

  window.addEventListener('resize', updateGalleryVisibility);

  // ------------------------------------------------------------------------
  // 4. LIGHTBOX MODAL GALLERY VIEWER
  // ------------------------------------------------------------------------
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const lightboxTitle = lightbox.querySelector('.lightbox-title');
  const lightboxCat = lightbox.querySelector('.lightbox-cat');
  const lightboxClose = lightbox.querySelector('.lightbox-close');
  const lightboxPrev = lightbox.querySelector('.lightbox-prev');
  const lightboxNext = lightbox.querySelector('.lightbox-next');

  let currentGalleryIndex = 0;
  let activeGalleryItems = [];

  const openLightbox = (index) => {
    // Active gallery items are those that are NOT filtered out AND NOT row hidden
    activeGalleryItems = Array.from(galleryItems).filter(item => 
      !item.classList.contains('filtered-out') && !item.classList.contains('gallery-hidden')
    );
    const selectedItem = galleryItems[index];
    currentGalleryIndex = activeGalleryItems.indexOf(selectedItem);

    if (currentGalleryIndex === -1) return; // Hidden item clicked

    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  const updateLightboxContent = () => {
    if (activeGalleryItems.length === 0) return;

    const currentItem = activeGalleryItems[currentGalleryIndex];
    const imgElement = currentItem.querySelector('.gallery-img');
    const titleText = currentItem.querySelector('.gallery-title').textContent;
    const catText = currentItem.querySelector('.gallery-category').textContent;

    lightboxImg.src = imgElement.src;
    lightboxImg.alt = imgElement.alt;
    lightboxTitle.textContent = titleText;
    lightboxCat.textContent = catText;
  };

  const prevImage = () => {
    currentGalleryIndex = (currentGalleryIndex - 1 + activeGalleryItems.length) % activeGalleryItems.length;
    updateLightboxContent();
  };

  const nextImage = () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % activeGalleryItems.length;
    updateLightboxContent();
  };

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);
  if (lightboxNext) lightboxNext.addEventListener('click', nextImage);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  });

  // ------------------------------------------------------------------------
  // 5. ICAL PARSING & CUSTOM RESERVATION CALENDAR
  // ------------------------------------------------------------------------
  const bookingHotelUrl = 'https://www.booking.com/hotel/hr/villa-posija.hr.html';
  const bookingICalUrl = 'https://ical.booking.com/v1/export?t=mock-uuid-villa-posija-ical-feed';

  let blockedDates = new Set(); // Stores dates as 'YYYY-MM-DD' strings
  let checkInDate = null;       // Date object
  let checkOutDate = null;      // Date object
  let hoveredDate = null;       // Date object (for range preview)

  let currentCalYear = new Date().getFullYear();
  let currentCalMonth = new Date().getMonth(); // 0-11

  const calendarTitle = document.getElementById('calendarTitle');
  const calendarDaysContainer = document.getElementById('calendarDays');
  const calendarPrevBtn = document.getElementById('calendarPrev');
  const calendarNextBtn = document.getElementById('calendarNext');

  const checkInTextDisplay = document.getElementById('checkInText');
  const checkOutTextDisplay = document.getElementById('checkOutText');
  const inputCheckIn = document.getElementById('inputCheckIn');
  const inputCheckOut = document.getElementById('inputCheckOut');

  // Custom mock iCal response representing real Booking.com blockages for testing and CORS fallback
  const getSimulatedICalFeed = () => {
    let ical = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Booking.com//NONSGML Booking.com Calendar//EN\n`;

    const today = new Date();
    for (let i = 0; i < 12; i++) {
      const year = today.getFullYear() + Math.floor((today.getMonth() + i) / 12);
      const month = (today.getMonth() + i) % 12;
      const monthStr = String(month + 1).padStart(2, '0');

      ical += `BEGIN:VEVENT
DTSTART;VALUE=DATE:${year}${monthStr}08
DTEND;VALUE=DATE:${year}${monthStr}15
SUMMARY:Booked - Booking.com
END:VEVENT\n`;

      if (i % 3 !== 0) {
        ical += `BEGIN:VEVENT
DTSTART;VALUE=DATE:${year}${monthStr}20
DTEND;VALUE=DATE:${year}${monthStr}26
SUMMARY:Booked - Booking.com
END:VEVENT\n`;
      }
    }

    ical += `END:VCALENDAR`;
    return ical;
  };

  // Regular expression based iCal parser
  const parseICalFeed = (icalText) => {
    const parsedBlockedDates = new Set();
    const veventRegex = /BEGIN:VEVENT[\s\S]*?END:VEVENT/gi;
    let match;

    while ((match = veventRegex.exec(icalText)) !== null) {
      const veventContent = match[0];

      const startMatch = /DTSTART(?:;[^:]*)?:(\d{8})/i.exec(veventContent);
      const endMatch = /DTEND(?:;[^:]*)?:(\d{8})/i.exec(veventContent);

      if (startMatch && endMatch) {
        const startStr = startMatch[1];
        const endStr = endMatch[1];

        const startYear = parseInt(startStr.substring(0, 4));
        const startMonth = parseInt(startStr.substring(4, 6)) - 1;
        const startDay = parseInt(startStr.substring(6, 8));

        const endYear = parseInt(endStr.substring(0, 4));
        const endMonth = parseInt(endStr.substring(4, 6)) - 1;
        const endDay = parseInt(endStr.substring(6, 8));

        let startDate = new Date(startYear, startMonth, startDay);
        let endDate = new Date(endYear, endMonth, endDay);

        let loopDate = new Date(startDate);
        while (loopDate < endDate) {
          const dateStr = formatDateString(loopDate);
          parsedBlockedDates.add(dateStr);
          loopDate.setDate(loopDate.getDate() + 1);
        }
      }
    }

    return parsedBlockedDates;
  };

  const formatDateString = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const initializeCalendarData = async () => {
    try {
      console.log(`Attempting to fetch iCal feed from: ${bookingICalUrl}`);
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 1800);

      const response = await fetch(bookingICalUrl, { signal: controller.signal });
      clearTimeout(id);

      if (!response.ok) throw new Error('Network response was not OK');

      const icalText = await response.text();
      blockedDates = parseICalFeed(icalText);
      console.log('Successfully fetched and parsed remote iCal feed!');
    } catch (error) {
      console.warn('CORS blockage or Network error occurred when fetching iCal feed. Loading simulated calendar feed fallbacks...', error);
      const simulatedICalText = getSimulatedICalFeed();
      blockedDates = parseICalFeed(simulatedICalText);
      console.log('Simulated iCal feed parsed successfully!');
    }

    renderCalendarGrid();
  };

  const renderCalendarGrid = () => {
    if (!calendarDaysContainer) return;

    calendarDaysContainer.innerHTML = '';

    const currentLang = getCookie('lang') || 'en';
    const monthNames = translations[currentLang]?.months || translations['en'].months;

    calendarTitle.textContent = `${monthNames[currentCalMonth]} ${currentCalYear}`;

    let firstDayIndex = new Date(currentCalYear, currentCalMonth, 1).getDay();
    firstDayIndex = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

    const totalDays = new Date(currentCalYear, currentCalMonth + 1, 0).getDate();

    for (let i = 0; i < firstDayIndex; i++) {
      const emptyDiv = document.createElement('div');
      emptyDiv.classList.add('calendar-day', 'empty');
      calendarDaysContainer.appendChild(emptyDiv);
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let day = 1; day <= totalDays; day++) {
      const dateObj = new Date(currentCalYear, currentCalMonth, day);
      const dateStr = formatDateString(dateObj);

      const dayElement = document.createElement('div');
      dayElement.classList.add('calendar-day');
      dayElement.textContent = day;
      dayElement.setAttribute('data-date', dateStr);

      const isPast = dateObj < today;
      const isBooked = blockedDates.has(dateStr);

      const pastDateText = translations[currentLang]?.past_date || 'Past Date';
      const bookedDateText = translations[currentLang]?.booked_date || 'Booked Date';

      if (isPast || isBooked) {
        dayElement.classList.add('booked');
        dayElement.setAttribute('title', isPast ? pastDateText : bookedDateText);
      } else {
        dayElement.classList.add('available');
        dayElement.addEventListener('click', () => handleDateClick(dateObj));
        dayElement.addEventListener('mouseenter', () => handleDateHover(dateObj));
      }

      if (checkInDate && dateStr === formatDateString(checkInDate)) {
        dayElement.classList.add('selected-start');
      } else if (checkOutDate && dateStr === formatDateString(checkOutDate)) {
        dayElement.classList.add('selected-end');
      } else if (checkInDate && checkOutDate && dateObj > checkInDate && dateObj < checkOutDate) {
        dayElement.classList.add('in-range');
      } else if (checkInDate && !checkOutDate && hoveredDate && dateObj > checkInDate && dateObj <= hoveredDate) {
        dayElement.classList.add('in-range');
      }

      calendarDaysContainer.appendChild(dayElement);
    }

    const currentMonthYear = new Date();
    if (currentCalYear <= currentMonthYear.getFullYear() && currentCalMonth <= currentMonthYear.getMonth()) {
      calendarPrevBtn.style.opacity = '0.3';
      calendarPrevBtn.style.pointerEvents = 'none';
    } else {
      calendarPrevBtn.style.opacity = '1';
      calendarPrevBtn.style.pointerEvents = 'all';
    }

    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 11);
    if (currentCalYear > maxDate.getFullYear() || (currentCalYear === maxDate.getFullYear() && currentCalMonth >= maxDate.getMonth())) {
      calendarNextBtn.style.opacity = '0.3';
      calendarNextBtn.style.pointerEvents = 'none';
    } else {
      calendarNextBtn.style.opacity = '1';
      calendarNextBtn.style.pointerEvents = 'all';
    }
  };

  const handleDateClick = (date) => {
    if (!checkInDate || (checkInDate && checkOutDate)) {
      checkInDate = date;
      checkOutDate = null;
      hoveredDate = null;
    }
    else if (date <= checkInDate) {
      checkInDate = date;
      checkOutDate = null;
      hoveredDate = null;
    }
    else {
      // Check for minimum stay constraint of 7 nights
      const diffTime = Math.abs(date - checkInDate);
      const diffNights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffNights < 7) {
        const currentLang = getCookie('lang') || 'en';
        alert(translations[currentLang]?.min_stay_warning || "Minimum stay at Villa Posija is 7 nights. Please select a longer period.");
        return;
      }

      let hasOverlappingBookings = false;
      let checkDate = new Date(checkInDate);

      while (checkDate < date) {
        checkDate.setDate(checkDate.getDate() + 1);
        if (blockedDates.has(formatDateString(checkDate)) && checkDate < date) {
          hasOverlappingBookings = true;
          break;
        }
      }

      if (hasOverlappingBookings) {
        checkInDate = date;
        checkOutDate = null;
        hoveredDate = null;
      } else {
        checkOutDate = date;
        hoveredDate = null;
      }
    }

    updateDisplayOutputs();
    renderCalendarGrid();
  };

  const updateHoverStyles = () => {
    if (!calendarDaysContainer) return;
    const dayElements = calendarDaysContainer.querySelectorAll('.calendar-day');
    dayElements.forEach(el => {
      const dateStr = el.getAttribute('data-date');
      if (!dateStr) return;

      const parts = dateStr.split('-');
      const dateObj = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));

      if (checkInDate && checkOutDate && dateObj > checkInDate && dateObj < checkOutDate) {
        el.classList.add('in-range');
      } else if (checkInDate && !checkOutDate && hoveredDate && dateObj > checkInDate && dateObj <= hoveredDate) {
        el.classList.add('in-range');
      } else {
        el.classList.remove('in-range');
      }
    });
  };

  const handleDateHover = (date) => {
    if (checkInDate && !checkOutDate) {
      if (date > checkInDate) {
        let hasOverlappingBookings = false;
        let checkDate = new Date(checkInDate);

        while (checkDate < date) {
          checkDate.setDate(checkDate.getDate() + 1);
          if (blockedDates.has(formatDateString(checkDate)) && checkDate < date) {
            hasOverlappingBookings = true;
            break;
          }
        }

        if (!hasOverlappingBookings) {
          hoveredDate = date;
          updateHoverStyles();
        }
      }
    }
  };

  const updateDisplayOutputs = () => {
    const currentLang = getCookie('lang') || 'en';
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const localeMap = {
      'en': 'en-US',
      'hr': 'hr-HR',
      'de': 'de-DE',
      'it': 'it-IT'
    };
    const locale = localeMap[currentLang] || 'en-US';

    if (checkInDate) {
      checkInTextDisplay.textContent = checkInDate.toLocaleDateString(locale, options);
      inputCheckIn.value = formatDateString(checkInDate);
    } else {
      checkInTextDisplay.textContent = translations[currentLang]?.select_checkin || 'Select check-in';
      inputCheckIn.value = '';
    }

    if (checkOutDate) {
      checkOutTextDisplay.textContent = checkOutDate.toLocaleDateString(locale, options);
      inputCheckOut.value = formatDateString(checkOutDate);
    } else {
      checkOutTextDisplay.textContent = translations[currentLang]?.select_checkout || 'Select check-out';
      inputCheckOut.value = '';
    }

    [inputCheckIn, inputCheckOut].forEach(input => {
      const parent = input.parentElement;
      if (input.value) {
        parent.classList.add('focused');
      } else {
        parent.classList.remove('focused');
      }
    });
  };

  if (calendarPrevBtn && calendarNextBtn) {
    calendarPrevBtn.addEventListener('click', () => {
      currentCalMonth--;
      if (currentCalMonth < 0) {
        currentCalMonth = 11;
        currentCalYear--;
      }
      renderCalendarGrid();
    });

    calendarNextBtn.addEventListener('click', () => {
      currentCalMonth++;
      if (currentCalMonth > 11) {
        currentCalMonth = 0;
        currentCalYear++;
      }
      renderCalendarGrid();
    });
  }

  if (calendarDaysContainer) {
    calendarDaysContainer.addEventListener('mouseleave', () => {
      if (checkInDate && !checkOutDate) {
        hoveredDate = null;
        updateHoverStyles();
      }
    });
  }

  initializeCalendarData();

  // ------------------------------------------------------------------------
  // 6. CONTACT FORM INTERACTIVE LOGIC & FLOATING LABELS
  // ------------------------------------------------------------------------
  const formInputs = document.querySelectorAll('.form-input');
  const contactForm = document.getElementById('contactForm');
  const formSuccessOverlay = document.getElementById('formSuccessOverlay');
  const successCloseBtn = document.getElementById('successCloseBtn');

  formInputs.forEach(input => {
    if (!input.getAttribute('placeholder')) {
      input.setAttribute('placeholder', ' ');
    }
  });

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      // Honeypot check
      const honeyField = document.getElementById('villaPosijaHoney');
      if (honeyField && honeyField.value !== '') {
        console.warn("SPAM DETECTED: Form submission blocked by Honeypot.");
        e.preventDefault();
        return;
      }

      e.preventDefault();

      let isValid = true;

      formInputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
          isValid = false;
          input.style.borderBottomColor = '#ff4d4d';
        } else {
          input.style.borderBottomColor = '';
        }
      });

      if (!inputCheckIn.value || !inputCheckOut.value) {
        isValid = false;
        const calendarContainer = document.querySelector('.calendar-widget');
        calendarContainer.style.borderColor = '#ff4d4d';
        setTimeout(() => {
          calendarContainer.style.borderColor = '';
        }, 3000);
      } else if (checkInDate && checkOutDate) {
        const diffTime = Math.abs(checkOutDate - checkInDate);
        const diffNights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffNights < 7) {
          isValid = false;
          const currentLang = getCookie('lang') || 'en';
          alert(translations[currentLang]?.min_stay_warning || "Minimum stay at Villa Posija is 7 nights. Please select a longer period.");
        }
      }

      if (!isValid) return;

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      const currentLang = getCookie('lang') || 'en';
      submitBtn.textContent = translations[currentLang]?.whatsapp_opening || 'OPENING WHATSAPP...';
      submitBtn.disabled = true;

      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const localeMap = {
        'en': 'en-US',
        'hr': 'hr-HR',
        'de': 'de-DE',
        'it': 'it-IT'
      };
      const locale = localeMap[currentLang] || 'en-US';
      const checkInStr = checkInDate.toLocaleDateString(locale, options);
      const checkOutStr = checkOutDate.toLocaleDateString(locale, options);

      const fullName = document.getElementById('formName').value.trim();
      const specialRequests = document.getElementById('formMessage').value.trim();

      // WhatsApp Dynamic Messaging
      let messageText = "";
      if (currentLang === 'hr') {
        if (specialRequests) {
          messageText = `Pozdrav! Želio bih poslati upit za rezervaciju Ville Posije u terminu od ${checkInStr} do ${checkOutStr}. Moji specijalni zahtjevi su: ${specialRequests}. Lijep pozdrav, ${fullName}!`;
        } else {
          messageText = `Pozdrav! Želio bih poslati upit za rezervaciju Ville Posije u terminu od ${checkInStr} do ${checkOutStr}. Lijep pozdrav, ${fullName}!`;
        }
      } else if (currentLang === 'de') {
        if (specialRequests) {
          messageText = `Hallo! Ich möchte eine Buchungsanfrage für Villa Posija im Zeitraum von ${checkInStr} bis ${checkOutStr} senden. Meine Sonderwünsche sind: ${specialRequests}. Mit freundlichen Grüßen, ${fullName}!`;
        } else {
          messageText = `Hallo! Ich möchte eine Buchungsanfrage für Villa Posija im Zeitraum von ${checkInStr} bis ${checkOutStr} senden. Mit freundlichen Grüßen, ${fullName}!`;
        }
      } else if (currentLang === 'it') {
        if (specialRequests) {
          messageText = `Ciao! Vorrei inviare una richiesta di prenotazione per Villa Posija dal ${checkInStr} al ${checkOutStr}. Le mie richieste speciali sono: ${specialRequests}. Cordiali saluti, ${fullName}!`;
        } else {
          messageText = `Ciao! Vorrei inviare una richiesta di prenotazione per Villa Posija dal ${checkInStr} al ${checkOutStr}. Cordiali saluti, ${fullName}!`;
        }
      } else {
        if (specialRequests) {
          messageText = `Hello! I would like to send a booking request for Villa Posija from ${checkInStr} to ${checkOutStr}. My special requests are: ${specialRequests}. Best regards, ${fullName}!`;
        } else {
          messageText = `Hello! I would like to send a booking request for Villa Posija from ${checkInStr} to ${checkOutStr}. Best regards, ${fullName}!`;
        }
      }

      const waUrl = `https://wa.me/385994111894?text=${encodeURIComponent(messageText)}`;
      window.open(waUrl, '_blank');

      setTimeout(() => {
        const manualWaLink = document.getElementById('manualWaLink');
        if (manualWaLink) {
          manualWaLink.href = waUrl;
        }
        formSuccessOverlay.classList.add('active');

        contactForm.reset();
        checkInDate = null;
        checkOutDate = null;
        updateDisplayOutputs();
        renderCalendarGrid();

        submitBtn.textContent = translations[currentLang]?.btn_book_wa || originalText;
        submitBtn.disabled = false;
      }, 1000);
    });
  }

  if (successCloseBtn) {
    successCloseBtn.addEventListener('click', () => {
      formSuccessOverlay.classList.remove('active');
    });
  }

  // ------------------------------------------------------------------------
  // 7. LANGUAGE SWITCHER, THEME TOGGLE, & SMOOTH ANCHOR SCROLLING
  // ------------------------------------------------------------------------
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');

  function setLanguage(lang) {
    setCookie('lang', lang, 365);
    
    const currentLangSpan = document.getElementById('currentLang');
    if (currentLangSpan) {
      currentLangSpan.textContent = lang.toUpperCase();
    }
    
    document.documentElement.setAttribute('lang', lang);

    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
      const key = el.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.setAttribute('placeholder', translations[lang][key]);
        } else {
          el.innerHTML = translations[lang][key];
        }
      }
    });

    // Recalculate heights of any expanded FAQ items to adjust to new translation text lengths
    document.querySelectorAll('.faq-item.active').forEach(activeItem => {
      const activeAns = activeItem.querySelector('.faq-answer');
      activeAns.style.maxHeight = activeAns.scrollHeight + 'px';
    });

    updateDisplayOutputs();
    renderCalendarGrid();
    updateGalleryBtnText();
  }

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = langDropdown.classList.contains('active');
      if (isActive) {
        langDropdown.classList.remove('active');
        langBtn.setAttribute('aria-expanded', 'false');
      } else {
        langDropdown.classList.add('active');
        langBtn.setAttribute('aria-expanded', 'true');
      }
    });

    const langOptions = langDropdown.querySelectorAll('[data-lang]');
    langOptions.forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedLang = opt.getAttribute('data-lang');
        setLanguage(selectedLang);
        langDropdown.classList.remove('active');
        langBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.remove('active');
        langBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Theme Toggle Button Event Listener
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = document.documentElement.classList.toggle('light-theme');
      setCookie('theme', isLight ? 'light' : 'dark', 365);
    });
  }

  // Smooth Scrolling for all Local Anchor Links with Sticky Navbar Offset
  const allLinks = document.querySelectorAll('a[href^="#"]');
  allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#' || href === '') return;
      
      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        
        const headerHeight = document.querySelector('.navbar').offsetHeight;
        const targetOffset = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetOffset,
          behavior: 'smooth'
        });
        
        if (burgerMenu && navLinks && navLinks.classList.contains('active')) {
          burgerMenu.classList.remove('active');
          navLinks.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    });
  });

  // FAQ Accordion Interactivity
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isActive = item.classList.contains('active');
      
      // Close other FAQs for cleaner accordion presentation
      document.querySelectorAll('.faq-item.active').forEach(activeItem => {
        if (activeItem !== item) {
          activeItem.classList.remove('active');
          const activeAns = activeItem.querySelector('.faq-answer');
          activeAns.style.maxHeight = null;
          activeAns.style.opacity = '0';
          activeItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });
      
      if (isActive) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
        answer.style.opacity = '0';
        btn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.opacity = '1';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ------------------------------------------------------------------------
  // 8. COOKIE CONSENT BANNER & CUSTOMIZATION DIALOG
  // ------------------------------------------------------------------------
  const cookieBanner = document.getElementById('cookieBanner');
  const cookieModal = document.getElementById('cookieModal');
  const btnAcceptAllCookies = document.getElementById('btnAcceptAllCookies');
  const btnAcceptAllCookiesModal = document.getElementById('btnAcceptAllCookiesModal');
  const btnCustomizeCookies = document.getElementById('btnCustomizeCookies');
  const cookieModalCloseBtn = document.getElementById('cookieModalCloseBtn');
  const cookieModalBackdrop = document.getElementById('cookieModalBackdrop');
  const btnSaveCookieSettings = document.getElementById('btnSaveCookieSettings');
  const cookieOptAnalytics = document.getElementById('cookieOptAnalytics');
  const cookieOptMarketing = document.getElementById('cookieOptMarketing');

  const COOKIE_STORAGE_KEY = 'villa_posija_cookie_consent';

  function saveConsent(consent) {
    localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(consent));
    console.log("Cookie consent settings saved:", consent);
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: consent }));
  }

  function hideCookieUI() {
    if (cookieBanner) cookieBanner.classList.remove('active');
    if (cookieModal) cookieModal.classList.remove('active');
  }

  function initCookieConsent() {
    const savedConsent = localStorage.getItem(COOKIE_STORAGE_KEY);
    
    if (!savedConsent) {
      setTimeout(() => {
        if (cookieBanner) cookieBanner.classList.add('active');
      }, 1000);
    } else {
      try {
        const consent = JSON.parse(savedConsent);
        console.log("Cookie consent loaded from localStorage:", consent);
        if (cookieOptAnalytics) cookieOptAnalytics.checked = !!consent.analytics;
        if (cookieOptMarketing) cookieOptMarketing.checked = !!consent.marketing;
      } catch (e) {
        console.error("Failed to parse saved cookie consent:", e);
      }
    }

    if (btnAcceptAllCookies) {
      btnAcceptAllCookies.addEventListener('click', () => {
        const consent = { essential: true, analytics: true, marketing: true };
        saveConsent(consent);
        if (cookieOptAnalytics) cookieOptAnalytics.checked = true;
        if (cookieOptMarketing) cookieOptMarketing.checked = true;
        hideCookieUI();
      });
    }

    if (btnAcceptAllCookiesModal) {
      btnAcceptAllCookiesModal.addEventListener('click', () => {
        const consent = { essential: true, analytics: true, marketing: true };
        saveConsent(consent);
        if (cookieOptAnalytics) cookieOptAnalytics.checked = true;
        if (cookieOptMarketing) cookieOptMarketing.checked = true;
        hideCookieUI();
      });
    }

    if (btnCustomizeCookies) {
      btnCustomizeCookies.addEventListener('click', () => {
        const savedConsent = localStorage.getItem(COOKIE_STORAGE_KEY);
        if (savedConsent) {
          try {
            const consent = JSON.parse(savedConsent);
            if (cookieOptAnalytics) cookieOptAnalytics.checked = !!consent.analytics;
            if (cookieOptMarketing) cookieOptMarketing.checked = !!consent.marketing;
          } catch (e) {}
        }
        if (cookieModal) cookieModal.classList.add('active');
      });
    }

    const closeModal = () => {
      if (cookieModal) cookieModal.classList.remove('active');
    };

    if (cookieModalCloseBtn) {
      cookieModalCloseBtn.addEventListener('click', closeModal);
    }

    if (cookieModalBackdrop) {
      cookieModalBackdrop.addEventListener('click', closeModal);
    }

    if (btnSaveCookieSettings) {
      btnSaveCookieSettings.addEventListener('click', () => {
        const consent = {
          essential: true,
          analytics: !!cookieOptAnalytics?.checked,
          marketing: !!cookieOptMarketing?.checked
        };
        saveConsent(consent);
        hideCookieUI();
      });
    }
  }

  // --- INITIALIZATION ---
  let initialLang = getCookie('lang');
  if (!initialLang) {
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    if (['en', 'hr', 'de', 'it'].includes(browserLang)) {
      initialLang = browserLang;
    } else {
      initialLang = 'en';
    }
  }

  renderGallery();
  setLanguage(initialLang);
  updateGalleryVisibility();
  initCookieConsent();
});
