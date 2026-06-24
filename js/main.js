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
    nav_amenities: "Amenities",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    nav_book_now: "Book Now",
    hero_subtitle: "Premium Adriatic Escape",
    hero_title: "Where Luxury Meets The Horizon",
    hero_text: "An exquisite private retreat nestled in Kras on the Island of Krk, Croatia. Blending authentic premium stone architecture with modern sophistication, Villa Posija offers a heated pool, quiet countryside privacy, and pristine Mediterranean surroundings.",
    hero_cta_explore: "Explore Villa",
    hero_cta_availability: "View Availability",
    about_subtitle: "The Retreat",
    about_heading: "Authentic Croatian Stone Architecture & Contemporary Comfort",
    about_desc: "Located in the serene village of Kras on Krk Island, Villa Posija represents a masterclass in regional heritage design. Crafted using local hand-carved stone, the villa integrates seamlessly with the surrounding silver olive groves, wild rosemary bushes, and peaceful Mediterranean nature, offering absolute seclusion and a relaxing island getaway.",
    about_f1_title: "Authentic Stone Masonry",
    about_f1_desc: "Traditional thick stone wall architecture ensuring natural insulation and rustic coastal elegance.",
    about_f2_title: "Heated Infinity Pool",
    about_f2_desc: "Hovering over the coastline with integrated warm water climate regulation for year-round swims.",
    about_f3_title: "Unrivaled Sea Views",
    about_f3_desc: "Stunning vistas of the clear blue waters of the Adriatic and the nearby islands.",
    about_f4_title: "Mediterranean Flora",
    about_f4_desc: "Landscaped private estate featuring aromatic gardens with lavender, figs, and olive trees.",
    about_cta: "Contact Guest Services",
    amenities_subtitle: "World-Class Services",
    amenities_title: "Curated For Complete Comfort",
    amenity_1_title: "Outdoor Pool",
    amenity_1_desc: "Beautiful custom outdoor heated infinity pool with crystal clear waters and spacious sunbathing deck.",
    amenity_2_title: "Outdoor BBQ Zone",
    amenity_2_desc: "Authentic outdoor stone fireplace, built-in kitchen, and spacious dining area for memorable outdoor meals.",
    amenity_3_title: "Common Lounge Room",
    amenity_3_desc: "A cozy communal space designed for relaxation, social gatherings, games, and shared moments.",
    amenity_4_title: "Air Conditioning",
    amenity_4_desc: "Silent, fully integrated modern air conditioning throughout all rooms for your complete comfort.",
    amenity_5_title: "Free Wi-Fi",
    amenity_5_desc: "High-speed mesh gigabit wireless internet access throughout the entire villa, garden, and pool area.",
    amenity_6_title: "Secured Private Parking",
    amenity_6_desc: "Safe and private on-site parking behind electric gates under active video surveillance.",
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
    faq_q3: "Is parking available, and do you support Electric Vehicle charging?",
    faq_a3: "Yes, Villa Posija includes a secure, gated private parking area on-site for up to 3 vehicles, equipped with active video surveillance. We also feature a complimentary dedicated Type 2 Electric Vehicle (EV) charging station for all guests.",
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
    form_label_email: "Email Address",
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
    footer_brand_desc: "A sanctuary where contemporary architectural elegance meets the traditional hand-carved stone walls of Krk Island. Villa Posija offers an uncompromising level of service, luxury, and seclusion.",
    footer_nav_hdr: "Navigations",
    footer_link_home: "Home",
    footer_link_about: "About the Villa",
    footer_link_amenities: "Premium Amenities",
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
    whatsapp_opening: "OPENING WHATSAPP..."
  },
  hr: {
    "meta-title": "Villa Posija | Luksuzna kamena vila u Krasu, otok Krk",
    nav_about: "O vili",
    nav_amenities: "Sadržaji",
    nav_gallery: "Galerija",
    nav_contact: "Kontakt",
    nav_book_now: "Rezerviraj",
    hero_subtitle: "Vrhunski jadranski bijeg",
    hero_title: "Gdje luksuz susreće horizont",
    hero_text: "Prekrasno privatno utočište smješteno u Krasu na otoku Krku, Hrvatska. Spajajući autentičnu kamenu arhitekturu s modernom sofisticiranošću, Villa Posija nudi grijani bazen, mir i seosku privatnost te netaknutu mediteransku prirodu.",
    hero_cta_explore: "Istražite vilu",
    hero_cta_availability: "Slobodni termini",
    about_subtitle: "Utočište",
    about_heading: "Autentična hrvatska kamena arhitektura i suvremena udobnost",
    about_desc: "Smještena u mirnom mjestu Kras na otoku Krku, Villa Posija predstavlja remek-djelo regionalnog naslijeđa. Izgrađena od lokalnog, ručno klesanog kamena, vila se savršeno uklapa u okolne srebrne maslinike, grmove ružmarina i mirnu mediteransku prirodu, nudeći potpunu privatnost i opuštajući otočki odmor.",
    about_f1_title: "Autentični kameni zidovi",
    about_f1_desc: "Tradicionalna arhitektura s debelim kamenim zidovima pruža prirodnu izolaciju i rustikalnu eleganciju.",
    about_f2_title: "Grijani preljevni bazen",
    about_f2_desc: "Smješten iznad obale, s ugrađenim sustavom grijanja za toplo plivanje tijekom cijele godine.",
    about_f3_title: "Prekrasan pogled na more",
    about_f3_desc: "Zadivljujući pogled na kristalno plavo Jadransko more i obližnje otoke.",
    about_f4_title: "Mediteranska flora",
    about_f4_desc: "Uređeno privatno imanje s aromatičnim vrtovima prepunim lavande, smokava i maslina.",
    about_cta: "Kontaktirajte recepciju",
    amenities_subtitle: "Usluge svjetske klase",
    amenities_title: "Kreirano za potpunu udobnost",
    amenity_1_title: "Vanjski bazen",
    amenity_1_desc: "Prekrasan grijani preljevni bazen s kristalno čistom vodom i prostranom terasom za sunčanje.",
    amenity_2_title: "Vanjska BBQ zona i roštilj",
    amenity_2_desc: "Autentični kameni kamin, ugrađena vanjska kuhinja i stol za objedovanje na otvorenom.",
    amenity_3_title: "Soba za druženje",
    amenity_3_desc: "Udoban zajednički prostor namijenjen opuštanju, druženju, zabavi i zajedničkim trenucima.",
    amenity_4_title: "Klima uređaj",
    amenity_4_desc: "Tihi, potpuno integrirani klima uređaji u svim prostorijama za Vašu potpunu ugodu.",
    amenity_5_title: "Besplatan Wi-Fi",
    amenity_5_desc: "Brzi bežični internet dostupan na cijelom posjedu, uključujući terase, vrt i bazen.",
    amenity_6_title: "Osiguran privatni parking",
    amenity_6_desc: "Siguran i besplatan privatni parking u sklopu objekta pod video nadzorom.",
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
    faq_a3: "Da, Villa Posija uključuje siguran, ograđen privatni parking u sklopu objekta za do 3 vozila, pod video nadzorom. Također nudimo besplatnu Type 2 punionicu za električna vozila (EV) za sve goste.",
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
    form_label_email: "E-mail adresa",
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
    form_label_message: "Posebni zahtjevi / Poruka",
    btn_book_wa: "Rezerviraj putem WhatsAppa",
    wa_notice: "*Bit ćete preusmjereni na WhatsApp radi potvrde detalja.",
    success_title: "Otvaranje WhatsAppa",
    success_message: "Otvaramo WhatsApp u novom prozoru kako biste poslali upit za rezervaciju za odabrane datume. Ako se stranica ne otvori automatski, kliknite ispod.",
    btn_manual_wa: "Ručno otvori WhatsApp",
    btn_close_window: "Zatvori prozor",
    footer_brand_desc: "Utočište gdje se suvremeni arhitektonski luksuz susreće s tradicionalnim ručno klesanim kamenim zidovima otoka Krka. Villa Posija nudi beskompromisnu uslugu i privatnost.",
    footer_nav_hdr: "Navigacija",
    footer_link_home: "Početna",
    footer_link_about: "O vili",
    footer_link_amenities: "Sadržaji",
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
    whatsapp_opening: "OTVARANJE WHATSAPPA..."
  },
  de: {
    "meta-title": "Villa Posija | Luxus-Steinvilla in Kras, Insel Krk",
    nav_about: "Über uns",
    nav_amenities: "Ausstattung",
    nav_gallery: "Galerie",
    nav_contact: "Kontakt",
    nav_book_now: "Buchen",
    hero_subtitle: "Exklusiver Rückzugsort an der Adria",
    hero_title: "Wo Luxus auf den Horizont trifft",
    hero_text: "Ein exquisites privates Refugium in Kras auf der Insel Krk, Kroatien. Die Villa Posija verbindet authentische Steinelemente mit modernem Luxus und bietet einen beheizten Pool, ländliche Privatsphäre und eine idyllische mediterrane Umgebung.",
    hero_cta_explore: "Villa erkunden",
    hero_cta_availability: "Verfügbarkeit prüfen",
    about_subtitle: "Das Anwesen",
    about_heading: "Authentische kroatische Steinarchitektur & moderner Komfort",
    about_desc: "Im ruhigen Ort Kras auf der Insel Krk gelegen, ist die Villa Posija ein Meisterwerk regionaler Architektur. Erbaut aus handgehauenem Stein, fügt sich die Villa harmonisch in die Olivenhaine, Rosmarinsträucher und Natur der Insel ein und bietet absolute Privatsphäre und einen erholsamen Rückzugsort.",
    about_f1_title: "Authentisches Mauerwerk",
    about_f1_desc: "Traditionelle Architektur mit dicken Steinwänden sorgt für natürliche Kühlung und rustikale Eleganz.",
    about_f2_title: "Beheizter Infinity-Pool",
    about_f2_desc: "Über der Küste schwebend, mit integrierter Heizung für angenehmes Schwimmen das ganze Jahr über.",
    about_f3_title: "Traumhafter Meerblick",
    about_f3_desc: "Atemberaubende Aussicht auf das kristallblaue Wasser der Adria und die benachbarten Inseln.",
    about_f4_title: "Mediterrane Flora",
    about_f4_desc: "Privates Anwesen mit duftenden Gärten voller Lavendel, Feigen- und Olivenbäumen.",
    about_cta: "Gästeservice kontaktieren",
    amenities_subtitle: "Erstklassiger Service",
    amenities_title: "Für Ihren vollendeten Komfort",
    amenity_1_title: "Außenpool",
    amenity_1_desc: "Schöner beheizter Infinity-Außenpool mit kristallklarem Wasser und einer großen Sonnenterrasse.",
    amenity_2_title: "BBQ-Bereich im Freien",
    amenity_2_desc: "Authentischer Steinkamin, Außenküche und gemütlicher Essplatz für Mahlzeiten im Freien.",
    amenity_3_title: "Gemeinschaftsraum",
    amenity_3_desc: "Ein gemütlicher Gemeinschaftsbereich für Entspannung, gesellige Stunden und gemeinsame Aktivitäten.",
    amenity_4_title: "Klimaanlage",
    amenity_4_desc: "Leise, voll integrierte moderne Klimaanlage in allen Räumen für optimalen Komfort.",
    amenity_5_title: "Kostenloses WLAN",
    amenity_5_desc: "Schnelles Gigabit-WLAN im gesamten Innen- und Außenbereich der Villa ohne Unterbrechungen.",
    amenity_6_title: "Gesicherter Privatparkplatz",
    amenity_6_desc: "Sicherer privater Parkplatz auf dem Gelände hinter elektrischen Toren mit Videoüberwachung.",
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
    faq_a3: "Ja, die Villa Posija verfügt über einen sicheren, umzäunten Privatparkplatz für bis zu 3 Fahrzeuge mit aktiver Videoüberwachung. Zudem steht unseren Gästen eine kostenfreie Typ-2-Ladestation für Elektrofahrzeuge zur Verfügung.",
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
    form_label_email: "E-Mail-Adresse",
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
    footer_brand_desc: "Ein Refugium, in dem moderner Luxus auf das traditionelle Mauerwerk der Insel Krk trifft. Die Villa Posija bietet exklusiven Service und absolute Privatsphäre.",
    footer_nav_hdr: "Navigation",
    footer_link_home: "Startseite",
    footer_link_about: "Über die Villa",
    footer_link_amenities: "Ausstattung",
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
    whatsapp_opening: "WHATSAPP WIRD GEÖFFNET..."
  },
  it: {
    "meta-title": "Villa Posija | Villa di lusso in pietra a Kras, isola di Krk",
    nav_about: "La villa",
    nav_amenities: "Servizi",
    nav_gallery: "Galleria",
    nav_contact: "Contatto",
    nav_book_now: "Prenota",
    hero_subtitle: "Fuga esclusiva sull'Adriatico",
    hero_title: "Dove il lusso incontra l'orizzonte",
    hero_text: "Un rifugio privato esclusivo situato a Kras, sull'isola di Krk, in Croazia. Unendo l'autentica architettura in pietra al design moderno, Villa Posija offre una piscina riscaldata, massima privacy e una natura incontaminata.",
    hero_cta_explore: "Esplora la villa",
    hero_cta_availability: "Verifica disponibilità",
    about_subtitle: "Il rifugio",
    about_heading: "Autentica architettura in pietra croata e comfort contemporaneo",
    about_desc: "Situata nel tranquillo villaggio di Kras, sull'isola di Krk, Villa Posija rappresenta un capolavoro di architettura locale. Costruita con pietra locale scolpita a mano, la villa si integra perfettamente tra uliveti d'argento, rosmarino selvatico e natura rilassante dell'isola.",
    about_f1_title: "Pietra autentica",
    about_f1_desc: "La tradizionale architettura in pietra garantisce isolamento termico naturale ed eleganza rustica.",
    about_f2_title: "Piscina a sfioro riscaldata",
    about_f2_desc: "Sospesa sulla costa, dotata di riscaldamento integrato per fare il bagno tutto l'anno.",
    about_f3_title: "Splendida vista mare",
    about_f3_desc: "Vista spettacolare sulle acque cristalline dell'Adriatico e sulle isole vicine.",
    about_f4_title: "Flora mediterranea",
    about_f4_desc: "Tenuta privata con giardini aromatici ricchi di lavanda, fichi e ulivi centenari.",
    about_cta: "Contatta il servizio ospiti",
    amenities_subtitle: "Servizi esclusivi",
    amenities_title: "Creato per il vostro comfort",
    amenity_1_title: "Piscina all'aperto",
    amenity_1_desc: "Splendida piscina riscaldata a sfioro con acqua cristallina e spaziosa terrazza solarium.",
    amenity_2_title: "Zona BBQ all'aperto",
    amenity_2_desc: "Caminetto in pietra, cucina esterna integrata e zona pranzo ideale per cene all'aperto.",
    amenity_3_title: "Sala comune",
    amenity_3_desc: "Uno spazio comune accogliente pensato per il relax, la socializzazione e il divertimento.",
    amenity_4_title: "Aria condizionata",
    amenity_4_desc: "Impianto di climatizzazione silenzioso in tutte le camere per garantire il massimo comfort.",
    amenity_5_title: "Wi-Fi gratuito",
    amenity_5_desc: "Connessione Wi-Fi ad alta velocità in tutta la proprietà, inclusi giardino e piscina.",
    amenity_6_title: "Parcheggio privato sicuro",
    amenity_6_desc: "Parcheggio custodito gratuito all'interno della proprietà con cancello elettrico e videosorveglianza.",
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
    faq_a2: "Per preservare i tessuti di pregio degli interni, i pavimenti in legno e accogliere al meglio gli ospiti con allergie, gli animali domestici non sono ammessi a Villa Posija. Vi ringraziamo per la comprensione.",
    faq_q3: "È disponibile un parcheggio e supportate la ricarica per veicoli elettrici?",
    faq_a3: "Sì, Villa Posija dispone di un parcheggio privato recintato e sicuro per un massimo di 3 auto, monitorato da videosorveglianza. Mettiamo inoltre a disposizione una stazione di ricarica per veicoli elettrici (EV) di Tipo 2 gratuita.",
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
    form_label_email: "Indirizzo e-mail",
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
    footer_brand_desc: "Un rifugio in cui il lusso contemporaneo incontra le tradizionali pareti in pietra dell'isola di Krk. Villa Posija offre un servizio impeccabile e privacy assoluta.",
    footer_nav_hdr: "Navigazione",
    footer_link_home: "Home",
    footer_link_about: "La Villa",
    footer_link_amenities: "Servizi esclusivi",
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
    whatsapp_opening: "APERTURA WHATSAPP..."
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
    if (width <= 768) {
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
    const curYear = new Date().getFullYear();
    const curMonthStr = String(new Date().getMonth() + 1).padStart(2, '0');
    const nextMonthStr = String((new Date().getMonth() + 2) % 12 || 12).padStart(2, '0');
    const nextMonthYear = new Date().getMonth() === 11 ? curYear + 1 : curYear;

    return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Booking.com//NONSGML Booking.com Calendar//EN
BEGIN:VEVENT
DTSTART;VALUE=DATE:${curYear}${curMonthStr}24
DTEND;VALUE=DATE:${curYear}${curMonthStr}30
SUMMARY:Booked - Booking.com
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:${nextMonthYear}${nextMonthStr}06
DTEND;VALUE=DATE:${nextMonthYear}${nextMonthStr}14
SUMMARY:Booked - Booking.com
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:${nextMonthYear}${nextMonthStr}20
DTEND;VALUE=DATE:${nextMonthYear}${nextMonthStr}27
SUMMARY:Booked - Booking.com
END:VEVENT
END:VCALENDAR`;
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

      // WhatsApp Dynamic Messaging
      let messageText = "";
      if (currentLang === 'hr') {
        messageText = `Pozdrav! Želim rezervirati Villu Posija u Krasu na Krku u terminu od ${checkInStr} do ${checkOutStr}. Jesu li ovi termini slobodni za direktnu rezervaciju?`;
      } else if (currentLang === 'de') {
        messageText = `Hallo! Ich möchte die Villa Posija in Kras (Insel Krk) vom ${checkInStr} bis zum ${checkOutStr} buchen. Sind diese Termine für eine direkte Buchung frei?`;
      } else if (currentLang === 'it') {
        messageText = `Ciao! Vorrei prenotare Villa Posija a Kras dal ${checkInStr} al ${checkOutStr}. Questi giorni sono disponibili per una prenotazione diretta?`;
      } else {
        messageText = `Hello! I would like to book Villa Posija in Kras (Krk Island) from ${checkInStr} to ${checkOutStr}. Are these dates available for a direct booking?`;
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
});
