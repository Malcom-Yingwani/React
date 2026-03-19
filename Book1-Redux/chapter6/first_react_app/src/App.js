import { Component } from "react";
import Products from "./Products";
import JumboTronComponent from "./JumboTronComponent";
import UserForm from "./UserForm";

class App extends Component {
  render() {
    return (
      <div>
        {/* Hardcoded content */}
        {/* <JumboTronComponent /> */}

        {/* Inserting content from outside */}
        {/* <JumboTronComponent body="inserting content from outside" /> */}

        {/* Dynamic Insertion of content from outside */}
        <JumboTronComponent>
          This a long sentence, and I want to insert content into the jumbotron
          componenet from the outside.
        </JumboTronComponent>
        <UserForm />
        <Products />
      </div>
    );
  }
}

export default App;
