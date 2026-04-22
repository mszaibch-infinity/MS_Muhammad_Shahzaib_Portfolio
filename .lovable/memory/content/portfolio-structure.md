---
name: portfolio-structure
description: Section layout and routing of the portfolio site
type: feature
---
Single-page portfolio at `/` with detail routes at `/projects/:slug`.

Index.tsx section order:
1. Navbar (CV button opens CVDialog)
2. Hero — "Hi, I Am Muhammad Shahzaib" + 3 buttons (Learn More / Get In Touch / CV)
3. Stats (id="about") — interesting facts, hanging Education card on white bg, red stat numbers
4. Drives (id="drives") — Expertise accordion with plus/minus, no emojis
5. BuildingGreener — "Scaling up — but held back by emissions, compliance, and complex data?"
6. ProjectOutcomes (id="projects") — 4 cards linking to /projects/:slug
7. Testimonial
8. Certifications (id="certifications")
9. Contact (id="contact") — "Let's talk!" form (left) + black-shirt portrait on white (right)
10. Footer

Removed components: About.tsx, LetsTalk.tsx, Companies.tsx, Education.tsx (Education merged into Stats).

ProjectDetail.tsx renders 4 placeholder sections per project (Overview, Methodology, Findings, Outcomes) — content is "Coming soon" until user fills it in.

CV is reachable from: navbar "CV" button + hero "CV" button (both open CVDialog with Download / View in Browser).
