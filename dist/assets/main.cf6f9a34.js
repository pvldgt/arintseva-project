const a=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};a();const o=document.querySelector(".navbar__hamburger"),s=document.querySelector(".navbar__menu");o.addEventListener("click",u);function u(){o.classList.toggle("navbar--active"),s.classList.toggle("navbar--active")}const d=document.querySelectorAll(".navbar__link");d.forEach(i=>i.addEventListener("click",f));function f(){o.classList.remove("navbar--active"),s.classList.remove("navbar--active")}