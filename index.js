import{a as v,S,i as n}from"./assets/vendor-DQvd0HNi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const q="https://pixabay.com/api/",P="54908313-686938f30eb04142f9ec31b4f";async function f(r,e){const o={key:P,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15};return(await v.get(q,{params:o})).data}const p=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more"),R=new S(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function g(r){const e=r.map(o=>`<li class="gallery-item">
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
        `).join("");p.insertAdjacentHTML("beforeend",e),R.refresh()}function B(){p.innerHTML=""}function y(){m.classList.add("active")}function b(){m.classList.remove("active")}function L(){h.classList.remove("hidden")}function d(){h.classList.add("hidden")}const M=document.querySelector(".form"),$=document.querySelector(".load-more");let i=1,c="",u=0;const w=15;M.addEventListener("submit",async r=>{if(r.preventDefault(),c=r.target.elements["search-text"].value.trim(),!!c){i=1,B(),d(),y();try{const e=await f(c,i);if(u=e.totalHits,e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query.",position:"topRight"});return}g(e.hits),u>w?L():n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(e){n.error({message:"Something went wrong. Please try again.",position:"topRight"}),console.log(e)}finally{b()}}});$.addEventListener("click",async()=>{i+=1,d(),y();try{const r=await f(c,i);g(r.hits);const e=Math.ceil(u/w);i>=e?(d(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):L();const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}catch(r){n.error({message:"Something went wrong. Please try again.",position:"topRight"}),console.log(r)}finally{b()}});
//# sourceMappingURL=index.js.map
