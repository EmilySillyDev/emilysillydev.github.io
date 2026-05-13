const NAVBAR_SELECTED = "navbar-selected";

function setPage(pageName) {
    const buttonId = `navbar-${pageName}`
    const button = document.getElementById(buttonId);
    const allButtons = document.getElementsByClassName("navbar-item");

    for (const btn of allButtons) {
        btn.classList.remove(NAVBAR_SELECTED);
    }

    button.classList.add(NAVBAR_SELECTED);

    const allContainers = document.getElementsByClassName("page-content");
    for (const container of allContainers) {
        if (container.classList.contains(pageName)) {
            container.style.display = "block";
        } else {
            container.style.display = "none";
        }
    }

    const mobileNav = document.getElementById("mobile-nav");
    if (mobileNav.style.display === "flex") {
        mobileNav.style.display = "none";
    }
}

function toggleMobileNav() {
    const mobileNav = document.getElementById("mobile-nav");
    if (mobileNav.style.display === "flex") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "flex";
    }
}

// Set default page
setPage("home");