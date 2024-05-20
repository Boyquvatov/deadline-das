document.addEventListener('DOMContentLoaded', function () {
    const cartButton = document.getElementById('cart');
    cartButton.addEventListener('click', function () {
      window.location.href = 'cart.html'; // Savatcha sahifasiga yo'naltirish
    });
  
    const foodButtons = document.querySelectorAll('#foods .card button');
    foodButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const foodName = this.parentNode.querySelector('h3').innerText;
        const foodPrice = this.parentNode.querySelector('p').innerText.split(': ')[1];
        addToCart(foodName, foodPrice);
      });
    });
  
    const drinkButtons = document.querySelectorAll('#drinks .card button');
    drinkButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const drinkName = this.parentNode.querySelector('h3').innerText;
        const drinkPrice = this.parentNode.querySelector('p').innerText.split(': ')[1];
        addToCart(drinkName, drinkPrice);
      });
    });
  
    function addToCart(name, price) {
      // Savatchaga mahsulot qo'shish
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <span>${name}</span>
        <span>${price}</span>
      `;
      document.getElementById('cart-items').appendChild(cartItem);
    }
  });
  