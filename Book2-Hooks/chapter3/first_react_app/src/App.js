import Products from "./Products";
import { Button } from "react-bootstrap";
import Rating from "./Ratings";

// function formatName(user) {
//   return user.firstName + " " + user.lastName;
// }

function App() {
  const isValid = true;
  return (
    <div>
      <Products />
      <Button variant="primary" disabled={!isValid}>
        Default
      </Button>
      <Rating rating="1" />
      <Rating rating="2" />
      <Rating rating="3" />
      <Rating rating="4" />
      <Rating rating="5" />
    </div>
  );
}

export default App;

/*
Purpose:
Main React component that renders the application interface.

Core Functionality:
- Imports and displays the Products component.
- Uses a React-Bootstrap Button that is disabled based on a boolean value.
- Renders multiple Rating components with different initial rating values.

Output:
Displays a list of products, a disabled button, and several star rating components.
*/
