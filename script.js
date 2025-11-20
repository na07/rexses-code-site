document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");

  if (!toggle) return;

  const savedTheme = localStorage.getItem("light-theme");
  if (savedTheme === "true") {
    document.body.classList.add("light-theme");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.body.classList.add("light-theme");
      localStorage.setItem("light-theme", "true");
    } else {
      document.body.classList.remove("light-theme");
      localStorage.setItem("light-theme", "false");
    }
  });
});