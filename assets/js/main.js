/**
 * Template Name: Strategy
 * Template URL: https://bootstrapmade.com/strategy-bootstrap-agency-template/
 * Updated: Jun 06 2025 with Bootstrap v5.3.6
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  ("use strict");

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  /**
   * Toggles the "scrolled" class on the <body> element based on the window's scroll position.
   * The function only applies the class if the header element (#header) has one of the following classes:
   * "scroll-up-sticky", "sticky-top", or "fixed-top".
   * If the window is scrolled more than 100 pixels vertically, the "scrolled" class is added to <body>;
   * otherwise, it is removed.
   */
  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }
  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
  let i = 0;

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
    // apply blur
    if (i++ % 2 == 0) {
      header.style.backdropFilter = "none";
    } else {
      header.style.backdropFilter = "blur(4em)";
    }
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener("click", mobileNavToogle);
  }
  /**
   * Close mobile nav on click outside
   * (Đóng menu khi click ra ngoài khoảng trắng)
   */
  document.addEventListener("click", function (e) {
    // Kiểm tra xem menu có đang mở không
    const body = document.querySelector("body");
    if (body.classList.contains("mobile-nav-active")) {
      // Kiểm tra xem cú click có nằm trong cái hộp menu trắng (.navmenu ul) hay không
      const isClickInsideMenu = e.target.closest(".navmenu ul");

      // Kiểm tra xem cú click có nằm trên nút icon X/3 gạch hay không
      const isClickOnToggle = e.target.closest(".mobile-nav-toggle");

      // Nếu KHÔNG phải click vào menu VÀ KHÔNG phải click vào nút toggle
      // => Thì đóng menu lại
      if (!isClickInsideMenu && !isClickOnToggle) {
        mobileNavToogle(); // Gọi lại hàm toggle có sẵn để đóng
      }
    }
  });

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Init isotope layout and filters
   */
  // document.querySelectorAll(".isotope-layout").forEach(function (isotopeItem) {
  //   let layout = isotopeItem.getAttribute("data-layout") ? ? "masonry";
  //   let filter = isotopeItem.getAttribute("data-default-filter") ? ? "*";
  //   let sort = isotopeItem.getAttribute("data-sort") ? ? "original-order";

  //   let initIsotope;
  //   imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
  //     initIsotope = new Isotope(
  //       isotopeItem.querySelector(".isotope-container"), {
  //         itemSelector: ".isotope-item",
  //         layoutMode: layout,
  //         filter: filter,
  //         sortBy: sort,
  //       }
  //     );
  //   });

  //   isotopeItem
  //     .querySelectorAll(".isotope-filters li")
  //     .forEach(function (filters) {
  //       filters.addEventListener(
  //         "click",
  //         function () {
  //           isotopeItem
  //             .querySelector(".isotope-filters .filter-active")
  //             .classList.remove("filter-active");
  //           this.classList.add("filter-active");
  //           initIsotope.arrange({
  //             filter: this.getAttribute("data-filter"),
  //           });
  //           if (typeof aosInit === "function") {
  //             aosInit();
  //           }
  //         },
  //         false
  //       );
  //     });
  // });

  /**
   * Frequently Asked Questions Toggle
   */
  document
    .querySelectorAll(
      ".faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header"
    )
    .forEach((faqItem) => {
      faqItem.addEventListener("click", () => {
        faqItem.parentNode.classList.toggle("faq-active");
      });
    });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener("load", function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach((link) => link.classList.remove("active"));
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);

  function startAnimation(type, viewerId) {
    // --- Cấu hình ---
    const FRAME_COUNT = 55;
    const FPS = 12;
    const IMAGE_PATH = `./assets/img/${type}_land/`;
    const IMAGE_PREFIX = `${type}_land_`;
    const IMAGE_EXT = ".png";
    const PAD_ZERO = 2;

    // --- Biến ---
    const viewer = document.getElementById(viewerId);
    const interval = 1000 / FPS;
    let images = [];
    let idx = 0;
    let direction = 1;
    let last = 0,
      acc = 0;

    // --- Tạo tên file ---
    function frameFileName(i) {
      return (
        IMAGE_PATH +
        IMAGE_PREFIX +
        i.toString().padStart(PAD_ZERO, "0") +
        IMAGE_EXT
      );
    }

    // --- Preload ảnh ---
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = frameFileName(i);
      images.push(img);
    }

    // --- Hiển thị frame ---
    function draw() {
      viewer.src = images[idx].src;
    }

    // --- Loop animation ---
    function loop(ts) {
      if (!last) last = ts;
      const dt = ts - last;
      last = ts;
      acc += dt;

      while (acc >= interval) {
        idx += direction;
        if (idx >= FRAME_COUNT - 1) {
          idx = FRAME_COUNT - 1;
          direction = -1;
        } else if (idx <= 0) {
          idx = 0;
          direction = 1;
        }
        acc -= interval;
      }

      draw();
      requestAnimationFrame(loop);
    }

    // --- Start ---
    draw();
    requestAnimationFrame(loop);
  }

  // --- Gọi nhiều animation ---

  //animation
  // (() => {
  //   // --- Cấu hình ---
  //   startAnimation('legend', 'viewer');
  //   startAnimation('epic', 'viewer2');
  //   startAnimation('rare', 'viewer3');
  //   startAnimation('common', 'viewer4');
  // })();

  // surf animation
  (() => {
    let lastScrollY = window.scrollY;
    let isAnimating = false;
    let currentDirection = null;

    const car = document.getElementById("surf");
    const carSection = document.getElementById("discovery");

    function resetCarPosition() {
      car.classList.remove("drive-forward", "drive-backward");
      car.style.left = "-500px";
      car.style.transform = "scaleX(1)";
    }

    function animateCarForward() {
      if (isAnimating || currentDirection === "forward") return;

      isAnimating = true;
      currentDirection = "forward";

      resetCarPosition();

      // Small delay to ensure reset is applied
      setTimeout(() => {
        car.classList.add("drive-forward");
      }, 50);

      // Reset animation state after animation completes
      setTimeout(() => {
        isAnimating = false;
      }, 4001); // Slightly longer to ensure animation completes
    }

    // function animateCarBackward() {
    //   if (isAnimating || currentDirection === "backward") return;

    //   isAnimating = true;
    //   currentDirection = "backward";

    //   resetCarPosition();

    //   // Position car at the right side and flip it
    //   car.style.left = "100vw";
    //   car.style.transform = "scaleX(-1)";

    //   setTimeout(() => {
    //     car.classList.add("drive-backward");
    //   }, 50);

    //   setTimeout(() => {
    //     isAnimating = false;
    //   }, 4001); // Slightly longer to ensure animation completes
    // }
    // let isCarSectionVisible = false;

    // Intersection Observer for better performance
    // const observer = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach((entry) => {
    //       isCarSectionVisible = entry.isIntersecting;
    //     });
    //   },
    //   {
    //     threshold: threshold, // Multiple thresholds for smoother detection
    //   }
    // );

    // Observe the car section
    // observer.observe(carSection);
    // function handleScroll() {
    //   setInterval(()=> {
    //     animateCarForward();
    //   })
    // }
    // function handleScroll() {
    //   const currentScrollY = window.scrollY;
    //   const scrollDirection = currentScrollY > lastScrollY ? "down" : "up";

    //   // Check if car section is visible and trigger animations
    //   if (isCarSectionVisible) {
    //     if (scrollDirection === "down" && currentDirection !== "forward") {
    //       animateCarForward();
    //     } else if (
    //       scrollDirection === "up" &&
    //       currentDirection !== "backward"
    //     ) {
    //       animateCarBackward();
    //     }
    //   }

    //   lastScrollY = currentScrollY;
    // }

    // // Optimized scroll listener
    // window.addEventListener("scroll", handleScroll, { passive: true });

    // Initialize
    // Reset on page load
    window.addEventListener("load", () => {
      animateCarForward();

      // Repeat
      setInterval(() => {
        animateCarForward(); // 6s, 12s, 18s...
        setTimeout(animateCarBackward, 4000); // 3s after each cycle → 3s, 9s, 15s...
      }, 4000);
    });
  })();

  (() => {
    const walls = document.querySelectorAll(".js-observe");

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    walls.forEach((w) => io.observe(w));
  })();
})();
