import Products from "./Products";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function App() {
  // const user = {
  //   firstName: "Greg",
  //   lastName: "Lim",
  // };

  return (
    <div>
      {/* <h1>Hello, {this.formatName(user)}</h1> */}
      <Products />
    </div>
  );
}

export default App;

/*
Purpose:
Main React component that renders the Products component.

Core Functionality:
- Defines a helper function to format a user's full name.
- The greeting example using this function is commented out.
- Imports and displays the Products component.

Output:
Renders the Products list inside the main App component.
*/
