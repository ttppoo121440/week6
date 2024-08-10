import "./assets/styles/tailwind.css";
import Carousel from "./components/Carousel";
import "./components/MobileMenu";

document.addEventListener("DOMContentLoaded", () => {
  const carouselContainers = document.querySelectorAll(".carousel");
  carouselContainers.forEach((carouselContainer) => {
    new Carousel(carouselContainer as HTMLElement, {
      autoPlay: true,
      autoPlayInterval: 3000,
      breakpoint: 1200,
    });
  });
});
