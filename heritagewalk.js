'use strict';
const $ = q => document.querySelector(q);
const $$ = q => Array.from(document.querySelectorAll(q));
document.documentElement.classList.add('js');
// Share the visitor's theme preference with the portfolio home page.
let theme=null;
try{theme=localStorage.getItem('semini-portfolio-theme')}catch(_){}
if(theme==='dark'||theme==='light')document.documentElement.dataset.theme=theme;
else if(window.matchMedia('(prefers-color-scheme: dark)').matches)document.documentElement.dataset.theme='dark';
const themeButton=$('#caseThemeToggle');
function syncTheme(){const dark=document.documentElement.dataset.theme==='dark';themeButton.setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme');themeButton.querySelector('span').textContent=dark?'☀':'◐'}
syncTheme();
themeButton.addEventListener('click',()=>{const v=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=v;try{localStorage.setItem('semini-portfolio-theme',v)}catch(_){}syncTheme()});
// Reveal content when entering viewport; no animation when reduced motion is enabled.
const revealing=$$('[data-reveal]');
if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const observer=new IntersectionObserver((entries,obs)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');obs.unobserve(e.target)}}),{threshold:.04,rootMargin:'0px 0px 60px 0px'});
 revealing.forEach(e=>observer.observe(e));
}else revealing.forEach(e=>e.classList.add('is-visible'));
// Screenshot lightbox uses the seven user-supplied application screenshots.
const pictures=[
 ['assets/heritagewalk/home.webp','Home and quick actions — project-wide context'],
 ['assets/heritagewalk/explore.webp','Explore heritage places — project-wide context'],
 ['assets/heritagewalk/navigation.webp','Route and navigation — BA/UX contribution area'],
 ['assets/heritagewalk/digital-guide.webp','Digital Guide — BA/UX contribution area (demo audio UI only)'],
 ['assets/heritagewalk/facilities.webp','Nearby facilities — BA/UX contribution area'],
 ['assets/heritagewalk/emergency.webp','Emergency support — BA/UX contribution area'],
 ['assets/heritagewalk/about.webp','About HeritageWalk — project-wide context']
];
const lightbox=$('#screensLightbox');
let current=0,trigger=null;
function showImage(i){current=(i+pictures.length)%pictures.length;$('#lightboxImage').src=pictures[current][0];$('#lightboxImage').alt=pictures[current][1];$('#lightboxCaption').textContent=`${String(current+1).padStart(2,'0')} / ${pictures.length} — ${pictures[current][1]}`}
$$('[data-screenshot]').forEach(btn=>btn.addEventListener('click',()=>{trigger=btn;showImage(Number(btn.dataset.screenshot));lightbox.showModal()}));
$('#lightboxClose').addEventListener('click',()=>lightbox.close());
$('#lightboxNext').addEventListener('click',()=>showImage(current+1));
$('#lightboxPrev').addEventListener('click',()=>showImage(current-1));
lightbox.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();showImage(current+1)}if(e.key==='ArrowLeft'){e.preventDefault();showImage(current-1)}});
lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});
lightbox.addEventListener('close',()=>trigger?.focus());
// Compact scroll progress indicator.
const progress=$('#caseScrollProgress');let scheduled=false;
function setProgress(){const full=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${full?Math.min(100,Math.max(0,scrollY/full*100)):0}%`;scheduled=false}
window.addEventListener('scroll',()=>{if(!scheduled){requestAnimationFrame(setProgress);scheduled=true}},{passive:true});window.addEventListener('resize',setProgress);setProgress();
