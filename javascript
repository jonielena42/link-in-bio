// Create the menu element
var menu = document.createElement('div');
menu.id = 'menu';
menu.innerHTML = '<a href="#">Menu item 1</a><a href="#">Menu item 2</a><a href="#">Menu item 3</a>';

// Add the menu to the page
document.body.appendChild(menu);

// Create the menu toggle button
var toggleButton = document.createElement('button');
toggleButton.id = 'toggle-button';
toggleButton.innerHTML = 'Toggle menu';
document.body.appendChild(toggleButton);

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', function() {
  // Toggle the 'menu-open' class on the menu
  menu.classList.toggle('menu-open');
});
