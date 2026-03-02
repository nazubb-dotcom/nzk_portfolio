const hamburger = document.getElementById('js-hamburger');
const nav = document.getElementById('js-nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    console.log("ハンバーガーがクリックされました");
    nav.classList.toggle('is-active');
    hamburger.classList.toggle('is-active');
  });

  nav.addEventListener('click', () => {
    nav.classList.remove('is-active');
    hamburger.classList.remove('is-active');
  });
}
