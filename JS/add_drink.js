document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      var drinkName = document.querySelector('.name').value;
      var imageUrl = document.querySelector('.drink-img').value;
      var ingredients = document.querySelector('.drink-In').value;
      var steps = document.querySelector('.drink-st').value;
      var drinkType = document.querySelector('input[name="drone"]:checked').value;
  
      var drink = {
        name: drinkName,
        image: imageUrl,
        ingredients: ingredients,
        steps: steps,
        type: drinkType
      };
  
      if (typeof Storage !== 'undefined') {
        var drinks = JSON.parse(localStorage.getItem('drinks')) || [];
  
        drinks.push(drink);
  
        localStorage.setItem('drinks', JSON.stringify(drinks));
  
        form.reset();
  
        alert('Drink added successfully!');
      } else {
        alert('Sorry, your browser does not support local storage.');
      }
    });
  });

  // Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.querySelector('form');
  
    // Listen for the form submission event
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Get the input values
      var drinkName = document.querySelector('.name').value;
      var imageUrl = document.querySelector('.drink-img').value;
      var ingredients = document.querySelector('.drink-In').value;
      var steps = document.querySelector('.drink-st').value;
      var drinkType = document.querySelector('input[name="drone"]:checked').value;
  
      // Create an object to store the drink information
      var drink = {
        name: drinkName,
        image: imageUrl,
        ingredients: ingredients,
        steps: steps,
        type: drinkType
      };
  
      // Check if localStorage is supported by the browser
      if (typeof Storage !== 'undefined') {
        // Get the existing drinks from localStorage
        var drinks = JSON.parse(localStorage.getItem('drinks')) || [];
  
        // Add the new drink to the array
        drinks.push(drink);
  
        // Save the updated array back to localStorage
        localStorage.setItem('drinks', JSON.stringify(drinks));
  
        // Clear the form inputs
        form.reset();
  
        // Provide feedback to the user (optional)
        alert('Drink added successfully!');
      } else {
        // If localStorage is not supported, display an error message
        alert('Sorry, your browser does not support local storage.');
      }
    });
  });

  