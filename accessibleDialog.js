const dialog = document.getElementById("accessibleDialog");
const openDialogBtn = document.getElementById("openDialogBtn");
const closeDialogBtn = document.getElementById("closeDialogBtn");

// Open dialog
openDialogBtn.addEventListener("click", function () {
  dialog.showModal();
  closeDialogBtn.focus();
});

// Close dialog
closeDialogBtn.addEventListener("click", function () {
  dialog.close();
  openDialogBtn.focus();
});

// Close with escape button
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeDialogBtn.click();
  }
});
