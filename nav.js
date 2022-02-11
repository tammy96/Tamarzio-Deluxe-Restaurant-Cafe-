// side bar navigation menu

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle")

navToggle.addEventListener("click", toggleNav);

function toggleNav(){
    const visibility = primaryNav.getAttribute("data-visible") 
    // console.log(10)

    if(visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute('aria-expanded', false);
    }
}

const primaryMenu = document.querySelector(".on-click");
primaryMenu.addEventListener("click", toggleNav);



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
  