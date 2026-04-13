import React, { Component } from "react";
class AddProduct extends Component {
  state = {
    productName: "",
    productPrice: 0,
  };
  productNameChangedHandler = (event) => {
    this.setState({ productName: event.target.value });
  };
  productPriceChangedHandler = (event) => {
    this.setState({ productPrice: event.target.value });
  };
  render() {
    return (
      <div className="container">
        <input
          type="text"
          placeholder="Product Name"
          onChange={this.productNameChangedHandler}
          value={this.state.productName}
        />
        <input
          type="number"
          placeholder="Product Price"
          onChange={this.productPriceChangedHandler}
          value={this.state.productPrice}
        />
        <button
          className="buttons"
          onClick={() => {
            this.props.addProduct(
              this.state.productName,
              this.state.productPrice,
            );
          }}
        >
          Add Product
        </button>
      </div>
    );
  }
}
export default AddProduct;

/*
Purpose:
Provides a user interface for adding new products to the shopping cart.

State Structure:
- productName: stores the name of the product being entered
- productPrice: stores the price of the product being entered

Core Functionality:
- Handles user input for product name and price
- Updates component state on input change using event handlers
- On button click:
  - Calls addProduct function passed via props
  - Sends productName and productPrice as arguments

Implementation Details:
- Uses controlled inputs (value tied to state)
- Updates state using setState on every input change
- productPrice is captured as a string and passed as-is (conversion handled elsewhere)

Output:
Renders input fields and a button that allows users to add products to the cart
*/
