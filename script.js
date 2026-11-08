'use strict';

// The other project popups are introductory drafts from the supplied CV.
// HeritageWalk has its own evidence-backed case study in heritagewalk.html.
const caseStudies = {
  heritage: {
    category: '01 / MOBILE APP • HCI & USER EXPERIENCE',
    title: 'HeritageWalk Sri Lanka',
    summary: 'A mobile application designed to make heritage tourism easier through discovery, personalized tour planning, navigation and safety-related features.',
    problem: 'Visitors need a convenient way to discover heritage places, plan routes, access relevant information and find nearby facilities during their tours.',
    contribution: [
      'Analyzed user needs and helped define functional and non-functional requirements.',
      'Designed user-friendly interfaces and navigation workflows using HCI principles.',
      'My documented scope covered navigation, digital guidance, nearby facilities and safety support.',
      'Contributed to usability evaluation and functional testing.'
    ],
    solution: 'A Flutter-based application supporting personalized itineraries, heritage site details, route navigation and traveler assistance. See the dedicated HeritageWalk page for real screenshots, requirements traceability and testing evidence.',
    tech: ['Flutter', 'Dart', 'Firebase', 'OpenStreetMap', 'OSRM'],
    resources: [{ label: 'Detailed case study ↗', url: 'heritagewalk.html' }, { label: 'GitHub repository ↗', url: 'https://github.com/semini24/HCI_Y3S2_HeritageWalk_mobileapp' }, { label: 'Figma design ↗', url: 'https://www.figma.com/design/ZQuLCneGaBl8sNQxhKl276/Untitled?node-id=1003-2&p=f' }]
  },
  kuppi: {
    category: '02 / WEB PLATFORM • LEARNING COMMUNITY',
    title: 'KuppiConnect',
    summary: 'A peer-to-peer learning management system supporting academic resource sharing, discussions and feedback.',
    problem: 'Students benefit from having learning materials, peer discussions and useful feedback accessible in a single collaborative platform.',
    contribution: [
      'Implemented content sharing and resource management features.',
      'Developed note upload and discussion forum functionality.',
      'Integrated resource ratings and feedback.',
      'Contributed to AI-powered content summarization.'
    ],
    solution: 'A collaborative MERN platform that supports knowledge exchange between students. A later portfolio update can show the content-sharing process and feedback user flow.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js']
  },
  nova: {
    category: '03 / MANAGEMENT SYSTEM • CAMPUS',
    title: 'NovaCampus',
    summary: 'A university resource management platform with notification management and role-based access.',
    problem: 'University systems involve different user roles and ongoing changes that require clear access permissions and timely communication.',
    contribution: [
      'Implemented notification management features.',
      'Developed role-based access control mechanisms.',
      'Contributed to authentication and authorization processes.',
      'Improved communication through automated notifications.'
    ],
    solution: 'A Java and Spring Boot application supporting access permissions and automated user notifications. Permissions matrix and notification-flow documentation are useful next additions.',
    tech: ['Spring Boot', 'Java', 'SQL']
  },
  wood: {
    category: '04 / E-COMMERCE • DESIGNER WORKFLOW',
    title: 'WoodArt Gallery',
    summary: 'An e-commerce platform for showcasing and selling handcrafted wood art products.',
    problem: 'An online wood-art store needs an organized way to showcase products, support designers and manage product information.',
    contribution: [
      'Implemented external designer management functionality.',
      'Assisted with backend development and database integration.',
      'Worked on product management and user-experience improvements.'
    ],
    solution: 'A MERN e-commerce application supporting art-product browsing and designer-related workflows. Add a workflow diagram or requirements specification to clarify the BA aspects.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js']
  },
  bidding: {
    category: '05 / AUCTION PLATFORM • CUSTOMER EXPERIENCE',
    title: 'Online Bidding System',
    summary: 'A platform for product auctions, advertisements and customer feedback.',
    problem: 'An online bidding experience needs organized product listings and a clear way for customers to provide feedback.',
    contribution: [
      'Implemented advertisement management features.',
      'Developed customer feedback and review functionality.',
      'Contributed to auction and product management processes.'
    ],
    solution: 'A Java and SQL-based auction system covering product and user-facing workflows. More detailed auction flows and test cases can be added later.',
    tech: ['Java', 'SQL']
  }
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

