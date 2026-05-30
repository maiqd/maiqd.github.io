(function () {
  const SECTION_SELECTOR = "[data-learn-section]";
  const LINK_SELECTOR = ".learn-nav__link[data-section]";

  function setActiveLink(id) {
    document.querySelectorAll(LINK_SELECTOR).forEach((link) => {
      const match = link.getAttribute("data-section") === id;
      link.classList.toggle("is-active", match);
      if (match) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function initSectionObserver() {
    const sections = document.querySelectorAll(SECTION_SELECTOR);
    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveLink(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
  }

  function initSmoothScroll() {
    document.querySelectorAll(LINK_SELECTOR).forEach((link) => {
      link.addEventListener("click", (event) => {
        const id = link.getAttribute("data-section");
        const target = id && document.getElementById(id);
        if (!target) {
          return;
        }
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${id}`);
        setActiveLink(id);
        closeMobileMenu();
      });
    });
  }

  function initFromHash() {
    const id = location.hash.replace("#", "");
    if (id && document.getElementById(id)) {
      setActiveLink(id);
    }
  }

  function closeMobileMenu() {
    const toggle = document.querySelector(".learn-nav__toggle");
    const panel = document.querySelector(".learn-nav__panel");
    if (!toggle || !panel) {
      return;
    }
    toggle.setAttribute("aria-expanded", "false");
    panel.classList.remove("is-open");
  }

  function initMobileMenu() {
    const toggle = document.querySelector(".learn-nav__toggle");
    const panel = document.querySelector(".learn-nav__panel");
    if (!toggle || !panel) {
      return;
    }

    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      panel.classList.toggle("is-open", !open);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initFromHash();
    initSmoothScroll();
    initSectionObserver();
    initMobileMenu();
  });
})();
