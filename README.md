# 26.2 Step Mini Marathon — Website

The website for the 26.2 Step Mini Marathon. It is a set of plain HTML pages with one
shared stylesheet, so there is no server, no build step, and no complicated software to run.
If you can edit a file and click a couple of buttons, you can update this site.

## Where the site lives right now

This is currently a **staging site**: a preview used for review before the site goes
public. It is served for free by GitHub Pages at:

    https://ryanpphelan.github.io/mini-marathon-site/

The real domain (262minimarathon.com) is intentionally **not** connected yet, and every
page carries a `noindex` tag plus a `robots.txt` block so search engines stay away during
review. Nothing here affects the real domain until we deliberately switch it over.

## What is here

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
assets/css/style.css  All styling
assets/js/main.js     Mobile menu
assets/img/           Logo + favicon
robots.txt            Blocks search engines during staging
sitemap.xml, llms.txt Discoverability (only matter once public)
```

## How to make a change (using GitHub Desktop)

1. Open **GitHub Desktop** and make sure this repository is selected.
2. Edit the files on your computer, or drop in new versions you have been sent.
3. GitHub Desktop lists every change on the left. Type a short note in the summary box at
   the bottom (for example, "Update Events page").
4. Click **Commit to main**, then click **Push origin** at the top.
5. Wait about a minute, then refresh the staging URL to see the change live.

That is the whole routine: edit, commit, push.

## Editing content

Open any `.html` file and edit the text between the tags. The colors and layout all live in
`assets/css/style.css`, so you rarely need to touch it.

## Going public later (do NOT do this until the board decides)

When the site is approved and ready for the public, three things happen together:

1. Add a `CNAME` file containing the real domain, and set the custom domain under
   **Settings → Pages** on GitHub. (Note: a `CNAME` file was removed on purpose during
   staging, because it forces a redirect to the real domain. It gets added back here.)
2. Update the DNS records at the domain registrar. GitHub shows exactly which records.
3. Remove the `noindex` tags and the `robots.txt` block so search engines can finally find
   the site.

Until all three are done on purpose, this stays a private staging site.

## Before launch — content still to finalize

- Swap the logo for a **vector / transparent-PNG** version (currently a JPEG).
- Add real **event/hero photos** (Photos page and Home hero).
- Fill placeholders: the fundraising **goal**, the **stat** wording/source, and the final
  **Denise's Story** details.
- Wire up **Donate** (platform to be chosen) once the 501(c)(3) and timing are set.
- Point the **Shop** button at the live Bonfire store.
- Connect the **Contact** and newsletter forms to a form service.
- Collect and add **partner/sponsor logos**.
