console.log("Fela is Hot");
const sideNav = document.querySelector(".fa-bars");

sideNav.addEventListener("click", () => {
    sideNav.classList.toggle("fa-times");
});

// Page transitions
barba.init({
  transitions: [{
    name: 'page-transition',
    async leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0
      });
    },
    enter(data) {
      return gsap.from(data.next.container, {
        opacity: 0
      });
    }
  }]
});
// barba.init({
//   transitions: [{
//     name: 'page-transition',
//     async leave() {
//         await loaderIn()
//     },
//     enter() {
//         lodaerAway()
//     }
//   }]
// });