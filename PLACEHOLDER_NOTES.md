# Placeholder Notes — Angus Coulson Portfolio

Everything listed below is placeholder content that should be reviewed and replaced before the site goes fully live.

---

## Images

All images are in `/public/images/`. Replace each file with a real photo — the filename must stay the same.

| File | Used In | Recommended Size | Notes |
|------|---------|-----------------|-------|
| `profile.jpg` | About section — portrait photo with red accent bar | 600x800px (3:4 portrait) | Displayed as a tall portrait. Use a professional headshot or editorial portrait. |
| `at-work.jpg` | About section — secondary image | 800x500px (landscape, 16:10) | Action shot: reporting, on location, in a newsroom, etc. |

Once real photos are added, **remove the placeholder overlay `<div>`** inside each image component in `app/page.tsx` (search for "Placeholder overlay" comments).

---

## Tagline

**Current:** "Telling stories that matter — from the pitch to the page."
**Location:** Hero section in `app/page.tsx`

Replace with a personal tagline if preferred.

---

## About Text

**Location:** About section in `app/page.tsx`

The about copy is a polished draft based on the brief. Review and personalise — add specific achievements, interests, or career goals.

---

## Article Descriptions

Each article entry has a 1–2 sentence placeholder description. These are based on the headlines but should be reviewed for accuracy.

**Location:** `publishedWork` and `additionalWork` arrays at the top of `app/page.tsx`

---

## Open Graph Image

The OG image is set to `/images/profile.jpg` in `app/layout.tsx`. For best social sharing previews, create a dedicated `og-image.jpg` (1200x630px) and update the path in `layout.tsx`.
