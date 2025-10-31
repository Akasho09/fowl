(function () {
  function handleWheel(event) {
    event.preventDefault();
    const scrollAmount = (event.deltaY + event.deltaX) * 2;
    window.scrollBy({
      left: scrollAmount,
      top: 0,
    });
  }

  window.addEventListener("wheel", handleWheel, { passive: false });
})();

(function () {
  const container = document.querySelector(".scroll-container");

  function handleWheel(event) {
    const isHorizontal =
      Math.abs(event.deltaX) > Math.abs(event.deltaY) ||
      event.shiftKey;

    if (isHorizontal) {
      event.preventDefault();
      container.scrollBy({
        left: (event.deltaY + event.deltaX) * 2,
        top: 0,
        behavior: "smooth",
      });
    }
  }

  container.addEventListener("wheel", handleWheel, { passive: false });
})();
