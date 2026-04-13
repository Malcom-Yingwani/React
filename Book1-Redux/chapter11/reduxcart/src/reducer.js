function cartReducer(state, action) {
  if (state === undefined) {
    return {
      totalCost: 0,
      productCart: [],
    };
  }

  switch (action.type) {
    case "addProduct":
      return {
        ...state,
        totalCost: state.totalCost + parseInt(action.productData.productPrice),
        productCart: state.productCart.concat({
          productName: action.productData.productName,
          productPrice: action.productData.productPrice,
        }),
      };
    case "deleteProduct":
      const updatedArray = state.productCart.filter(
        (product) => product.productName !== action.productData.productName,
      );
      return {
        ...state,
        totalCost: state.totalCost - parseInt(action.productData.productPrice),
        productCart: updatedArray,
      };
    default:
      return state;
  }
}

export default cartReducer;

/*
Purpose:
Manages the state of a shopping cart, including total cost and list of products.

State Structure:
- totalCost: مجموع cost of all products in the cart
- productCart: array of product objects (name and price)

Core Functionality:
- Initializes state if undefined with empty cart and zero cost
- Handles two actions:
  1. "addProduct":
     - Adds a product to productCart
     - Increases totalCost by the product's price
  2. "deleteProduct":
     - Removes products matching the given product name
     - Decreases totalCost by the product's price

Implementation Details:
- Uses immutable updates (spread operator and concat/filter)
- Converts productPrice to integer using parseInt before calculations

Output:
Returns a new updated state object based on the action type
*/
