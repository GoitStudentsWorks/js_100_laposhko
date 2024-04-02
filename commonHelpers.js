import{A as S,S as d,N as g,K as $,M as T,P as j,a as E,b as y,m as a}from"./assets/vendor-2e075fbd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const N=document.querySelector(".header-btn"),h=document.querySelector(".backdrop");function D(){h.classList.remove("backdrop--hide"),h.classList.add("backdrop--show")}N.addEventListener("click",D);const z=document.querySelector(".mobmenu__close");z.addEventListener("click",q);function q(){h.classList.remove("backdrop--show"),h.classList.add("backdrop--hide")}const H=document.querySelector(".menu-btn"),k=document.querySelector(".header-menu");function _(){k.classList.toggle("visually-hidden")}H.addEventListener("click",_);function F(){k.classList.add("visually-hidden")}const x=Array.from(document.querySelectorAll(".header-menu-link"));x.push(document.querySelector(".header-order"));for(const e of x)e.addEventListener("click",t=>{t.preventDefault(),document.getElementById(e.getAttribute("href")).scrollIntoView({behavior:"smooth"}),F()});const C=Array.from(document.querySelectorAll(".mobmenu-link"));C.push(document.querySelector(".mobmenu-order"));for(const e of C)e.addEventListener("click",t=>{t.preventDefault(),document.getElementById(e.getAttribute("href")).scrollIntoView({behavior:"smooth"}),q()});const U=document.querySelector("#switch-theme");U.addEventListener("click",K);function K(){document.querySelector("body").classList.toggle("light-theme");const t=document.querySelectorAll(".change");t[0].classList.toggle("backdrop-white"),t[1].classList.toggle("hero-white")}const R=Array.from(document.querySelectorAll(".container-about")),A=R.map(e=>e.querySelector(".accordion-list"));new S(A,{showMultiple:!0,elementClass:"accordion-element",triggerClass:"accordion-title",panelClass:"accordion-description",openOnInit:[0],onOpen:function(e){e.querySelector(".accordion-title").classList.add("active")},onClose:function(e){e.querySelector(".accordion-title").classList.remove("active")}});const W=A[0].querySelector(".accordion-title");W.classList.add("active");new d(".skills-container",{loop:!0,direction:"horizontal",allowSlideNext:!0,setWrapperSize:!0,modules:[g,$,T],simulateTouch:!0,grabCursor:!0,spaceBetween:0,speed:1e3,navigation:{nextEl:".swipe-next-button"},breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},keyboard:{enabled:!0},mousewheel:{invert:!0}});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});const G="https://portfolio-js.b.goit.study/api/reviews",B=document.querySelector(".review-list"),X=document.querySelector(".review-buttons-wrapper");async function Y(){return(await E.get(G)).data}Y().then(e=>{Z(e),new d(".reviews-swiper",{direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,swipeHandler:".reviews-list-item",speed:400,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:18}},navigation:{prevEl:".previous-btn",nextEl:".next-btn"},keyboard:{enabled:!0},mousewheel:{invert:!0}})}).catch(e=>{B.innerHTML=`<li class="error-item">
       <p class="error-title">Oops, something went wrong 😢</p>
       <p class="error-text-describe">Problems with downloading content from the server. Error: ${e.message}</p>
    </li>`,X.classList.add("hide")});function Z(e){const t=e.map(({avatar_url:o,author:i,review:s})=>`
        <li class="review-item swiper-slide">
          <img class="review-avatar" src="${o}" alt="author avatar"/>
          <p class="review-author-name">${i}</p>
          <p class="review-author-text">${s}</p>
        </li>`).join("");B.insertAdjacentHTML("beforeend",t)}d.use([g,j]);new d(".projects-swiper",{direction:"horizontal",slidesPerView:1,spaceBetween:100,speed:800,loop:!1,slidesPerGroup:1,effect:"cube",grabCursor:!0,allowTouchMove:!0,EdgeSwipeDetection:!0,EdgeSwipeThreshold:10,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},navigation:{nextEl:".swiper-button-next-right",prevEl:".swiper-button-prev-left"},hashNavigation:{watchState:!0},mousewheel:{enabled:!0},keyboard:{enabled:!0}});d.use([g]);const J=Array.from(document.querySelectorAll(".accordion-container"));new S(J,{showMultiple:!0,elementClass:"item",triggerClass:"item-box",panelClass:"item-text",onOpen:function(e){e.querySelector(".btn-arrow-toggl").classList.add("active")},onClose:function(e){e.querySelector(".btn-arrow-toggl").classList.remove("active")}});const v=document.querySelector(".covers-section");let Q=new IntersectionObserver(function(e){for(let t of e)t.isIntersecting?v.classList.add("in-viewport"):v.classList.remove("in-viewport")});Q.observe(v);const L="/js_100_laposhko/assets/symbol-defs-a3a32346.svg",r=document.getElementById("user-email"),V=document.getElementById("user-comments"),f=document.querySelector(".order-button"),I=document.querySelector(".order-form"),u=document.querySelector(".succes"),m=document.querySelector(".error");let c;r.addEventListener("invalid",function(e){e.preventDefault()});function b(e){r.checkValidity()||(f.disabled=!0,m.classList.remove("is-hidden"),u.classList.add("is-hidden"),r.reportValidity()),r.value===""?(f.disabled=!0,m.classList.add("is-hidden"),u.classList.add("is-hidden")):r.checkValidity()&&(f.disabled=!1,m.classList.add("is-hidden"),u.classList.remove("is-hidden"),r.reportValidity())}r.addEventListener("focus",b);r.addEventListener("input",b);r.addEventListener("blur",b);const ee="https://portfolio-js.b.goit.study/api",te=async e=>{e.preventDefault();try{const t={email:r.value,comment:V.value},o=await E.post(`${ee}/requests`,t,{headers:{"Content-Type":"application/json"}});c=y.create(`<div class="modal">
            <button class="close-btn" id="close-btn" type="button">
            <svg class="close-btn-icon" width="22" height="22">
              <use href="${L}#icon-x"></use>
            </svg> 
            </button>
              <div class modal-message">
                <h3 class="modal-title">${o.data.title}</h3>
                <p class="modal-text">${o.data.message}</p>
              </div>
          </div>`),c.show(),document.querySelector(".basicLightbox").style.height="100%",document.getElementById("close-btn").addEventListener("click",()=>{c.close()})}catch(t){c=y.create(`<div class="modal">
            <button class="close-btn" id="close-btn" type="button">
            <svg class="close-btn-icon" width="22" height="22">
              <use href="${L}#icon-x"></use>
            </svg> 
            </button>
             <div class "modal-message">
               <h3 class="modal-title">Oops...something went wrong</h3>
               <p class="modal-text">${t.response.data.message}</p>
             </div>
          </div>`),c.show(),document.querySelector(".basicLightbox").style.height="100%",document.getElementById("close-btn").addEventListener("click",()=>{c.close()})}finally{I.reset(),u.classList.add("is-hidden"),m.classList.add("is-hidden")}};I.addEventListener("submit",te);document.addEventListener("keydown",e=>{e.key==="Escape"&&c.close()});function se(e){const o=e.value;if(o.length>35){const i=o.substring(0,35);e.value=i+"…"}}V.addEventListener("input",function(){se(this)});class oe extends a.CustomShape{getShape(){return'<path d="M5.51132201,34.7776271 L33.703781,32.8220808 L44.4592855,6.74813038 C45.4370587,4.30369752 47.7185293,3 50,3 C52.2814707,3 54.5629413,4.30369752 55.5407145,6.74813038 L66.296219,32.8220808 L94.488678,34.7776271 C99.7034681,35.1035515 101.984939,41.7850013 97.910884,45.2072073 L75.9109883,63.1330483 L82.5924381,90.3477341 C83.407249,94.4217888 80.4739296,97.6810326 77.0517236,97.6810326 C76.0739505,97.6810326 74.9332151,97.3551083 73.955442,96.7032595 L49.8370378,81.8737002 L26.044558,96.7032595 C25.0667849,97.3551083 23.9260495,97.6810326 22.9482764,97.6810326 C19.3631082,97.6810326 16.2668266,94.4217888 17.4075619,90.3477341 L23.9260495,63.2960105 L2.08911601,45.2072073 C-1.98493875,41.7850013 0.296531918,35.1035515 5.51132201,34.7776271 Z" />'}}a.addShape("star",oe);const l=30,M=new a.Shape({left:0,top:0,stroke:"#FF2400",strokeWidth:{[2*l]:0},fill:"none",scale:{0:1,easing:"quad.out"},radius:l,duration:450}),P=new a.Burst({left:0,top:0,radius:{6:l-3},angle:45,children:{shape:"star",radius:l/2.2,fill:"#E62020",degreeShift:"stagger(0,-5)",duration:700,delay:200,easing:"quad.out"}}),w=new a.Shape({left:0,top:0,shape:"star",fill:"#E62020",scale:{0:1},easing:"elastic.out",duration:1600,delay:300,radius:l/2.35}),O=new a.Timeline({speed:1.5});O.add(P,M,w);document.addEventListener("click",function(e){const t={x:e.pageX,y:e.pageY};P.tune(t),M.tune(t),w.tune(t),O.replay()});setTimeout(()=>{w.tune({scale:0}).replay(),document.querySelector('div[data-name="mojs-shape"]').remove()},600);
//# sourceMappingURL=commonHelpers.js.map