(function () {
  function handleWheel(event) {
    window.scrollBy({
      left: event.deltaX + event.deltaY,
    });
  }

  window.addEventListener("wheel", handleWheel, { passive: false });
})();
