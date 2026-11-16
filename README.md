# Sarvonnathi Events website

Plain HTML, CSS and JavaScript. No build step, no installation.

## Files
- index.html – page structure, title and meta tags
- style.css – colours, layout and animations (colours are variables at the top)
- script.js – the CONFIG block at the top holds the WhatsApp number, phone, services and gallery photos
- images/ – logo and event photos

## Preview
Open index.html in a browser. An internet connection is needed for the Google Fonts.

## Edit content
- WhatsApp or phone: change `whatsapp` and `phone` in CONFIG (script.js), and the phone line in the contact code.
- Add a service: add `{name, desc, img}` to `services`.
- Add a gallery photo: put the file in images/ and add `{src:"images/new.webp", alt:"…", cat:"Category"}` to `photos`.
  Filter buttons appear automatically when there are two or more categories.

## Publish
Upload the whole folder to any static host (Netlify, Vercel, GitHub Pages, or your own hosting).
Before launch, add your domain URL and a share image to the og: meta tags in index.html.
