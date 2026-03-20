import GitHub from "./GitHub";
function App() {
  return (
    <div>
      {/* Hardcoded content */}
      {/* <JumboTronComponent /> */}

      {/* Inserting content from outside */}
      {/* <JumboTronComponent body="inserting content from outside" /> */}

      {/* Dynamic Insertion of content from outside */}
      {/* <JumboTronComponent>
        This a long sentence, and I want to insert content into the jumbotron
        componenet from the outside.
      </JumboTronComponent>
      <UserForm />
      <br></br>
      <Products /> */}
      <GitHub />
    </div>
  );
}

export default App;
