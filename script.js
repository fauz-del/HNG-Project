(function () {
  const timeEl = document.getElementById("user-time");
  if (!timeEl) return;

  function renderNow() {
  
    timeEl.textContent = String(Date.now());
  }

  renderNow();

  const intervalId = setInterval(renderNow, 500);
  
})();
