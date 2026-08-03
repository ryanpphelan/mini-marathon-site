# 26.2 Step Mini Marathon — Website

A static website for the 26.2 Step Mini Marathon, built to run for free on **GitHub Pages**. No server, no build step, no Wix. Just HTML, one CSS file, and images.

## What's here

```
index.html            Home
our-cause.html        Our Cause (hereditary cancer risk)
denise-story.html     Denise's Story (founder)
events.html           Events & schedule
get-involved.html     Register / volunteer / partner
donate.html           Donate (placeholder until platform is set)
shop.html             Shop (links to Bonfire)
resources.html        Resources & trusted links
about.html            About & Board
partners.html         Partners & Charities
press.html            Press & Media
photos.html           Photos
contact.html          Contact
404.html              Friendly "not found" page
assets/css/style.css  All styling (Option B "Bold Modern")
assets/js/main.js     Mobile menu
assets/img/           Logo + favicon
sitemap.xml, robots.txt, llms.txt   Search & AI-engine discoverability
CNAME                 Custom domain (www.262minimarathon.com)
```

## Put it online (one-time setup)

1. Create a free GitHub account, then create a new **public** repository.
2. Upload everything in this folder to the repository (drag-and-drop works on github.com).
3. In the repo, go to **Settings → Pages**. Under "Build and deployment," set **Source: Deploy from a branch**, branch **main**, folder **/(root)**. Save.
4. Wait a minute, GitHub gives you a live URL like `https://yourname.github.io/reponame/`.
5. To use **262minimarathon.com**: in Settings → Pages → "Custom domain," enter `www.262minimarathon.com`. Then at your domain registrar, add a CNAME record pointing `www` to `yourname.github.io`. GitHub will issue HTTPS automatically. (The `CNAME` file here already sets this.)
6. Once the new site looks good on the live URL, **turn off Wix**. The domain stays pointed at GitHub.

## Editing content

Open any `.html` file and edit the text between the tags. All the colors and layout live in `assets/css/style.css`, so you rarely need to touch it. Change something, commit, and GitHub Pages updates the live site within a minute.

## Before launch — still to do

- Swap the logo for a **vector / transparent-PNG** version (currently a JPEG with an off-white square).
- Add real **event/hero photos** (Photos page and Home hero).
- Fill placeholders: the fundraising **goal ($X over X years)**, the **stat** wording/source, and the **Denise's Story** details being finalized.
- Wire up **Donate** (Zeffy/PayPal/Venmo) once the 501(c)(3) and platform timing are set.
- Point the **Shop** button at the live Bonfire store.
- Connect the **Contact** and newsletter forms to a static-friendly form service (e.g. Formspree).
- Collect and add **partner/sponsor logos**.

Design direction: Option B "Bold Modern." Palette and rationale are in the project's build-requirements doc.
