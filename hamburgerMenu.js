const menuContent = document.getElementById("menuContent");
const menuButton = document.getElementById("menuButton");

// Toggle menu
menuButton.addEventListener("click", () => {
  const isMenuOpen = menuButton.getAttribute("aria-expanded") === "true";

  // Change visibility of menu
  menuContent.style.display = isMenuOpen ? "none" : "block";

  // update attributes to show status of menu
  menuContent.setAttribute("aria-hidden", isMenuOpen);
  menuButton.setAttribute("aria-expanded", !isMenuOpen);
});

// Closing with ESC key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    menuButton.setAttribute("aria-expanded", "false");
    menuContent.setAttribute("aria-hidden", "true");
    menuContent.style.display = "none";
  }
});
