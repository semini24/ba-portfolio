# Semini Premarathna — BA Portfolio (Version 1.3)

A creative and responsive **HTML + CSS + JavaScript** portfolio, with an evidence-backed **HeritageWalk Sri Lanka** Business Analyst / UX case study.

This project requires **no React, npm, frameworks, build step, or API key**.

## 1. Open and run it in VS Code

1. Extract the ZIP archive.
2. In **Visual Studio Code**, select **File → Open Folder** and open `Semini_BA_Portfolio_Starter`.
3. Install the free **Live Server** VS Code extension if you want automatic reloads.
4. Right-click `index.html` and select **Open with Live Server**. You can also double-click `index.html` to open the website in a browser.
5. On the homepage, go to **Projects → HeritageWalk Sri Lanka → Read detailed case study**. That opens `heritagewalk.html`.

## 2. Folder structure

```text
Semini_BA_Portfolio_Starter/
├── index.html                 # Home, about, projects, skills, timeline, contact
├── style.css                  # Main site styling
├── script.js                  # Filters, popups, dark mode, navigation, animations
├── heritagewalk.html          # Dedicated evidence-backed project case study
├── heritagewalk.css           # Case-study page styling
├── heritagewalk.js            # Screenshot lightbox, themes and animations
├── assets/
│   ├── favicon.svg
│   ├── Semini_Premarathna.pdf  # Downloadable CV
│   ├── profile-photo.webp     # Your supplied professional portrait
│   └── heritagewalk/
│       ├── home.webp
│       ├── explore.webp
│       ├── navigation.webp
│       ├── facilities.webp
│       ├── digital-guide.webp
│       ├── emergency.webp
│       └── about.webp
└── README.md
```

## 3. Where to edit content

| You want to change… | File | What to look for |
|---|---|---|
| Your homepage introduction | `index.html` | `<section id="home"` |
| Your portrait | `assets/profile-photo.webp` | Replace with another image of the same filename, or change its path in `index.html` |
| Your project cards | `index.html` | `<section id="work"` |
| Summaries for KuppiConnect, NovaCampus, etc. | `script.js` | `const caseStudies = {` |
| HeritageWalk case-study story | `heritagewalk.html` | Sections `challenge`, `contribution`, `design`, `screens`, `validation`, `reflection` |
| HeritageWalk colors/layout | `heritagewalk.css` | `case-hero`, `case-feature`, `case-gallery` |
| Screenshot gallery images | `assets/heritagewalk` and `heritagewalk.html` | `class="case-screen-card"` |
| Learning journey and skills | `index.html` | `id="journey"`, `id="skills"` |
| Downloadable CV | `assets/Semini_Premarathna.pdf` | Replace file with updated CV using same name |
| Contact email and social links | `index.html` | `id="contact"` |

**How editing works:** HTML contains your content, CSS controls how it looks, and JavaScript handles interactivity. Save your changes and refresh your browser (or use Live Server).

## 4. HeritageWalk source evidence and scope

The case study uses the seven application screenshots you provided, the Milestone 02 HCI group report, and the final Milestones 01–03 report. The project-wide findings are **team evidence**, not individual achievements.

- Assigned feature scope: **Navigation, Digital Guide, Facilities & Safety**. **Confirmed personal activities:** requirements analysis, Figma/wireframe design, functional and usability testing. **Not included:** Flutter implementation (handled by the development team).
- Group research recap: **30 initial questionnaire responses** and six evidence-based user requirements.
- Functional testing: **22 of 22 planned test cases passed**, per the final group report.
- Usability evaluation: **10 form submissions**, with self-reported independent task completion of 5/10 for navigation, 6/10 for facilities/safety and 2/10 for tour itinerary creation. These are **not directly observed measurements**.
- Usability fixes are **proposed**; the report does not establish their implementation or successful retesting.
- Home, Explore and About screenshots are labelled **project-wide context**, not individual work.
- The **Digital Guide screenshot** is included and clearly labels audio as a **demo UI preview only**, not recorded narration or verified live audio.
- The Digital Guide section includes an editable **problem → requirement → design → team implementation → testing** workflow diagram for EV04 and TC07–TC08.
- The individual activities were **confirmed by the portfolio owner**, so the narrative avoids claiming Flutter feature development.

**Publishing note:** The original group reports are not included in this public-facing website package because they identify other students. If you decide to publish a report, first obtain permission and remove personal identifiers. The site includes narrative summaries and your supplied screenshots instead.

## 5. Portfolio and project links

- **GitHub profile:** https://github.com/semini24
- **HeritageWalk repository:** https://github.com/semini24/HCI_Y3S2_HeritageWalk_mobileapp
- **Figma wireframes:** https://www.figma.com/design/ZQuLCneGaBl8sNQxhKl276/Untitled?node-id=1003-2&p=f
- **Low-fidelity prototype:** https://www.figma.com/proto/5ZQb32WmNfrIFO96GkjMmt/Untitled?node-id=0-1
- **High-fidelity prototype:** https://www.figma.com/proto/oaVze5ga1xlbgUyQX43aJ3/Untitled?node-id=8-212&starting-point-node-id=8%3A212

## 6. Next improvements

1. Optionally add a sanitized, original Figma user-flow or requirements document demonstrating your own BA work.
2. Replace the other four starter project summaries with evidence-backed case studies as you gather materials.
3. Publish the folder through GitHub Pages and use the live link on your CV and LinkedIn.

## 7. Deploy to GitHub Pages (optional, when you're ready)

1. Create a **new public repository** specifically for your portfolio, e.g. `ba-portfolio` (do not overwrite your HeritageWalk project).
2. Upload all contents of this folder into the repository root.
3. In the repository, select **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Choose the main branch and root folder, then save.
5. When GitHub Pages publishes the site, use the resulting URL to share your portfolio.

Check that your email and CV are details you are comfortable sharing publicly before publishing.

---

Built as an editable learning project: HTML, CSS, and JavaScript. No analytics or contact-form backend is included; the Contact button opens the user's email client.
