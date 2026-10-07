export function calculateTotal(cart) {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price;
  }

  return total;
}

export function calculateTotalWithDiscount(cart) {
  let total = calculateTotal(cart);

  if (total > 200) {
    total = total - total * 0.1;
  }

  return total;
}