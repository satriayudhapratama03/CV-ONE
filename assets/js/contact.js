window.addEventListener('scroll', function () {
  const body = document.body;
  const hero = document.querySelector('.hero');
  const scrollPoint = hero ? hero.offsetHeight : 100;
  if (window.scrollY > scrollPoint) {
    body.classList.add('scrolled');
  } else {
    body.classList.remove('scrolled');
  }
});

document.getElementById('burger').addEventListener('click', function () {
  document.body.classList.toggle('nav-open');
});

document.getElementById('dropdownToggle').addEventListener('click', function (e) {
  e.preventDefault();
  const dropdown = document.getElementById('dropdown');
  dropdown.classList.toggle('active');
  document.body.classList.toggle('dropdown-open');
});;

const form = document.querySelector('.partner-form');
const modal = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  modal.style.display = 'flex';
  form.reset();
});

closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.faq .question');
  questions.forEach(q => {
    q.addEventListener('click', () => {
      questions.forEach(el => {
        if (el !== q) el.classList.remove('active');
      });
      q.classList.toggle('active');
    });
  });
});
