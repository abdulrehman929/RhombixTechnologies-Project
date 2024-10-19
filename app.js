document.addEventListener('DOMContentLoaded', function () {
  // Listen for scroll events
  window.addEventListener('scroll', function () {
    // Get the element by its ID
    var jakeElement = document.querySelector('jake');

    // Check if the element exists
    if (jakeElement) {
      // If the page is scrolled more than 50px, hide the element
      if (window.scrollY > 50) {
        jakeElement.style.display = 'none';  // Hide the element
      } else {
        // Show the element if scrolled back to top
        jakeElement.style.display = 'block';  // Show the element again
      }
    } else {
      console.error("The element with id 'jake' was not found in the DOM.");
    }
  });
});

// // Hide the element with class 'cross' initially
// document.querySelector('.cross').style.display = 'none';

// // Add an event listener to the element with class 'menu'
// document.querySelector('.menu').addEventListener("click", () => {
//   // Toggle the 'sidebarGo' class on the element with class 'sidebar'
//   document.querySelector('.sidebar').classList.toggle('sidebarGo');

//   if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
//     // Show 'cross' and hide 'menu'
//     document.querySelector('.menu').style.display = 'inline';
//     document.querySelector('.cross').style.display = 'none';
//   } 
//   else {
//     // Show 'menu' and hide 'cross'
//     document.querySelector('.cross').style.display = 'inline';
//     document.querySelector('.menu').style.display = 'none';
//   }
// });


