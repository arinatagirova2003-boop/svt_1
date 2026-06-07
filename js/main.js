document.addEventListener("DOMContentLoaded", function () {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
  console.log("Сайт інституту завантажено успішно");

  document.querySelectorAll("input[data-confirm]").forEach(function (confirmInput) {
    const sourceInput = document.getElementById(confirmInput.dataset.confirm);
    if (!sourceInput) return;

    function checkMatch() {
      if (confirmInput.value !== sourceInput.value) {
        confirmInput.setCustomValidity("Паролі не збігаються");
      } else {
        confirmInput.setCustomValidity("");
      }
    }

    confirmInput.addEventListener("input", checkMatch);
    sourceInput.addEventListener("input", checkMatch);
  });
});