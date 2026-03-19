import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Rating from "./Ratings";

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.data.imageUrl} />
          <Card.Body>
            <Card.Title>{this.props.data.productName}</Card.Title>
            {this.props.data.releasedDate}
            <Rating
              rating={this.props.data.rating}
              numOfReviews={this.props.data.numOfReviews}
            />
            <p>Number of reviews: {this.props.data.numOfReviews}</p>
            <Card.Text>{this.props.data.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Product;

// **Summary of the Code**

// This code defines a **React class component called `Product`** that displays product information using a **React Bootstrap `Card` component**.

// ### Key Points

// * The component **imports**:

//   * `React` and `Component` from React.
//   * `Card` from **React Bootstrap** for UI layout.
//   * A custom `Rating` component for displaying product ratings.

// * The **`Product` component**:

//   * Extends `React.Component`.
//   * Receives product data through **`props`**, specifically `this.props.data`.

// * Inside the **`render()` method**, it returns a **Bootstrap card** that displays:

//   * **Product image** (`imageUrl`)
//   * **Product name** (`productName`)
//   * **Release date** (`releasedDate`)
//   * **Rating component** with:

//     * `rating`
//     * `numOfReviews`
//   * **Product description** (`description`)

// * The product information is dynamically populated from the **`data` object passed via props**.

// * There is a **commented-out line** that previously displayed the number of reviews directly but is now handled by the `Rating` component.

// ### Overall Purpose

// The component acts as a **reusable UI element for displaying a product card**, showing the product’s image, name, release date, rating, number of reviews, and description.

// If you'd like, I can also:

// * Create a **shorter summary (1–2 lines)** for documentation, or
// * Convert it into **code comments you can place directly inside the file.**
