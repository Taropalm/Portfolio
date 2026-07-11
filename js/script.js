// ===== SCROLL REVEAL =====
// Khi 1 section lọt vào khung nhìn, thêm class "in-view" để CSS animation chạy
const revealTargets = document.querySelectorAll(".section, .hero-content");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target); // chỉ chạy 1 lần
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((el) => revealObserver.observe(el));

// ===== ACTIVE NAV LINK THEO SECTION ĐANG XEM =====
const sections = document.querySelectorAll("section[id], footer[id]");
const navLinks = document.querySelectorAll(".nav-links a, .mobile-bottom-nav a");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => navObserver.observe(section));
