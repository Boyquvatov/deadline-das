document.addEventListener('DOMContentLoaded', function () {
    const cartButton = document.getElementById('cart');
    cartButton.addEventListener('click', function () {
      window.location.href = '.card.html'; // Redirect to cart page
    });
  
    const foodButtons = document.querySelectorAll('#foods .card button');
    foodButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        // Logic to add selected food to cart
        alert('Food added to cart!');
      });
    });
  
    const drinkButtons = document.querySelectorAll('#drinks .card button');
    drinkButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        // Logic to add selected drink to cart
        alert('Drink added to cart!');
      });
    });
  });
  