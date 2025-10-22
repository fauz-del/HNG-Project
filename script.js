document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const sidebar = document.querySelector(".sidebar");

  menuIcon.addEventListener("click", () => {
    sidebar.classList.toggle("active");

    if (menuIcon.classList.contains("fa-bars")) {
      menuIcon.classList.replace("fa-bars", "fa-times");
    } else {
      menuIcon.classList.replace("fa-times", "fa-bars");
    }
  });
});


(function () {
  const timeEl = document.getElementById("user-time");
  if (timeEl) {
    function renderNow() {
      timeEl.textContent = Date.now(); 
    }
    renderNow();
    setInterval(renderNow, 500); 
  }
})();

(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const successMsg = document.querySelector("[data-testid='test-contact-success']");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

    document.querySelectorAll("small[data-testid^='test-contact-error']").forEach((s) => {
      s.textContent = "";
    });
    successMsg.textContent = "";

    if (!name.value.trim()) {
      document.querySelector("[data-testid='test-contact-error-name']").textContent =
        "Full name is required.";
      valid = false;
    }

    if (!emailPattern.test(email.value.trim())) {
      document.querySelector("[data-testid='test-contact-error-email']").textContent =
        "Enter a valid email address.";
      valid = false;
    }

    // Validate Subject
    if (!subject.value.trim()) {
      document.querySelector("[data-testid='test-contact-error-subject']").textContent =
        "Subject is required.";
      valid = false;
    }

    if (message.value.trim().length < 10) {
      document.querySelector("[data-testid='test-contact-error-message']").textContent =
        "Message must be at least 10 characters long.";
      valid = false;
    }

    if (valid) {
      successMsg.textContent = "✅ Message sent successfully!";
      form.reset();
    }
  });
})();
