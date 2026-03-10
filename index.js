import{a as v,S as w,i as d}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const S="https://pixabay.com/api/",q="54908313-686938f30eb04142f9ec31b4f";async function u(s,t){const o={key:q,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};return(await v.get(S,{params:o})).data}const f=document.querySelector(".gallery"),p=document.querySelector(".loader"),m=document.querySelector(".load-more"),B=new w(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function y(s){const t=s.map(o=>`<li class="gallery-item">
            <div class="image-card">
                <a href="${o.largeImageURL}">
                    <img src="${o.webformatURL}" alt="${o.tags}">
                </a>
            

                <div class="info">
                    <p><b>Likes:</b> ${o.likes}</p>
                    <p><b>Views:</b> ${o.views}</p>
                    <p><b>Comments:</b> ${o.comments}</p>
                    <p><b>Downloads:</b> ${o.downloads}</p>
                </div>
            </div>
        </li>
        `).join("");f.insertAdjacentHTML("beforeend",t),B.refresh()}function M(){f.innerHTML=""}function h(){p.classList.add("active")}function g(){p.classList.remove("active")}function P(){m.classList.remove("hidden")}function b(){m.classList.add("hidden")}const $=document.querySelector(".form"),O=document.querySelector(".load-more");let n=1,c="",l=0;const L=15;$.addEventListener("submit",async s=>{if(s.preventDefault(),c=s.target.elements["search-text"].value.trim(),!!c){n=1,M(),b(),h();try{const t=await u(c,n);if(l=t.totalHits,t.hits.length===0){d.error({message:"Sorry, there are no images matching your search query.",position:"topRight"});return}y(t.hits),l>L&&P()}catch(t){console.log(t)}finally{g()}}});O.addEventListener("click",async()=>{n+=1,h();try{const s=await u(c,n);y(s.hits);const t=Math.ceil(l/L);n>=t&&(b(),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));const o=document.querySelector(".gallery-item"),a=document.querySelector(".gallery"),e=o.getBoundingClientRect().height;window.scrollBy({top:(e+24+60)*2,behavior:"smooth"})}catch(s){console.log(s)}finally{g()}});
//# sourceMappingURL=index.js.map
