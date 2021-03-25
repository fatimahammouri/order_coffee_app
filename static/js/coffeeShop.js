"use strict";

const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>a
  `);
  
};
//this function we added to see how we can get value from the attribute
//of a target element 
const addToCartHandler = (evt)=>{
  const buttonElement = evt.target;
  addItemToCart(buttonElement.getAttribute('product')); 
  
};

const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//Event handler for clicking  the button Add To Cart
const button = $('.add-to-order');
button.on('click', ()=>{
addItemToCart('Tea');
incrementCartTotal(3.00);
});

