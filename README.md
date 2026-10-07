# Grocery Cart Tests

Node.js project with two grocery cart exercises, tested with [Mocha](https://mochajs.org):

1. **Cart total**: sums the prices of all items in the cart.
2. **Cart total with discount** (challenge): applies a 10% discount when the total is greater than R$ 200.

Example from the statement:

```js
[
  { name: 'Rice', price: 22.0 },
  { name: 'Beans', price: 3.5 },
  { name: 'Pasta', price: 7 },
]
// total: 32.5
```

## Project structure

```
grocery-cart-tests/
├── package.json
├── package-lock.json
├── README.md
├── src/
│   ├── cart.js           
│   └── index.js          
└── tests/
    ├── exercise1.test.js
    └── exercise2.test.js
```

## Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org) **v20.19 or higher** (or v22.12+). This is required by Mocha 12. The LTS version is recommended.
- (Optional) [Visual Studio Code](https://code.visualstudio.com)

Check what you have installed:

```bash
git --version
node -v
npm -v
```

## How to run the project

### 1. Clone the repository

```bash
git clone https://github.com/cloealberto/grocery-cart-tests.git
```

### 2. Go into the project folder

```bash
cd grocery-cart-tests
```

Optional: open it in VS Code with `code .`

### 3. Install the dependencies

```bash
npm install
```

This installs Mocha (the only dependency). You only need to do this once.

### 4. Run the example

```bash
npm start
```

Expected output:

```
Total: 32.5
Subtotal: 250 | Total After discount: 225
```

### 5. Run the tests

```bash
npm test
```

Expected output:

```
  Cart total: sums the price of all items in the cart
    ✔ sums the example from the statement
    ✔ returns 0 for an empty cart
    ✔ returns the price of a cart with one item
    ✔ sums items with the same price

  Exercise 2 - Cart total with discount: applies 10% off when the total is greater than R$ 200
    ✔ does not apply a discount when the total is below 200
    ✔ does not apply a discount when the total is exactly 200
    ✔ applies a 10% discount when the total is above 200
    ✔ applies a 10% discount on a bigger purchase

  8 passing
```

You can also run Mocha directly with `npx`:

```bash
npx mocha tests                       # all tests
npx mocha tests/exercise1.test.js     # only Exercise 1
npx mocha tests/exercise2.test.js     # only Exercise 2
```

## Test cases

| File | Function | Test cases |
| --- | --- | --- |
| `tests/exercise1.test.js` | `calculateTotal` | 4 |
| `tests/exercise2.test.js` | `calculateTotalWithDiscount` | 4 |

The discount rule is "greater than R$ 200", so a total of exactly R$ 200.00 does **not** get the discount.

## Troubleshooting

- **`mocha: command not found` or `'mocha' is not recognized`**: dependencies are not installed. Run `npm install` inside the project folder.
- **Error about the Node.js version (`engines`)**: update Node.js to v20.19+ or v22.12+ and run `npm install` again.
- **`Cannot find module` or `package.json not found`**: you are not inside the project folder. Run `cd grocery-cart-tests` first.