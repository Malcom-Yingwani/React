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
A React class component that displays a list of products.

Core Functionality:
- Creates an array of product names.
- Uses map() to convert each product into a <li> element with a unique key.

Output:
Renders an unordered list of product titles.
*/
