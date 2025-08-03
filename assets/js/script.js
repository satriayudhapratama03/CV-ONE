//Generals gathered in their masses
//Just like witches at black masses
//Evil minds that plot destruction
//Sorcerer of death's construction
//In the fields, the bodies burning
//As the war machine keeps turning
//Death and hatred to mankind
//Poisoning their brainwashed minds
//Oh, Lord, yeah

//header script
let lastScrollTop = 0;
const header = document.querySelector('header');
const body = document.body;
const hero = document.querySelector('.hero');
const scrollPoint = hero ? hero.offsetHeight : 100;

window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > scrollPoint) {
    body.classList.add('scrolled');
  } else {
    body.classList.remove('scrolled');
  }

  if (currentScroll > lastScrollTop && currentScroll > 100) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

  if (document.body.classList.contains('dropdown-open')) {
    const dropdown = document.getElementById('dropdown');
    if (dropdown) {
      dropdown.classList.remove('active');
    }
    document.body.classList.remove('dropdown-open');
  }

  if (document.body.classList.contains('nav-open')) {
    const dropdown = document.getElementById('nav');
    if (dropdown) {
      dropdown.classList.remove('active');
    }
    document.body.classList.remove('nav-open');
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
});

//Politicians hide themselves away
//They only started the war
//Why should they go out to fight?
//They leave that all to the poor, yeah
//Time will tell on their power minds
//Making war just for fun
//Treating people just like pawns in chess
//Wait till their judgment day comes, yeah

//hero script
const bgs = [
  document.getElementById('bg1'),
  document.getElementById('bg2'),
  document.getElementById('bg3')
];

const texts = [
  document.getElementById('text1'),
  document.getElementById('text2'),
  document.getElementById('text3')
];

const indicators = [
  [
    document.getElementById('indicator1'),
    document.getElementById('indicator1-clone'),
    document.getElementById('indicator1-clones')
  ],
  [
    document.getElementById('indicator2'),
    document.getElementById('indicator2-clone'),
    document.getElementById('indicator2-clones')
  ],
  [
    document.getElementById('indicator3'),
    document.getElementById('indicator3-clone'),
    document.getElementById('indicator3-clones')
  ]
];

let current = 0;
const total = bgs.length;

setInterval(() => {
  const next = (current + 1) % total;

  bgs[current].classList.remove('active');
  bgs[current].classList.add('inactive');
  bgs[next].classList.remove('inactive');
  bgs[next].classList.add('active');

  texts[current].classList.remove('active');
  texts[current].classList.add('exiting');

  texts[next].classList.remove('active', 'exiting', 'entering');
  void texts[next].offsetWidth;
  texts[next].classList.add('entering');

  setTimeout(() => {
    texts[current].classList.remove('exiting');
    texts[next].classList.remove('entering');
    texts[next].classList.add('active');

    for (let i = 0; i < 3; i++) {
      indicators[current][i].classList.remove('active');
      indicators[next][i].classList.add('active');
    }

    current = next;
  }, 750);
}, 10000);

//Now, in darkness, world stops turning
//Ashes where their bodies burning
//No more war pigs have the power
//Hand of God has struck the hour
//Day of Judgment, God is calling
//On their knees, the war pigs crawling
//Begging mercies for their sins
//Satan, laughing, spreads his wings
//Oh, Lord, yeah

//footer script
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
