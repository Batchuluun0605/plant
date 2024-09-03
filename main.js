const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hamburger.classList.toggle("ri-close-large-line");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
  });
});

// swiper

const swiper = new Swiper(".swiper", {
  // Optional parameters
  speed: 300,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  grabCursor: true,

  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const scrollUp = () => {
  const scrollUpButton = document.getElementById("scroll-up");

  if (this.scrollY >= 250) {
    scrollUpButton.classList.remove("-bottom-1/2");
    scrollUpButton.classList.add("bottom-4");
  } else {
    scrollUpButton.classList.add("-bottom-1/2");
    scrollUpButton.classList.remove("bottom-4");
  }
};

window.addEventListener("scroll", scrollUp);

const scrollHeader = () => {
  const navbar = document.getElementById("navbar");

  if (this.scrollY >= 50) {
    navbar.classList.remove("border-b", "border-yelllow-500");
  } else {
    navbar.classList.remove("border-b", "border-yelllow-500");
  }
};

window.addEventListener("scrollHeader", scrollHeader);

const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("active");

    if (item.href.includes(current)) {
      item.classList.add("active");
    }
  });
};
