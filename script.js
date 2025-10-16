// script.js
(function () {
  const timeEl = document.getElementById("user-time");
  if (!timeEl) return;

  // Write the numeric milliseconds only (no prefix text)
  function renderNow() {
    // Use Date.now() and write it as a string so tests can compare directly
    timeEl.textContent = String(Date.now());
  }

  // Initial render (important for tests that check on load)
  renderNow();

  // Update every 500ms to keep it fresh but avoid excessive updates
  const intervalId = setInterval(renderNow, 500);

  // Optional: if you want to stop updating after some time uncomment:
  // setTimeout(() => clearInterval(intervalId), 60_000); // stop after 1 minute
})();