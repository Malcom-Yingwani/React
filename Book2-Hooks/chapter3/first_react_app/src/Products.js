function Products() {
  const products = ["Learning React", "Pro React", "Beginning React"];
  const listProducts = products.map((product) => (
    <li key={product.toString()}>{product}</li>
  ));
  return (
    <div>
      <ul>{listProducts}</ul>
    </div>
  );
}

export default Products;

/*
Purpose:
Displays a list of product names using a React class component.

Core Functionality:
- Defines an array of product titles.
- Uses map() to transform each product into a <li> element.
- Assigns a unique key to each list item for React rendering.

Output:
Renders an unordered list of the products inside a <div>.
*/
