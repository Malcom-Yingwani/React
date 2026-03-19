import { Component } from "react";
import GitHub from "./GitHub";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import GitHubUser from "./GitHubUser";
import { getApp } from "firebase/app";
import User from "./User";
import UserForm from "./UserForm";

class App extends Component {
  constructor(props) {
    super(props);
    console.log(getApp());
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/edit/:id" element={<UserForm />} />
              <Route path="/add" element={<UserForm />} />
              <Route exact path="/" element={<User />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

class NotFound extends Component {
  render() {
    return <div>Not Found</div>;
  }
}
