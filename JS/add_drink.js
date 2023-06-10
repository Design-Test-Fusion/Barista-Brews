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
  