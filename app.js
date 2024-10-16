document.addEventListener('DOMContentLoaded', function() {
    // Listen for scroll events
    window.addEventListener('scroll', function() {
      // Get the element by its ID
      var jakeElement = document.getElementById('jake');
  
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

  
  // Hides the element with ID 'cross'
document.getElementById('cross').style.display = 'none';

// Adds a click event listener to the element with ID 'menu'
document.getElementById('menu').addEventListener("click", () => {
  // Toggles the 'sidebarGo' class on the element with class 'sidebar'
  document.querySelector('.sidebar').classList.toggle('sidebarGo');
});
