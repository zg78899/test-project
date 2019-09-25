const homePhone = document.querySelector('.home-phone');
const section6 = document.querySelector('.section6');

window.addEventListener('scroll', () => {
  if (window.scrollY > section6.offsetTop - 700&& window.scrollY < section6.offsetTop) {
    homePhone.classList.add('home-phone-active');
  };
});

const section3Phone = document.querySelector('.phone');
const section3 = document.querySelector('.section3');

window.addEventListener('scroll', () => {
  if (window.scrollY > section3.offsetTop - 700&& window.scrollY < section3.offsetTop) {
    section3Phone.classList.add('phone-active');
  };
});

const section7circle = document.querySelector('.circle2');
const section7 = document.querySelector('.section7');
       
window.addEventListener('scroll', () => {
  if (window.scrollY > section7.offsetTop - 700&& window.scrollY < section7.offsetTop) {
    section7circle.classList.add('section7-active1');
    section7.classList.add('section7-active2');
  };
});