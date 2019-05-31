let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("slideshow");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 4000);
}

let mijnKnoppen = document.querySelectorAll("a");
let i = 0;
let scrollAantal = 0;
while (i < mijnKnoppen.length) {
      mijnKnoppen[i].addEventListener("click", function(event) {
         window.scroll({
            top: (window.innerHeight*this.getAttribute("data-factor")),
            left: 0,
            behavior: 'smooth'
         });
         event.preventDefault();
}, false);
      i++;
}
