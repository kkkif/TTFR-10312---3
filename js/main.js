window.onload = function () {
  let body = document.querySelector("body");
  let burger = document.querySelector(".burger");
  let nav = document.querySelector(".nav");

  burger.addEventListener("click", function () {
    body.classList.toggle("hidden")
    burger.classList.toggle("active")
    nav.classList.toggle("open")
  })

  const buttonUp = {
    el: document.querySelector('.arrow-btn-up'),
    show() {
      this.el.classList.add('btn-visible');
    },
    hide() {
      this.el.classList.remove('btn-visible');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 300 ? this.show() : this.hide();
      });
      document.querySelector('.arrow-btn-up').onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }

  buttonUp.addEventListener();
}

AOS.init();