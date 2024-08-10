interface CarouselConfig {
  autoPlay?: boolean;
  autoPlayInterval?: number;
  breakpoint?: number;
}

class Carousel {
  private items: HTMLElement[];
  private currentIndex: number;
  private totalItems: number;
  private isAnimating: boolean;
  private autoPlayInterval: number;
  private autoPlayTimer: number | undefined;
  private startX: number | null = null;
  private isCarouselActive: boolean = false;
  private config: CarouselConfig;

  constructor(
    private container: HTMLElement,
    config: CarouselConfig = {},
  ) {
    this.config = {
      autoPlay: config.autoPlay ?? true,
      autoPlayInterval: config.autoPlayInterval ?? 3000,
      breakpoint: config.breakpoint ?? 1200,
    };

    this.items = Array.from(container.querySelectorAll(".carousel-item"));
    this.currentIndex = 0;
    this.totalItems = this.items.length;
    this.isAnimating = false;
    this.autoPlayInterval = this.config.autoPlayInterval ?? 3000;

    this.init();
    window.addEventListener("resize", this.onResize.bind(this));
  }

  private init() {
    this.setupCarousel();
    this.onResize();
  }

  private setupCarousel() {
    const prevButton = this.container.querySelector(".prev");
    const nextButton = this.container.querySelector(".next");
    if (prevButton && nextButton) {
      prevButton.addEventListener("click", () => this.move(-1));
      nextButton.addEventListener("click", () => this.move(1));
    }

    this.container.addEventListener("mousedown", this.onMouseDown.bind(this));
    this.container.addEventListener("mousemove", this.onMouseMove.bind(this));
    this.container.addEventListener("mouseup", this.onMouseUp.bind(this));
    this.container.addEventListener("mouseleave", this.onMouseUp.bind(this));
  }

  private onResize() {
    if (window.innerWidth >= (this.config.breakpoint ?? 1200)) {
      this.deactivateCarousel();
    } else {
      this.activateCarousel();
    }
  }

  private deactivateCarousel() {
    if (this.isCarouselActive) {
      const itemsContainer = this.container.querySelector(
        ".carousel-items",
      ) as HTMLElement;
      itemsContainer.removeAttribute("style");
      if (this.autoPlayTimer) {
        clearInterval(this.autoPlayTimer);
        this.autoPlayTimer = undefined;
      }
      this.isCarouselActive = false;
    }
  }

  private activateCarousel() {
    if (!this.isCarouselActive) {
      this.currentIndex = 0;
      this.update();
      if (this.config.autoPlay) {
        this.startAutoPlay();
      }
      this.isCarouselActive = true;
    }
  }

  private onMouseDown(event: MouseEvent) {
    this.startX = event.clientX;
  }

  private onMouseMove(event: MouseEvent) {
    if (this.startX === null) return;

    const diffX = event.clientX - this.startX;
    if (Math.abs(diffX) > 50) {
      this.move(diffX > 0 ? -1 : 1);
      this.resetAutoPlay();
      this.startX = null;
    }
  }

  private onMouseUp() {
    this.startX = null;
  }

  private move(direction: number) {
    if (this.isAnimating || !this.isCarouselActive) return;
    this.currentIndex =
      (this.currentIndex + direction + this.totalItems) % this.totalItems;
    this.update();
  }

  private update() {
    if (!this.isCarouselActive) return;
    this.isAnimating = true;
    const offset = -this.currentIndex * 100;
    const itemsContainer = this.container.querySelector(
      ".carousel-items",
    ) as HTMLElement;
    itemsContainer.style.transition = "transform 0.5s ease";
    itemsContainer.style.transform = `translateX(${offset}%)`;

    itemsContainer.addEventListener(
      "transitionend",
      () => {
        this.isAnimating = false;
      },
      { once: true },
    );
  }

  private startAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
    }
    if (this.config.autoPlay) {
      this.autoPlayTimer = window.setInterval(() => {
        if (this.isCarouselActive) {
          this.move(1);
        }
      }, this.autoPlayInterval);
    }
  }

  private resetAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.startAutoPlay();
    }
  }
}

export default Carousel;
