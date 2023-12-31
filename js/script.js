document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here
    console.log("Document is ready");

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModals[i].classList.toggle("active");
        console.log("Function executed");
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModal) => {
            console.log("Function executed");
            portfolioModal.classList.remove("active");
        });
    });
});


const scrollTopBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
})

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

//navigation menu items active on scroll
/* window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
        let sectionHeight = section.offsetHeight;
        let sectionTop = section.offsetTop - 50;
        let id = section.getAttribute("id");
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(`.nav-items a[href*="${id}"]`).classList.add("active");
        }else{
            document.querySelector(`.nav-items a[href*="${id}"]`).classList.remove("active");
        }
    });

}); */

const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-items a");

    function activateMenuItem(id) {
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", () => {
        const scrollY = window.pageYOffset;

        sections.forEach((section) => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 50;
            const id = section.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                activateMenuItem(id);
            }
        });
    });

    const menuBtn = document.querySelector(".nav-menu-btn");
    const closeBtn = document.querySelector(".nav-close-btn");
    const navigation = document.querySelector(".navigation");
    const navItems = document.querySelectorAll(".nav-items a");
    
    menuBtn.addEventListener("click", () => {
        navigation.classList.add("active");
    })
    
    closeBtn.addEventListener("click", () => {
        navigation.classList.remove("active");
    })

    navItems.forEach((navItem) => {
        navItem.addEventListener("click", () => {
            navigation.classList.remove("active");
        })
    })

    ScrollReveal({ 
       // reset: true,
        distance:'20px',
        duration:1300,
        delay:50
    
    });
  
    ScrollReveal().reveal('.home .info .h2, .section-title-01, .section-title-02', {delay:400, origin:'top' });
    ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', {delay:500, origin:'bottom' });
    ScrollReveal().reveal('.home .info .btn-home', {delay:600, origin:'bottom' });
    ScrollReveal().reveal('.media-icons i, .contact-left li', {delay:400, origin:'top', interval:200 });
    ScrollReveal().reveal('.home-img, .about-img', {delay:400, origin:'bottom' });
    ScrollReveal().reveal('.about .description, .contact-right', {delay:500, origin:'top' });
    ScrollReveal().reveal('.skills-description, .contact-card, .contact-left h2 ', {delay:600, origin:'bottom'});
    ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card', {delay:700, origin:'bottom', interval:200});
    ScrollReveal().reveal('footer .group', {delay:400, origin:'top', interval:200});



// Adjust the number of clouds and their properties as needed
const homeSection = document.querySelector(".home");

  // Create a canvas element
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // Set the size of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Append the canvas to the body
  document.body.appendChild(canvas);

  // Position the canvas absolutely
  canvas.style.position = "absolute";
  canvas.style.top = "0";
  canvas.style.left = "0";

  // Adjust the number of clouds and their properties as needed
  const fogParticles = [];

  class FogParticle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 2 + 1;
      this.speed = Math.random() * 0.5 + 0.1;
    }

    update() {
      this.x -= this.speed;
      if (this.x < 0) {
        this.x = canvas.width;
      }
    }

    draw() {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function createFog() {
    for (let i = 0; i < 100; i++) {
      fogParticles.push(new FogParticle());
    }
  }

  function animateFog() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const particle of fogParticles) {
      particle.update();
      particle.draw();
    }

    requestAnimationFrame(animateFog);
  }

  window.addEventListener("resize", () => {
    // Adjust canvas size on window resize
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Clear existing particles and create new ones
    fogParticles.length = 0;
    createFog();
  });

  createFog();
  animateFog();


  function clearForm() {
    // Reset the form after submission
    document.querySelector('.contact-form').reset();
}


/* ----------------------------------------------- */

/* ------------------------------------------------------------------- */
  


});

