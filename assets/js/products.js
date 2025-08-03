document.addEventListener('DOMContentLoaded', function () {
  // === Sticky header scroll behavior ===
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

  // === Mobile burger menu ===
  const burger = document.getElementById('burger');
  if (burger) {
    burger.addEventListener('click', function () {
      document.body.classList.toggle('nav-open');
    });
  }

  // === Dropdown menu ===
  const dropdownToggle = document.getElementById('dropdownToggle');
  if (dropdownToggle) {
    dropdownToggle.addEventListener('click', function (e) {
      e.preventDefault();
      const dropdown = document.getElementById('dropdown');
      dropdown?.classList.toggle('active');
      document.body.classList.toggle('dropdown-open');
    });

    document.addEventListener('click', function (e) {
      const dropdown = document.getElementById('dropdown');
      if (!dropdown.contains(e.target) && !dropdownToggle.contains(e.target)) {
        dropdown?.classList.remove('active');
        document.body.classList.remove('dropdown-open');
      }
    });
  }

  // === Hero background / text slider ===
  const bg1 = document.getElementById('bg1');
  const bg2 = document.getElementById('bg2');
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const indicator1 = document.getElementById('indicator1');
  const indicator2 = document.getElementById('indicator2');
  const indicator1Clone = document.getElementById('indicator1-clone');
  const indicator2Clone = document.getElementById('indicator2-clone');

  if (bg1 && bg2 && text1 && text2) {
    let active = true;

    setInterval(() => {
      if (active) {
        bg1.classList.remove('active');
        bg1.classList.add('inactive');
        bg2.classList.remove('inactive');
        bg2.classList.add('active');

        text1.classList.remove('active');
        text1.classList.add('exiting');

        text2.classList.remove('active', 'exiting', 'entering');
        void text2.offsetWidth;
        text2.classList.add('entering');

        setTimeout(() => {
          text1.classList.remove('exiting');
          text2.classList.remove('entering');
          text2.classList.add('active');

          indicator1?.classList.remove('active');
          indicator2?.classList.add('active');
          indicator1Clone?.classList.remove('active');
          indicator2Clone?.classList.add('active');
        }, 750);
      } else {
        bg2.classList.remove('active');
        bg2.classList.add('inactive');
        bg1.classList.remove('inactive');
        bg1.classList.add('active');

        text2.classList.remove('active');
        text2.classList.add('exiting');

        text1.classList.remove('active', 'exiting', 'entering');
        void text1.offsetWidth;
        text1.classList.add('entering');

        setTimeout(() => {
          text2.classList.remove('exiting');
          text1.classList.remove('entering');
          text1.classList.add('active');

          indicator2?.classList.remove('active');
          indicator1?.classList.add('active');
          indicator2Clone?.classList.remove('active');
          indicator1Clone?.classList.add('active');
        }, 750);
      }

      active = !active;
    }, 10000);
  }

  // === FAQ accordion ===
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
        answer.style.maxHeight = "200px";
        answer.style.marginBottom = "10px";
      } else {
        answer.style.maxHeight = null;
        answer.style.marginBottom = "0";
      }
    });
  });

  // === Product panel switching logic ===
  const thumbnails = document.querySelectorAll('#slider img');
  const productPanels = document.querySelectorAll('.products-display .product');

  thumbnails.forEach((thumb, index) => {
    thumb.setAttribute('data-index', index);

    thumb.addEventListener('click', () => {
      productPanels.forEach(panel => panel.classList.remove('active'));
      const target = productPanels[index];
      if (target) target.classList.add('active');
    });
  });

  // === Overlay on product-thumbnail click ===
  const productThumbs = document.querySelectorAll('.products-container .product-thumbnail');

  productThumbs.forEach((thumb, index) => {
    thumb.setAttribute('data-index', index);

    thumb.addEventListener('click', () => {
      productThumbs.forEach(t => t.classList.remove('show-overlay'));
      productPanels.forEach(p => p.classList.remove('active'));

      thumb.classList.add('show-overlay');

      const target = productPanels[index];
      if (target) target.classList.add('active');
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.product-thumbnail')) {
      productThumbs.forEach(t => t.classList.remove('show-overlay'));
    }
  });
});