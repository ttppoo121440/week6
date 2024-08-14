const btn: HTMLElement | null = document.querySelector(
  "button.mobile-menu-button",
);
const menu: HTMLElement | null = document.querySelector(".mobile-menu");

btn?.addEventListener("click", () => {
  menu?.classList.toggle("active");
  btn.classList.toggle("active");

  const svg: SVGSVGElement | null = btn.querySelector("svg");
  if (!menu?.classList.contains("active")) {
    svg!.innerHTML = '<path d="M4 6h16M4 12h16M4 18h16"></path>';
    document.body.style.overflow = "";
  } else {
    svg!.innerHTML = '<path d="M6 18L18 6M6 6l12 12"></path>';
    document.body.style.overflow = "hidden";
  }
});
