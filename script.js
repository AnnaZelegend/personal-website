const stage=document.querySelector('[data-orbit-stage]');
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
window.addEventListener('pointermove',event=>{if(!stage||reduced.matches)return;const x=(event.clientX/innerWidth-.5)*10;const y=(event.clientY/innerHeight-.5)*-8;stage.style.setProperty('--x',`${x}deg`);stage.style.setProperty('--y',`${y}deg`)},{passive:true});
const button=document.querySelector('.menu-button');
const menu=document.querySelector('#menu');
const setMenu=open=>{button?.setAttribute('aria-expanded',String(open));if(menu)menu.dataset.open=String(open)};
button?.addEventListener('click',()=>setMenu(button.getAttribute('aria-expanded')!=='true'));
menu?.addEventListener('click',event=>{if(event.target.closest('a'))setMenu(false)});
