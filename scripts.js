// function toggleMobileMenu(){
//     document.getElementById("menu").classList.toggle
//     ("active");
// }

// function toggleMobileMenu(event) {
//     event.preventDefault();
//     const menu = document.getElementById("menu");
//     menu.classList.toggle("active");
// }

// document.querySelectorAll("#menu a").forEach(link => {
//     link.addEventListener("click", () => {
//         const menu = document.getElementById("menu");
//         menu.classList.remove("active");
//     });
// });
function toggleMobileMenu(event) {
    event.preventDefault();
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll("#menu a");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            const menu = document.getElementById("menu");
            if (menu.classList.contains("active")) {
                menu.classList.remove("active");
            }
        });
    });
});