document.addEventListener('DOMContentLoaded', function () {
  // ========== HEADER ==========
  const header = document.querySelector('header');
  const hero = document.querySelector('.hero');
  const scrollPoint = hero?.offsetHeight || 100;
  let lastScrollTop = 0;

  window.addEventListener('scroll', function () {
    const currentScroll = window.scrollY;
    document.body.classList.toggle('scrolled', currentScroll > scrollPoint);

    if (currentScroll > lastScrollTop && currentScroll > 100) {
      header?.classList.add('hide');
    } else {
      header?.classList.remove('hide');
    }

    lastScrollTop = Math.max(0, currentScroll);

    ['dropdown-open', 'nav-open'].forEach(className => {
      if (document.body.classList.contains(className)) {
        const el = document.getElementById(className === 'dropdown-open' ? 'dropdown' : 'nav');
        el?.classList.remove('active');
        document.body.classList.remove(className);
      }
    });
  });

  // ========== BURGER ==========
  document.getElementById('burger')?.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });

  // ========== DROPDOWN ==========
  document.getElementById('dropdownToggle')?.addEventListener('click', function (e) {
    e.preventDefault();
    const dropdown = document.getElementById('dropdown');
    dropdown?.classList.toggle('active');
    document.body.classList.toggle('dropdown-open');
  });

  // ========== FAQ ==========
  const questions = document.querySelectorAll('.faq .question');
  const answers   = document.querySelectorAll('.faq .answer');

  questions.forEach(q => {
    q.addEventListener('click', () => {
      const ans = q.nextElementSibling;

      questions.forEach(other => other !== q && other.classList.remove('active'));
      answers.forEach(a => {
        if (a !== ans) {
          a.style.maxHeight   = null;
          a.style.marginBottom = '0';
        }
      });

      const active = q.classList.toggle('active');
      ans.style.maxHeight   = active ? `${ans.scrollHeight}px` : null;
      ans.style.marginBottom = active ? '10px' : '0';
    });
  });

  // ========== MODAL FORM ==========
  const form         = document.querySelector('.partner-form');
  const modalOverlay = document.getElementById('modalOverlay');
  const modal        = document.querySelector('.modal');

  if (form && modalOverlay && modal) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      modalOverlay.style.display = 'flex';
      form.reset();

      setTimeout(() => {
        modalOverlay.style.display = 'none';
      }, 10000);
    });

    // Close when clicking outside the modal
    modalOverlay.addEventListener('click', function (e) {
      if (!modal.contains(e.target)) {
        modalOverlay.style.display = 'none';
      }
    });
  }
});
