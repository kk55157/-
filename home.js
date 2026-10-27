(() => {
  if(document.body.classList.contains('gallery-home')){
    document.addEventListener('click',event=>{
      const link=event.target.closest('a[href]');if(!link)return;
      try{const url=new URL(link.href,location.href);if(!url.pathname.endsWith('/work.html'))return;const category=url.searchParams.get('category')||new URLSearchParams(url.hash.replace(/^#/, '')).get('category');if(['campaigns','series','styling','motion','homepage'].includes(category))sessionStorage.setItem('fashion-next-category',category);}catch(_){}
    });
  }
  const menu = document.querySelector('.work-menu');
  if (menu) {
    document.addEventListener('click', e => { if (!menu.contains(e.target)) menu.open = false; });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.open) { menu.open = false; menu.querySelector('summary').focus(); } });
    menu.addEventListener('focusout', () => setTimeout(() => { if (!menu.contains(document.activeElement)) menu.open = false; }, 0));
  }
  const stock = (name,w,h,alt,category) => ({src:'assets/stock/'+name+'.jpg',w,h,alt,category});
  const pools = {
    landscape: [{"src":"assets/campaigns/batch-1/image-001.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 01","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-005.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 02","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-008.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 03","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-009.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 04","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-011.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 05","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-012.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 06","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-013.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 07","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-014.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 08","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-015.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 09","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-016.jpg","w":3136,"h":1344,"alt":"视觉单图横幅作品 10","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-017.jpg","w":3168,"h":1344,"alt":"视觉单图横幅作品 11","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-019.jpg","w":1584,"h":672,"alt":"视觉单图横幅作品 12","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-020.jpg","w":3168,"h":1344,"alt":"视觉单图横幅作品 13","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-022.jpg","w":3168,"h":1344,"alt":"视觉单图横幅作品 14","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-023.jpg","w":3168,"h":1344,"alt":"视觉单图横幅作品 15","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-026.jpg","w":3168,"h":1344,"alt":"视觉单图横幅作品 16","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-028.jpg","w":3168,"h":1344,"alt":"视觉单图横幅作品 17","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-031.jpg","w":3168,"h":1344,"alt":"视觉单图横幅作品 18","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-032.jpg","w":3168,"h":1344,"alt":"视觉单图横幅作品 19","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-035.jpg","w":3168,"h":1344,"alt":"视觉单图横幅作品 20","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-039.jpg","w":3168,"h":1344,"alt":"视觉单图横幅作品 21","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-040.jpg","w":3136,"h":1344,"alt":"视觉单图横幅作品 22","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-041.jpg","w":3136,"h":1344,"alt":"视觉单图横幅作品 23","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-042.jpg","w":3136,"h":1344,"alt":"视觉单图横幅作品 24","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-046.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 25","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-051.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 26","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-055.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 27","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-056.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 28","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-057.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 29","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-060.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 30","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-061.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 31","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-062.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 32","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-063.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 33","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-064.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 34","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-066.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 35","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-067.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 36","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-068.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 37","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-069.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 38","category":"campaigns"},{"src":"assets/campaigns/batch-1/image-072.jpg","w":6336,"h":2688,"alt":"视觉单图横幅作品 39","category":"campaigns"}],
    portrait: [stock('campaign-tall',1200,1500,'橄榄色大衣造型，视觉单图概念','campaigns'),stock('campaign-shadow',853,1280,'自然光中的女性造型，视觉单图概念','campaigns'),stock('hero',1400,2100,'暖棕色外套人物，服装视觉概念','campaigns'),stock('series-dress',1000,1500,'建筑场景中的连衣裙人物，系列方向概念','series'),stock('styling-result',900,1350,'白色西装造型，换衣流程概念','styling')]
  };
  Object.entries(pools).forEach(([type,pool]) => {
    const slots = [...document.querySelectorAll('[data-home-slot="'+type+'"]')];
    let previous = [];
    try { const saved=JSON.parse(localStorage.getItem('fashion-gallery-'+type)||'[]'); if(Array.isArray(saved)) previous=saved; } catch (_) {}
    const available = [...pool];
    const selected = slots.map((slot,i) => {
      const candidates = available.filter(im => im.src !== previous[i]);
      const choices = candidates.length ? candidates : available;
      const chosen = choices[Math.floor(Math.random()*choices.length)];
      available.splice(available.indexOf(chosen),1);
      const img = slot.querySelector('img');
      img.width=chosen.w; img.height=chosen.h; img.alt=chosen.alt; img.src=chosen.src;
      if (slot.tagName === 'A') slot.href='work.html?category='+chosen.category;

      return chosen.src;
    });
    try { localStorage.setItem('fashion-gallery-'+type,JSON.stringify(selected)); } catch (_) {}
  });
  const carousel = document.querySelector('.home-carousel');
  if (carousel) {
    const link = document.getElementById('carousel-link');
    const img = document.getElementById('carousel-image');
    const status = document.getElementById('carousel-status');
    const slides = pools.landscape;
    let current = Math.max(0, slides.findIndex(slide => img.getAttribute('src') === slide.src));
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    let transitioning = false;
    async function showSlide(delta) {
      if (transitioning) return;
      transitioning = true;
      if (!reducedMotion.matches && img.animate) {
        await img.animate([{transform:'translateX(0)',opacity:1},{transform:'translateX('+(-Math.sign(delta)*100)+'%)',opacity:0}],{duration:160,easing:'ease-in'}).finished.catch(()=>{});
      }
      current = (current + delta + slides.length) % slides.length;
      const slide = slides[current];
      img.width=slide.w; img.height=slide.h; img.alt=slide.alt; img.src=slide.src;

      status.textContent=(current+1)+' / '+slides.length;
      if (!reducedMotion.matches && img.animate) {
        await img.animate([{transform:'translateX('+(Math.sign(delta)*100)+'%)',opacity:0},{transform:'translateX(0)',opacity:1}],{duration:240,easing:'ease-out'}).finished.catch(()=>{});
      }
      transitioning = false;
      try {
        const saved=JSON.parse(localStorage.getItem('fashion-gallery-landscape')||'[]');
        const previous=Array.isArray(saved)?saved:[];
        previous[0]=slide.src;
        localStorage.setItem('fashion-gallery-landscape',JSON.stringify(previous));
      } catch (_) {}
    }
    document.getElementById('carousel-prev')?.addEventListener('click',()=>showSlide(-1));
    document.getElementById('carousel-next')?.addEventListener('click',()=>showSlide(1));
    carousel.addEventListener('keydown',e=>{
      if(e.key==='ArrowLeft'||e.key==='ArrowRight') {e.preventDefault();showSlide(e.key==='ArrowLeft'?-1:1);}
    });
    let touchStart=null, suppressClick=false;
    link.addEventListener('touchstart',e=>{const t=e.changedTouches[0];touchStart={x:t.clientX,y:t.clientY};},{passive:true});
    link.addEventListener('touchend',e=>{
      if(!touchStart)return;
      const t=e.changedTouches[0], dx=t.clientX-touchStart.x, dy=t.clientY-touchStart.y;
      touchStart=null;
      if(Math.abs(dx)>48 && Math.abs(dx)>Math.abs(dy)*1.5){suppressClick=true;showSlide(dx<0?1:-1);setTimeout(()=>{suppressClick=false;},400);}
    },{passive:true});
    link.addEventListener('touchcancel',()=>{touchStart=null;},{passive:true});
    link.addEventListener('click',e=>{if(suppressClick){e.preventDefault();suppressClick=false;}});
    status.textContent=(current+1)+' / '+slides.length;
    carousel.querySelector('.carousel-controls').hidden=false;
    // Single-image automatic carousel; all surrounding images remain in place.
    status.setAttribute('aria-live','off');
    setInterval(()=>{
      if(!reducedMotion.matches&&!document.hidden&&!carousel.contains(document.activeElement))showSlide(1);
    },4000);
  }
})();

