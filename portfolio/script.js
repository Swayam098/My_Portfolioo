// GSAP Navbar Menu Toggle
let isMenuOpen = false;
const navLinks = document.getElementById("navLinks");

window.toggleMenu = function () {
  if (isMenuOpen) {
    gsap.to(navLinks, {
      duration: 0.5,
      y: "-100%",
      opacity: 0,
      ease: "power2.out",
      onComplete: () => {
        navLinks.classList.remove("active");
        navLinks.style.pointerEvents = "none";
      },
    });
  } else {
    navLinks.classList.add("active");
    navLinks.style.pointerEvents = "auto";
    gsap.fromTo(
      navLinks,
      { y: "-100%", opacity: 0 },
      {
        duration: 0.5,
        y: "0%",
        opacity: 1,
        ease: "power2.inOut",
      }
    );
  }
  isMenuOpen = !isMenuOpen;
};
