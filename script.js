/* FINDA Android download — no tracking, no backend, no Netlify APIs. */
(() => {
  'use strict';
  const DOWNLOAD_URL = 'https://findahq.com/android';
  const SHARE_URL = 'https://get.findahq.com/';
  const $ = id => document.getElementById(id);
  const rotator = $('wordRotator');
  const phrases = ['A smarter home search.', 'More clarity with RentPlan.', 'A more connected journey.', 'A little more peace of mind.'];
  let index = 0;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (rotator && !reducedMotion) {
    window.setInterval(() => {
      rotator.classList.add('changing');
      window.setTimeout(() => {index = (index + 1) % phrases.length;rotator.textContent = phrases[index];rotator.classList.remove('changing');},300);
    },3700);
  }
  const prog = $('readingProgress');
  const scroll = () => {
    if (!prog) return;
    const range = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.width = (range > 0 ? Math.min(100, Math.max(0, window.scrollY / range * 100)) : 0) + '%';
  };
  window.addEventListener('scroll', scroll, {passive:true});scroll();
  let toastTimeout;
  function toast(msg){
    const el = $('toast'); if(!el)return;
    el.textContent=msg;el.classList.add('show');window.clearTimeout(toastTimeout);
    toastTimeout = window.setTimeout(()=>el.classList.remove('show'),2900);
  }
  async function copyLink(){
    try{
      if(!navigator.clipboard || !window.isSecureContext)throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(DOWNLOAD_URL);
      toast('Download link copied');
    }catch(_){
      const input=document.createElement('textarea');input.value=DOWNLOAD_URL;input.style.position='fixed';input.style.opacity='0';document.body.appendChild(input);input.select();
      try{document.execCommand('copy');toast('Download link copied');}
      catch(__){toast('Open the download button to copy the URL');}
      input.remove();
    }
  }
  $('copyButton')?.addEventListener('click', copyLink);
  $('shareButton')?.addEventListener('click',async()=>{
    if(navigator.share){try{await navigator.share({title:'Get FINDA for Android',text:'Discover FINDA — a better housing journey for Android.',url:SHARE_URL});return;}catch(e){if(e.name==='AbortError')return;}}
    await copyLink();
  });
  $('year').textContent = new Date().getFullYear();
  document.querySelectorAll('[data-download]').forEach(a => a.setAttribute('href', DOWNLOAD_URL));
})();
