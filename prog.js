

                                /* Navbar */


document.addEventListener(
        "DOMContentLoaded",() => {
            const menuToggle = document.getElementById("menu-toggle")
            const navLinks = document.getElementById("nav-links")
        
            menuToggle.addEventListener("click", () =>{
                navLinks.classList.toggle("show")
            })
        }
    )



                                /* Űrlap */

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("ajanlatForm");
    const sikerUzenet = document.getElementById("sikerUzenet");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        
        form.style.display = "none";
        sikerUzenet.style.display = "flex";
    });
});




                                    /* Galéria */


document.querySelectorAll('.gal1 img, .gal2 img, .gal3 img').forEach(img => {
    img.addEventListener('click', () => {
        
        const overlay = document.createElement('div');
        overlay.classList.add('fullscreen-img');

       
        const fullImg = document.createElement('img');
        fullImg.src = img.src;
        overlay.appendChild(fullImg);

        
        document.body.appendChild(overlay);

        
        overlay.addEventListener('click', () => {
            overlay.remove();
        });
    });
});



                               /*  Carousel */

                               
const slides = document.querySelector(".slides");
const slideItems = document.querySelectorAll(".slides > div");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index = 0;
const slideWidth = 300;

function updateSlide() {
  slides.style.transform = `translateX(${-index * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % slideItems.length;
  updateSlide();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slideItems.length) % slideItems.length;
  updateSlide();
});




