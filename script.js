document.addEventListener("DOMContentLoaded", () => {
    const sideMenu = document.querySelector(".side-menu");
    const toggleButton = document.createElement("button");

    // Add a toggle button for the side menu
    toggleButton.textContent = "☰";
    toggleButton.className = "menu-toggle";
    document.body.insertBefore(toggleButton, sideMenu);

    // Event listener to toggle the side menu visibility
    toggleButton.addEventListener("click", () => {
        sideMenu.classList.toggle("visible");
    });

    // Close the side menu when a menu link is clicked (useful for mobile)
    sideMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) { // Adjust breakpoint as needed
                sideMenu.classList.remove("visible");
            }
        });
    });
});
