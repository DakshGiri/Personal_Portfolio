// Wait until the HTML document has been parsed before interacting with it.
document.addEventListener("DOMContentLoaded", () => {
  // Update the copyright year automatically.
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Open and close the mobile navigation menu.
  const menuButton = document.getElementById("menu-toggle");
  const navigation = document.getElementById("nav-links");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the menu after a navigation link is selected on a small screen.
    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }
});
