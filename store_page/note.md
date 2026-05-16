 ========== DESIGN CHOICES & COMMENTS ==========
  1. RESPONSIVE GRID: Used CSS Grid with auto-fill/minmax(280px, 1fr) – ensures 4 cards on desktop,
     2 cards on tablet, 1 card on mobile without media query overkill.
  2. NAVIGATION: Flex wrap + media query for column layout on narrow screens. Sticky header improves UX.
  3. TYPOGRAPHY & COLOR: Inter font for readability; gradient brand and modern blue accents create clean store vibe.
  4. PRODUCT CARDS: Hover lift effect, rounded corners, subtle shadows, image scale on hover to enhance engagement.
  5. ACCESSIBILITY: alt attributes, semantic HTML, focus states for buttons, aria-label for socials.
  6. FOOTER: Contains copyright text and social media icons (FontAwesome) – aligned responsive.
  7. PLACEHOLDER IMAGES: High-quality placeholder images via Picsum with consistent ratio, representing diverse products.
  8. BUTTON FEEDBACK: Simple JavaScript alert demo (simulates cart addition) – keeps interaction realistic.
  9. MEDIA QUERIES: Fine-tuned breakpoints at 880px, 640px, and 480px for smooth mobile adaptation.
  10. SCROLL BEHAVIOR: smooth + scroll-margin-top so fixed header doesn't hide section titles.
  Overall design balances modern e-commerce style, fully responsive, and matches the brief requirements.