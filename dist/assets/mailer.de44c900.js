const f=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}};f();const i=document.querySelector(".navbar__hamburger"),m=document.querySelector(".navbar__menu");i.addEventListener("click",v);function v(){i.classList.toggle("navbar--active"),m.classList.toggle("navbar--active")}const g=document.querySelectorAll(".navbar__link");g.forEach(r=>r.addEventListener("click",p));function p(){i.classList.remove("navbar--active"),m.classList.remove("navbar--active")}var b="/arintseva-project/assets/circle-arrow-direction-up-upload-svgrepo-com.1771efca.svg",y="/arintseva-project/assets/circle-arrow-direction-download-down-svgrepo-com.3a6f4f4b.svg";const u=document.querySelector(".resume"),d=document.querySelector(".resume__expander"),L=document.querySelector(".resume__expander-button"),a=document.querySelector(".resume__expander-svg");L.addEventListener("click",h);function h(){u.classList.toggle("resume--preview"),d.classList.toggle("resume--preview"),d.classList.contains("resume--preview")?(a.src=b,a.alt="arrow up"):(a.src=y,a.alt="arrow down",u.scrollIntoView())}let t=document.getElementById("form-button");document.getElementById("contact-form").addEventListener("submit",function(r){r.preventDefault(),r.stopImmediatePropagation(),t.disabled=!0,t.classList.add("button--disabled"),document.documentElement.lang==="ru"?t.value="\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F...":document.documentElement.lang==="en"&&(t.value="Sending...");const o="service_s9wtj9u",c="template_x8hyl2s";emailjs.sendForm(o,c,this).then(()=>{document.documentElement.lang==="ru"?t.value="\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C":document.documentElement.lang==="en"&&(t.value="Send"),this.reset(),document.documentElement.lang==="ru"?alert("\u2705 \u0412\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E"):document.documentElement.lang==="en"&&alert("\u2705 Your message has been sent"),t.disabled=!1,t.classList.remove("button--disabled")},s=>{document.documentElement.lang==="ru"?t.value="\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C":document.documentElement.lang==="en"&&(t.value="Send"),this.reset(),alert(JSON.stringify(s)),t.disabled=!1,t.classList.remove("button--disabled")})});
