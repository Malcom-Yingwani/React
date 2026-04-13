import React, { Component } from "react";
import AddProduct from "./AddProduct";
import { Table } from "reactstrap";

class Cart extends Component {
  render() {
    return (
      <div className="container">
        <AddProduct addProduct={this.props.onAddProduct} />
        <Table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {this.props.productCart.map((productData) => (
              <tr key={productData.productName}>
                <td>{productData.productName}</td>
                <td>{productData.productPrice}</td>
                <td onClick={() => this.props.onDeleteProduct(productData)}>
                  Remove
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <span>Total Amount: {this.props.totalCost}</span>
      </div>
    );
  }
}
export default Cart;

/*
Purpose:
Displays and manages the user interface of a shopping cart.

Props:
- productCart: array of products (each with name and price)
- totalCost: total cost of all products in the cart
- onAddProduct: function to add a product
- onDeleteProduct: function to remove a product

Core Functionality:
- Renders the AddProduct component to allow adding new items
- Displays all products in a table format
- Each product row shows:
  - product name
  - product price
  - "Remove" action
- Clicking "Remove" triggers onDeleteProduct with the selected product
- Displays the total cost of all items

Implementation Details:
- Uses map() to dynamically render table rows from productCart
- Uses productName as a unique key for each row
- Passes addProduct function down to AddProduct component

Output:
Renders a complete cart UI including product list, add functionality, and total cost display
*/
