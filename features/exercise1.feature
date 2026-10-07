Feature: Cart total: sums the price of all items in the cart

  Scenario: sums the example from the statement
    Given a cart with the following items:
      | name  | price |
      | Rice  | 22.0  |
      | Beans | 3.5   |
      | Pasta | 7     |
    When I calculate the total
    Then the total should be 32.5

  Scenario: returns 0 for an empty cart
    Given an empty cart
    When I calculate the total
    Then the total should be 0

  Scenario: returns the price of a cart with one item
    Given a cart with the following items:
      | name | price |
      | Milk | 5     |
    When I calculate the total
    Then the total should be 5

  Scenario: sums items with the same price
    Given a cart with the following items:
      | name  | price |
      | Water | 2     |
      | Water | 2     |
      | Water | 2     |
    When I calculate the total
    Then the total should be 6