/* Sami's Marco Island — shared script for secondary pages.
   Progressive enhancement only; every hook is guarded so it is safe
   to load on any page regardless of which elements are present. */
(function () {
  "use strict";

  // Smooth in-page anchor scrolling (respects reduced-motion via CSS).
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (typeof target.focus === "function") target.focus({ preventScroll: true });
    });
  });

  // Optional mobile-nav toggle — only wires up if both elements exist.
  var navToggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
  }
})();
