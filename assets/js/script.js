// 헤더
const header = document.querySelector("#header");
let shrinkHeader = header.getBoundingClientRect().height;
let gotop = 800;

window.addEventListener("scroll", function () {
  let scroll = getCurrentScroll();
  if (scroll >= shrinkHeader) {
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
});

function getCurrentScroll() {
  return document.body.pageYOffset || document.documentElement.scrollTop;
}

document.querySelectorAll('.menu__item > a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});