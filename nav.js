const btn = document.getElementById('menu-btn')
const navContainer = document.querySelector('.mobile-menu')
const nav = document.getElementById('men')
const Home = document.querySelector('.home')
const About = document.querySelector('.what-we-do')
const Teams = document.querySelector('.our-team')
const Testimonial = document.querySelector('.testimonies')

// navContainer.style.display = "none"


btn.addEventListener('click', function(){
    btn.classList.toggle('open')
    nav.classList.toggle('mobile-menu')
    navContainer.style.display = (navContainer.style.display == 'none') ? 'block' : 'none';
    // navContainer.style.transition = 'display 3s ease-in-out';
})

Home.addEventListener('click', function(){
    btn.classList.toggle('open')
    nav.classList.toggle('mobile-menu')
    navContainer.style.display = "none"
})

About.addEventListener('click', function(){
    btn.classList.toggle('open')
    nav.classList.toggle('mobile-menu')
    navContainer.style.display = "none"
})

Teams.addEventListener('click', function(){
    btn.classList.toggle('open')
    nav.classList.toggle('mobile-menu')
    navContainer.style.display = "none"
})

Testimonial.addEventListener('click', function(){
    btn.classList.toggle('open')
    nav.classList.toggle('mobile-menu')
    navContainer.style.display = "none"
})


  // smooth scrolling
  $('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        }
      )
    }
  })