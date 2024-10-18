document.addEventListener('DOMContentLoaded', function () {
  // Listen for scroll events
  window.addEventListener('scroll', function () {
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
document.getElementById('menu').addEventListener("click", () => {
  document.querySelector('.sidebar').classList.toggle('sidebarGo');
  if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.getElementById('.cross').style.display =('inline')
    document.getElementById('.menu').style.display =('none')
  }
  else{
    document.getElementById('.menu').style.display =('inline')
    document.getElementById('.cross').style.display =('none')
  }

})
