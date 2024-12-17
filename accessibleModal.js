// Modal without <dialog>
const modal = document.getElementById("accessibleModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const overlay = document.getElementById("overlay");

// Open modal
openModalBtn.addEventListener("click", function () {
  modal.style.display = "block";
  overlay.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  closeModalBtn.focus();
});

// Close modal
closeModalBtn.addEventListener("click", function () {
  modal.setAttribute("aria-hidden", "true");
  openModalBtn.focus();
  overlay.style.display = "none";
  modal.style.display = "none";
});

// Using ESC nutton to exit modal
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModalBtn.click();
  }
});
