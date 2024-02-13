export default {
  inserted: function (el, binding) {
    const { animation, delay } = binding.value;
    if (animation === "none") return false; // если не нужна анимация, передать none
    const animationClass = animation || "animate__fadeInUp";
    const delayClass = delay
      ? `animate__delay-${delay.toString().replace(".", "_")}s`
      : "";

    el.classList.add("scroll-animate-element");

    const isInViewport = (rect) => {
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      if (isInViewport(rect)) {
        el.style.opacity = 1; // Меняем прозрачность элемента
        el.classList.add("animate__animated", animationClass);
        if (delayClass) {
          el.classList.add(delayClass);
        }
        window.removeEventListener("scroll", handleScroll);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
  },
};
