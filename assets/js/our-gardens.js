document.addEventListener('DOMContentLoaded', function () {
  // ========== HEADER ==========
  const header = document.querySelector('header');
  const hero = document.querySelector('.hero');
  const scrollPoint = hero ? hero.offsetHeight : 100;
  let lastScrollTop = 0;

  window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > scrollPoint) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }

    if (currentScroll > lastScrollTop && currentScroll > 100) {
      header?.classList.add('hide');
    } else {
      header?.classList.remove('hide');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

    if (document.body.classList.contains('dropdown-open')) {
      document.getElementById('dropdown')?.classList.remove('active');
      document.body.classList.remove('dropdown-open');
    }

    if (document.body.classList.contains('nav-open')) {
      document.getElementById('nav')?.classList.remove('active');
      document.body.classList.remove('nav-open');
    }
  });

  const burger = document.getElementById('burger');
  if (burger) {
    burger.addEventListener('click', function () {
      document.body.classList.toggle('nav-open');
    });
  }

  const dropdownToggle = document.getElementById('dropdownToggle');
  if (dropdownToggle) {
    dropdownToggle.addEventListener('click', function (e) {
      e.preventDefault();
      const dropdown = document.getElementById('dropdown');
      dropdown?.classList.toggle('active');
      document.body.classList.toggle('dropdown-open');
    });
  }

  // ========== FOOTER (FAQ) ==========
  const questions = document.querySelectorAll('.faq .question');
  const answers = document.querySelectorAll('.faq .answer');

  questions.forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;

      questions.forEach(otherQ => {
        if (otherQ !== q) otherQ.classList.remove('active');
      });

      answers.forEach(ans => {
        if (ans !== answer) {
          ans.style.maxHeight = null;
          ans.style.marginBottom = "0";
        }
      });

      const isActive = q.classList.toggle('active');

      if (isActive) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.marginBottom = "10px";
      } else {
        answer.style.maxHeight = null;
        answer.style.marginBottom = "0";
      }
    });
  });

  // ========== MAP FOCUS FUNCTION ==========
  function focusMap(lat, lng) {
    const map = document.getElementById('mapFrame');
    if (map) {
      const newSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
      map.src = newSrc;
    }
  }
  window.focusMap = focusMap;

  // ========== SLIDER SCROLL FUNCTION ==========
  function scrollSlider(direction) {
    const slider = document.getElementById('slider');
    if (!slider) return;

    const scrollAmount = slider.offsetWidth / 2;
    slider.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
  window.scrollSlider = scrollSlider;

  // ========== GARDEN OVERLAY TOGGLE ==========
  const gardenCards = document.querySelectorAll('.garden');

  gardenCards.forEach(garden => {
    garden.addEventListener('click', () => {
      // Remove 'active' from all overlays
      gardenCards.forEach(g => {
        g.querySelector('.overlay')?.classList.remove('active');
      });

      // Add 'active' to the clicked garden's overlay
      const overlay = garden.querySelector('.overlay');
      overlay?.classList.add('active');

      // Also focus the map with lat/lng from data attributes (if you use data-lat, data-lng)
      const lat = garden.getAttribute('data-lat');
      const lng = garden.getAttribute('data-lng');
      if (lat && lng) {
        focusMap(lat, lng);
      }
    });
  });
});
