window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight));
}, false); // --scroll is top scrolled pixel in proportion to (entire document length minus window's height) --> basically how far along user has scrolled in relation to the document.

// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar



// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= navbar.pageYOffset) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// ---- Uncomment below to autoscroll: ----

// let scrollerID;
// let paused = true;
// let speed = 2; // 1 - Fast | 2 - Medium | 3 - Slow
// let interval = speed * 5;

// function startScroll(){
//     let id = setInterval(function() {
//         window.scrollBy(0, 2);
//         if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//             // Reached end of page
//             stopScroll();
//         }
//     }, interval);
//     return id;
// }

// function stopScroll() {
//     clearInterval(scrollerID);
// }

// document.body.addEventListener('keypress', function (event)
// {
//     if (event.which == 13 || event.keyCode == 13) {
//         // It's the 'Enter' key
//         if(paused == true) {
//             scrollerID = startScroll();
//             paused = false;
//         }
//         else {
//             stopScroll();
//             paused = true;
//         }
//     }
// }, true);

function to(id) {
  var pos = document.getElementById(id).offsetTop;
  const center = pos - window.scrollY - 200; //Closes the gap then centers 200 pixels down.
  // if (window.scrollY > pos) 
  // {
    window.scrollBy(0, center);
  // }
  // while (window.scrollY + 100 < pos)
  // {
  //   window.scrollBy(0,100);
  // }

  document.getElementById(id).style.border = "5px dashed red";


}
//Why is this not working??
// while (True) {
// document.getElementById("demo").innerHTML = window.scrollY;
// if (window.scrollY == 200)
// {
//   alert("uncentered");
//   document.getElementById(id).style.border = "2px solid black";

// }
// }


// Program a way to detech if user has scrolled within 3 seconds: --

// if (scrolling()){alert(scrolling());}

// function scrolling() {
//   var current;
//   setTimeout(() => {current = window.scrollY;}, 3000);

//   if (current =! window.scrollY)
//   {
//     return True
//   }
// }

