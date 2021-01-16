// toggle classes
var burgerBtn = document.querySelector(".burger-button");
var navigation = document.querySelector(".navigation");
var navbar = document.querySelector("nav");

burgerBtn.addEventListener("click", ()=>{
    burgerBtn.classList.toggle("rotate");
    navigation.classList.toggle("open");
    burgerBtn.classList.add("change");

})

window.onscroll=()=>{
    if(window.scrollY>=10) navbar.classList.add("scroll")
    else navbar.classList.remove("scroll");
}

var circles = document.querySelectorAll(".circle")

circles.forEach(circle => {

  var perc = circle.dataset.perc
  console.log(perc)

  var bar = new ProgressBar.Circle(circle, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FA225B',
    trailColor: 'transparent',
    trailWidth: 0,
    svgStyle: null
  });

  bar.animate(perc);
})
// brands swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  
});