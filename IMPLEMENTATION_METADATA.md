# Implementation Plan: Metadata Enhancement

## Goal Description
Enhance the overall website metadata by implementing a complete and robust set of standard SEO, Open Graph (Facebook/LinkedIn), and Twitter Card meta tags. We will also replace the existing "bolt.new" default preview images with a real screenshot of the actual website.

## Proposed Changes

### Configuration and Metadata
#### [MODIFY] `index.html` (file:///c:/Users/armim/OneDrive/Bureaublad/Site2/index.html)
- Add standard `<meta name="description">`, `<meta name="keywords">`, `<meta name="author">` tags.
- Update/add comprehensive Open Graph metadata: `og:type`, `og:title`, `og:description`, `og:image`, `og:url`.
- Update Twitter metadata: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`.
- Update `<meta name="theme-color">` to match the site's primary theme.
- Replace `https://bolt.new/static/og_default.png` with `/snapshot.png`.

### Media Assets
#### [NEW] `public/snapshot.png` (file:///c:/Users/armim/OneDrive/Bureaublad/Site2/public/snapshot.png)
- A high-quality screenshot of the actual website, captured from the local development server. 
- Serves as the fallback image when sharing links on social media (Facebook, LinkedIn, Twitter, iMessage, etc.).

## Verification Plan

### Automated Tests
- Run the local Vite server (`npm run dev`) and utilize a browser subagent to:
  1. Capture a clean snapshot of the home page.
  2. Verify that there are no console errors or visual anomalies.

### Manual Verification
1. Inspect the resulting HTML source block of `http://localhost:5173` to confirm the presence of all SEO and social media metadata tags.
2. Ensure the `<meta property="og:image">` and `<meta name="twitter:image">` specifically point to `/snapshot.png`.
3. Test the local URL using an Open Graph tool (like a browser extension or a local meta tag viewer) if possible.

## User Review Required
> [!NOTE]
> Please review this implementation plan. I will capture the snapshot automatically for you using an AI browser agent once you approve. If you have specific content you want for the `description` or `keywords` in the metadata, please let me know. By default, I will generate them contextually based on the `Neuritas-AI Futuristic Website` title.
