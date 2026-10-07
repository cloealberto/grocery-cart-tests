Feature: Exercise 2 - Cart total with discount: applies 10% off when the total is greater than R$ 200

  Scenario: does not apply a discount when the total is below 200
    Given a cart with the following items:
      | name  | price |
      | Rice  | 22.0  |
      | Beans | 3.5   |
      | Pasta | 7     |
    When I calculate the total with discount
    Then the total should be 32.5

  Scenario: does not apply a discount when the total is exactly 200
    Given a cart with the following items:
      | name   | price |
      | TV box | 200   |
    When I calculate the total with discount
    Then the total should be 200

  Scenario: applies a 10% discount when the total is above 200
    Given a cart with the following items:
      | name      | price |
      | Beef      | 120   |
      | Coffee    | 80    |
      | Olive oil | 50    |
    When I calculate the total with discount
    Then the total should be 225

  Scenario: applies a 10% discount on a bigger purchase
    Given a cart with the following items:
      | name   | price |
      | Meat   | 300   |
      | Cheese | 100   |
    When I calculate the total with discount
    Then the total should be 360