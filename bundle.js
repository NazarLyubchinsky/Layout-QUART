(()=>{"use strict";const e=document.querySelectorAll("#link__active");e.forEach((t=>{t.addEventListener("click",(()=>{e.forEach((e=>e.classList.remove("active"))),t.classList.add("active")}))}));const t=document.querySelectorAll("[data-modal]"),s=document.body,c=document.querySelectorAll(".modal__close");t.forEach((e=>{e.addEventListener("click",(e=>{let t=e.currentTarget.getAttribute("data-modal");document.getElementById(t).classList.add("show"),s.classList.add("no-scroll")}))})),c.forEach((e=>{e.addEventListener("click",(e=>{e.currentTarget.closest(".modal").classList.remove("show"),s.classList.remove("no-scroll")}))}));const r=document.getElementById("sidebarToggle"),o=document.getElementById("page");function i(){s.classList.remove("show-sidebar"),document.querySelector(".page__mask").remove()}r.addEventListener("click",(e=>{s.classList.contains("show-sidebar")?i():function(){let e=document.createElement("div");e.classList.add("page__mask"),e.addEventListener("click",i),o.appendChild(e),s.classList.add("show-sidebar")}()}));const d=document.querySelectorAll(".tabs__item"),n=document.querySelectorAll(".tabs__content");d.forEach((e=>{e.addEventListener("click",(()=>{d.forEach((e=>{e.classList.remove("selected")})),e.classList.add("selected");const t=e.getAttribute("data-products");n.forEach((e=>{e.classList.add("d-none"),e.getAttribute("data-products")==t&&e.classList.remove("d-none")}))}))})),document.addEventListener("DOMContentLoaded",(()=>{showProductsOnPage("#price",PRICE),showProductsOnPage("#reviews",REVIEWS),showProductsOnPage("#categories",CATEGORIES)})),document.querySelector("#abs").addEventListener("click",(()=>{const e=document.querySelector(".tabs__item.selected").getAttribute("data-id");"price"==e?(PRICE.sort(((e,t)=>e.price-t.price)),showProductsOnPage("#price",PRICE)):"reviews"==e?(REVIEWS.sort(((e,t)=>e.price-t.price)),showProductsOnPage("#reviews",REVIEWS)):(CATEGORIES.sort(((e,t)=>e.price-t.price)),showProductsOnPage("#categories",CATEGORIES))})),document.querySelector("#desc").addEventListener("click",(()=>{const e=document.querySelector(".tabs__item.selected").getAttribute("data-id");"price"==e?(PRICE.sort(((e,t)=>t.price-e.price)),showProductsOnPage("#price",PRICE)):"reviews"==e?(REVIEWS.sort(((e,t)=>t.price-e.price)),showProductsOnPage("#reviews",REVIEWS)):(CATEGORIES.sort(((e,t)=>t.price-e.price)),showProductsOnPage("#categories",CATEGORIES))}));var a=document.getElementById("dropdown-menu");document.querySelector(".selected").addEventListener("click",(function(){a.classList.toggle("show")})),document.addEventListener("mousedown",(function(e){e.target.closest(".selected")||e.target.closest(".dropdown-img")||e.target.closest(".dropdown")||a.classList.remove("show")})),new Swiper(".swiper-container",{centeredSlides:!0,slidesPerView:3,spaceBetween:30,initialSlide:2,speed:500,effect:"coverflow",coverflowEffect:{rotate:1,stretch:200,slideShadows:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:10,coverflowEffect:{stretch:0}},500:{slidesPerView:1.3,initialSlide:0,spaceBetween:30},768:{slidesPerView:1,spaceBetween:10},992:{slidesPerView:2.5,spaceBetween:30},1200:{slidesPerView:3,spaceBetween:30}}}),new Swiper(".swiper-containers",{slidesPerView:1,spaceBetween:260,speed:500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})})();