document.documentElement.classList.add('js');

// Scroll-reveal with a fallback for older browsers.
const revealItems = $$('[data-reveal]');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px 48px 0px' });
  revealItems.forEach(el => observer.observe(el));
} else {
  revealItems.forEach(el => el.classList.add('is-visible'));
}

// Mobile navigation: keep its accessibility state in sync with visibility.
const menuToggle = $('#menuToggle');
const mobileNav = $('#mobileNav');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
  mobileNav.hidden = true;
}
menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  mobileNav.hidden = isOpen;
});
$$('#mobileNav a').forEach(link => link.addEventListener('click', closeMenu));
window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMenu(); });

// Dark theme is saved for return visits, with privacy-restricted storage fallback.
const themeToggle = $('#themeToggle');
let storedTheme = null;
try { storedTheme = localStorage.getItem('semini-portfolio-theme'); } catch (_) { /* storage can be blocked */ }
if (storedTheme === 'dark' || storedTheme === 'light') {
  document.documentElement.dataset.theme = storedTheme;
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.dataset.theme = 'dark';
}
function updateThemeButton() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
  themeToggle.setAttribute('title', isDark ? 'Switch to light theme' : 'Switch to dark theme');
  themeToggle.querySelector('span').textContent = isDark ? '☀' : '◐';
}
updateThemeButton();
themeToggle.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('semini-portfolio-theme', next); } catch (_) { /* ignore */ }
  updateThemeButton();
});

// Project filters.
$$('.filter-button').forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  $$('.filter-button').forEach(btn => {
    const isActive = btn === button;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
  $$('.project-card').forEach(card => {
    card.hidden = selected !== 'all' && card.dataset.category !== selected;
  });
}));

// Native dialog: support mouse, keyboard, escape and outside click.
const dialog = $('#caseDialog');
const closeDialog = $('#dialogClose');
let lastTrigger = null;
$$('[data-project]').forEach(button => button.addEventListener('click', () => {
  const data = caseStudies[button.dataset.project];
  if (!data) return;
  lastTrigger = button;
  $('#caseCategory').textContent = data.category;
  $('#caseTitle').textContent = data.title;
  $('#caseSummary').textContent = data.summary;
  $('#caseProblem').textContent = data.problem;
  $('#caseSolution').textContent = data.solution;
  const contributions = $('#caseContribution');
  contributions.replaceChildren(...data.contribution.map(item => {
    const li = document.createElement('li');
    li.textContent = item;
    return li;
  }));
  const tools = $('#caseTech');
  tools.replaceChildren(...data.tech.map(item => {
    const span = document.createElement('span');
    span.textContent = item;
    return span;
  }));
  const resourcePanel = $('#caseResources');
  const resourceLinks = $('#caseResourceLinks');
  const resources = data.resources ?? [];
  resourcePanel.hidden = resources.length === 0;
  resourceLinks.replaceChildren(...resources.map(item => {
    const anchor = document.createElement('a');
    anchor.href = item.url;
    anchor.textContent = item.label;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    return anchor;
  }));
  dialog.showModal();
}));
closeDialog.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => lastTrigger?.focus());

// Copy email, with a fallback on local-file (file://) environments.
const copyStatus = $('#copyStatus');
$('#copyEmail').addEventListener('click', async () => {
  const email = 'semininm19@gmail.com';
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard API unavailable');
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = 'Email address copied!';
  } catch (_) {
    copyStatus.textContent = `Copy this email: ${email}`;
  }
});

// Reading progress indicator.
const progressBar = $('#scrollProgress');
let ticking = false;
function updateProgress() {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${total > 0 ? Math.min(100, Math.max(0, window.scrollY / total * 100)) : 0}%`;
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateProgress);
    ticking = true;
  }
}, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();
