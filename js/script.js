
// scroll menu item to anchor on click

let menu = document.querySelectorAll(".navbar-nav li a");

menu.forEach((menuItem)=>{
  if(menuItem){menuItem.addEventListener('click', (event) => {
    const chosenItem = event.currentTarget.innerText;
    // console.log(chosenItem);
    let chosenSection = document.querySelector('#investments');

    switch(chosenItem){
      case 'Investment Advisory':
        chosenSection = document.querySelector('#investments');
        break;
        console.log("investment section");
      case 'Property Management':
        chosenSection = document.querySelector('#whatwedo');
        break;
    }


    chosenSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  })};
});



 // Wrap every letter in a span
let textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: function(el, i) {
      return 400 + 30 * i;
    }
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1500,
    delay: function(el, i) {
      return 400 + 30 * i;
    }
  });
