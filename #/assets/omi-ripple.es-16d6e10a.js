import{R as d}from"./index-133f0293.js";d("ripple",(e,p)=>{const n=document.createElement("style");n.innerHTML=`
    .ripple {
      position: absolute; 
      border-radius: 50%;
      transform: scale(0);
      pointer-events: none;
      animation: ripple 600ms ease-out;
      background-color: rgba(255, 255, 255, 0.7);
    }

    @keyframes ripple {
      to {
        transform: scale(2);
        opacity: 0;
      }
    }
  `,e.appendChild(n);const o=window.getComputedStyle(e).position;(!o||o==="static")&&(e.style.position="relative"),e.addEventListener("click",l=>{const i=Math.max(e.clientWidth||0,e.clientHeight||0),r=i/2,a=e.getBoundingClientRect(),s=l.clientX-a.left-r,c=l.clientY-a.top-r,t=document.createElement("div");t.classList.add("ripple"),t.style.backgroundColor=p.color,t.style.left=`${s}px`,t.style.top=`${c}px`,t.style.width=`${i}px`,t.style.height=`${i}px`,e.appendChild(t),t.addEventListener("animationend",()=>{t.remove()})})});
