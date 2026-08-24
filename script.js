function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}


// Close mobile menu when clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("navLinks").classList.remove("active");
    });
});
