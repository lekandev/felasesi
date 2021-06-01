console.log("Fela is Hot");
const sideNav = document.querySelector(".fa-bars");

sideNav.addEventListener("click", () => {
    sideNav.classList.toggle("fa-times");
});