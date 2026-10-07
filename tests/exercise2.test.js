const assert = require('node:assert');
const { calculateTotalWithDiscount } = require('../src/cart');

describe('Exercise 2 - Cart total with discount: applies 10% off when the total is greater than R$ 200', () => {
  it('CT 01 - does not apply a discount when the total is below 200', () => {
    const cart = [
      { name: 'Rice', price: 22.0 },
      { name: 'Beans', price: 3.5 },
      { name: 'Pasta', price: 7 },
    ];

    assert.strictEqual(calculateTotalWithDiscount(cart), 32.5);
  });

  it('CT 02 - does not apply a discount when the total is exactly 200', () => {
    const cart = [{ name: 'TV box', price: 200 }];

    assert.strictEqual(calculateTotalWithDiscount(cart), 200);
  });

  it('CT 03 - applies a 10% discount when the total is above 200', () => {
    const cart = [
      { name: 'Beef', price: 120 },
      { name: 'Coffee', price: 80 },
      { name: 'Olive oil', price: 50 },
    ];

    
    assert.strictEqual(calculateTotalWithDiscount(cart), 225);
  });

  it('CT 04 - applies a 10% discount on a bigger purchase', () => {
    const cart = [
      { name: 'Meat', price: 300 },
      { name: 'Cheese', price: 100 },
    ];

 
    assert.strictEqual(calculateTotalWithDiscount(cart), 360);
  });
});
