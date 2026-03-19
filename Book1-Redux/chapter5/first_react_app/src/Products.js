import { Component } from "react";
import Product from "./Product";

class Products extends Component {
  products;
  constructor(props) {
    super(props);
    this.products = this.getProducts();
  }
  getProducts() {
    return [
      // {
      //   imageUrl: "http://loremflickr.com/150/150?random=1",
      //   productName: "Product 1",
      //   releasedDate: "May 31, 2016",
      //   description:
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
      //   rating: 4,
      //   numOfReviews: 2,
      // },
      // {
      //   imageUrl: "http://loremflickr.com/150/150?random=2",
      //   productName: "Product 2",
      //   releasedDate: "October 31, 2016",
      //   description:
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
      //   rating: 2,
      //   numOfReviews: 12,
      // },
      {
        imageUrl: "http://loremflickr.com/150/150?random=3",
        productName: "Product 3",
        releasedDate: "July 30, 2016",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
        rating: 5,
        numOfReviews: 2,
      },
    ];
  }
  render() {
    const listProducts = this.products.map((product) => (
      <Product key={product.productName} data={product} />
    ));
    return (
      <div>
        {/* Inline id with && Operator (Two if statements) */}
        {/* {listProducts.length > 0 && <ul>{listProducts}</ul>}
        {listProducts.length === 0 && <ul>No Products to display</ul>} */}

        {/* Inline if with ternary operator (If-Else statement) */}
        {listProducts.length > 0 ? (
          <ul>{listProducts}</ul>
        ) : (
          <ul>No products to display</ul>
        )}
      </div>
    );
  }
}

export default Products;

// Purpose
// A product list component in React that stores product data and renders multiple Product components.

// Core Functionality

// Defines a class component Products.

// getProducts() returns an array of product objects.

// The constructor loads these products into this.products.

// Rendering Logic

// Uses .map() to convert each product into a Product component.

// Passes each product as a prop: data={product}.

// Conditional Rendering
// Uses a ternary operator to display:

// <ul>{listProducts}</ul> if products exist.

// "No products to display" if the list is empty.

// Output
// Renders a list of Product components, each showing product information (image, name, description, rating, etc.).
