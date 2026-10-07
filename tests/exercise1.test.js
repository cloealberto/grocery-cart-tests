const assert = require('node:assert');
const { calculateTotal } = require('../src/cart');

describe('Exercise 1 - Cart total: sums the price of all items in the cart', () => {
  it('CT 01 - sums the example from the statement', () => {
    const cart = [
      { name: 'Rice', price: 22.0 },
      { name: 'Beans', price: 3.5 },
      { name: 'Pasta', price: 7 },
    ];

    assert.strictEqual(calculateTotal(cart), 32.5);
  });

  it('CT 02 - returns 0 for an empty cart', () => {
    assert.strictEqual(calculateTotal([]), 0);
  });

  it('CT 03 - returns the price of a cart with one item', () => {
    const cart = [{ name: 'Milk', price: 5 }];

    assert.strictEqual(calculateTotal(cart), 5);
  });

  it('CT 04 - sums items with the same price', () => {
    const cart = [
      { name: 'Water', price: 2 },
      { name: 'Water', price: 2 },
      { name: 'Water', price: 2 },
    ];

    assert.strictEqual(calculateTotal(cart), 6);
  });
});
