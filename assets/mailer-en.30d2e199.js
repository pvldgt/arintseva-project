const f=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};f();const d=document.querySelector(".navbar__hamburger"),v=document.querySelector(".navbar__menu");d.addEventListener("click",b);function b(){d.classList.toggle("navbar--active"),v.classList.toggle("navbar--active")}const p=document.querySelectorAll(".navbar__link");p.forEach(o=>o.addEventListener("click",g));function g(){d.classList.remove("navbar--active"),v.classList.remove("navbar--active")}var y="/arintseva-project/assets/circle-arrow-direction-up-upload-svgrepo-com.1771efca.svg",L="/arintseva-project/assets/circle-arrow-direction-download-down-svgrepo-com.3a6f4f4b.svg";const u=document.querySelector(".resume"),m=document.querySelector(".resume__expander"),h=document.querySelector(".resume__expander-button"),l=document.querySelector(".resume__expander-svg");h.addEventListener("click",_);function _(){u.classList.toggle("resume--preview"),m.classList.toggle("resume--preview"),m.classList.contains("resume--preview")?(l.src=y,l.alt="arrow up"):(l.src=L,l.alt="arrow down",u.scrollIntoView())}let s=document.getElementById("form-button");document.getElementById("contact-form").addEventListener("submit",function(o){o.preventDefault(),s.disabled=!0,s.classList.add("button--disabled"),s.value="\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F...";const n="service_s9wtj9u",i="template_x8hyl2s";emailjs.sendForm(n,i,this).then(()=>{s.value="\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",this.reset(),alert("\u2705 \u0412\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E."),s.disabled=!1,s.classList.remove("button--disabled")},a=>{s.value="\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",this.reset(),alert(JSON.stringify(a)),s.disabled=!1,s.classList.remove("button--disabled")})});let r=document.getElementById("form-button");document.getElementById("contact-form").addEventListener("submit",function(o){o.preventDefault(),r.disabled=!0,r.classList.add("button--disabled"),r.value="Sending...";const n="service_s9wtj9u",i="template_x8hyl2s";emailjs.sendForm(n,i,this).then(()=>{r.value="Send",this.reset(),alert("\u2705 Your message has been sent"),r.disabled=!1,r.classList.remove("button--disabled")},a=>{r.value="Send",this.reset(),alert(JSON.stringify(a)),r.disabled=!1,r.classList.remove("button--disabled")})});
