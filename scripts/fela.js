console.log("Fela is Hot");
const sideNav = document.querySelector(".fa-bars");
let navigation = document.querySelector(".nav");

sideNav.addEventListener("click", () => {
    sideNav.classList.toggle("fa-times");
});

window.onscroll = () => {
    const top = window.scrollY
    if (top >= 200) {
        navigation.style.backgroundColor = "#111";
    } else {
        navigation.style.backgroundColor = "transparent";
    }
    
}
// Page transitions
// barba.init({
//   transitions: [{
//     name: 'page-transition',
//     async leave(data) {
//       return gsap.to(data.current.container, {
//         opacity: 0
//       });
//     },
//     enter(data) {
//       return gsap.from(data.next.container, {
//         opacity: 0
//       });
//     }
//   }]
// });