
// Hide the element with class 'cross' initially
document.querySelector('.cross').style.display = 'none';

// Add an event listener to the element with class 'menu'
document.querySelector('.menu').addEventListener("click", () => {
  // Toggle the 'sidebarGo' class on the element with class 'sidebar'
  document.querySelector('.sidebar').classList.toggle('sidebarGo');

  if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
    // Show 'cross' and hide 'menu'
    document.querySelector('.menu').style.display = 'inline';
    document.querySelector('.cross').style.display = 'none';
  } 
  else {
    // Show 'menu' and hide 'cross'
    document.querySelector('.cross').style.display = 'inline';
    document.querySelector('.menu').style.display = 'none';
  }
});


document.querySelector('.cross').addEventListener("click", () => {
  // Toggle the 'sidebarGo' class on the element with class 'sidebar'
  document.querySelector('.sidebar').classList.toggle('sidebarGo');

  if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
    // Show 'cross' and hide 'menu'
    document.querySelector('.menu').style.display = 'inline';
    document.querySelector('.cross').style.display = 'none';
  } 
  else {
    // Show 'menu' and hide 'cross'
    document.querySelector('.cross').style.display = 'inline';
    // document.querySelector('.menu').style.display = 'none';
  }
});


