import { Component } from "react";
import GitHub from "./GitHub";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import GitHubUser from "./GitHubUser";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
export default App;

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/github">GitHub</Nav.Link>
                <Nav.Link href="/favourites">Favourites</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Routes>
            <Route path="/github/user/:login/:id" element={<GitHubUser />} />
            <Route path="/github" element={<GitHub />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

class Home extends Component {
  render() {
    return <div>Home</div>;
  }
}

class Favourites extends Component {
  render() {
    return <div>Favourite Accounts</div>;
  }
}

class NotFound extends Component {
  render() {
    return <div>Not Found</div>;
  }
}

// Purpose
// Defines the main application structure and routing in a React app using React Router and React Bootstrap.

// Core Functionality

// App renders the Header component.

// Header contains the navigation bar and route configuration.

// Navigation
// A React Bootstrap Navbar provides links to:

// Home

// GitHub

// Favourites

// Routing
// Using BrowserRouter, Routes, and Route to display different pages:

// / → Home

// /github → GitHub

// /github/user/:login/:id → GitHubUser (dynamic route)

// /favourites → Favourites

// /* → NotFound

// Output
// Displays a navigation bar and loads the appropriate page component based on the URL route.
