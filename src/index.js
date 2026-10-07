const { calculateTotal, calculateTotalWithDiscount } = require('./cart');

const cart = [
  { name: 'Rice', price: 22.0 },
  { name: 'Beans', price: 3.5 },
  { name: 'Pasta', price: 7 },
];

console.log('Total:', calculateTotal(cart));

const bigCart = [
  { name: 'Beef', price: 120 },
  { name: 'Coffee', price: 80 },
  { name: 'Olive oil', price: 50 },
];

console.log('Subtotal:', calculateTotal(bigCart), '| Total After discount:', calculateTotalWithDiscount(bigCart));
