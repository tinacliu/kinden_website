


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
