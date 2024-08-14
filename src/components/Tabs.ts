document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll<HTMLButtonElement>(".tab-btn");
  const tabs = document.querySelectorAll<HTMLElement>(".tab-content");

  const setActiveTab = (target: string) => {
    tabs.forEach((tab) => {
      tab.classList.toggle("hidden", tab.id !== target);
      tab.classList.toggle("active", tab.id === target);
    });

    buttons.forEach((btn) => {
      btn.classList.toggle(
        "active",
        btn.getAttribute("data-target") === target,
      );
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-target");
      if (target) {
        setActiveTab(target);
      }
    });
  });
});
