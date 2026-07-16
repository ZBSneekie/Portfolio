(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  var tabButtons = document.querySelectorAll(".tab-btn, .brand");
  var panels = document.querySelectorAll(".panel");
  var navToggle = document.getElementById("navToggle");
  var tabsNav = document.getElementById("tabs");

  function activateTab(tabId) {
    panels.forEach(function (panel) {
      panel.classList.toggle("active", panel.id === tabId);
    });
    document.querySelectorAll(".tab-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.tab === tabId);
    });
    tabsNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  tabButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      activateTab(btn.dataset.tab);
    });
  });

  navToggle.addEventListener("click", function () {
    var isOpen = tabsNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // ---- Build galleries from data.js ----
  var galleries = document.querySelectorAll(".gallery");
  var flatIndex = {}; // category -> array of {src, title}

  galleries.forEach(function (gallery) {
    var category = gallery.dataset.gallery;
    var items = (typeof PORTFOLIO_DATA !== "undefined" && PORTFOLIO_DATA[category]) || [];
    flatIndex[category] = items;

    if (items.length === 0) {
      var empty = document.createElement("p");
      empty.className = "empty-note";
      empty.textContent = "No pieces added yet — add images in images/" + category + "/ and list them in js/data.js.";
      gallery.appendChild(empty);
      return;
    }

    items.forEach(function (item, index) {
      var figure = document.createElement("figure");
      figure.className = "gallery-item";

      var img = document.createElement("img");
      img.src = item.src;
      img.alt = item.title || "";
      img.loading = "lazy";

      figure.appendChild(img);

      if (item.title) {
        var caption = document.createElement("figcaption");
        caption.textContent = item.title;
        figure.appendChild(caption);
      }

      figure.addEventListener("click", function () {
        openLightbox(category, index);
      });

      gallery.appendChild(figure);
    });
  });

  // ---- Lightbox ----
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");
  var lightboxPrev = document.getElementById("lightboxPrev");
  var lightboxNext = document.getElementById("lightboxNext");

  var currentCategory = null;
  var currentIndex = 0;

  function openLightbox(category, index) {
    currentCategory = category;
    currentIndex = index;
    renderLightbox();
    lightbox.classList.add("open");
    document.body.classList.add("no-scroll");
  }

  function renderLightbox() {
    var items = flatIndex[currentCategory];
    var item = items[currentIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.title || "";
    lightboxCaption.textContent = item.title || "";
    var multi = items.length > 1;
    lightboxPrev.style.display = multi ? "" : "none";
    lightboxNext.style.display = multi ? "" : "none";
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.classList.remove("no-scroll");
    lightboxImg.src = "";
  }

  function showRelative(offset) {
    var items = flatIndex[currentCategory];
    currentIndex = (currentIndex + offset + items.length) % items.length;
    renderLightbox();
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", function () { showRelative(-1); });
  lightboxNext.addEventListener("click", function () { showRelative(1); });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showRelative(-1);
    if (e.key === "ArrowRight") showRelative(1);
  });
})();
