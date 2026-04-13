// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";
// class App extends React.Component {
//   state = { requested: "" };

//   render() {
//     return (
//       <div>
//         <Button
//           variant="link"
//           onClick={() =>
//             this.setState({
//               requested: "https://jsonplaceholder.typicode.com/posts",
//             })
//           }
//         >
//           Posts
//         </Button>
//         <Button
//           variant="link"
//           onClick={() =>
//             this.setState({
//               requested: "https://jsonplaceholder.typicode.com/todos",
//             })
//           }
//         >
//           Todos
//         </Button>
//         <br />
//         Requested: {this.state.requested}
//       </div>
//     );
//   }
// }
// export default App;

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import useFetch from "./useFetch";
import Users from "./Users";

const App = () => {
  const postsUrl = "https://jsonplaceholder.typicode.com/posts";
  const todosUrl = "https://jsonplaceholder.typicode.com/todos";
  const [requested, setRequested] = useState(postsUrl);
  // const [data, setData] = useState([]);
  const data = useFetch(requested);

  // useEffect(() => {
  //   fetch(requested)
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []); // second argument specifies the  useEffect function to only run once on render

  // useEffect(() => {
  //   fetch(requested)
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, [requested]); // runs everytime theres a change/update

  return (
    <div>
      <h1>Users</h1>
      <Users />
      <hr />
      <Button variant="link" onClick={() => setRequested(postsUrl)}>
        Posts
      </Button>
      <Button variant="link" onClick={() => setRequested(todosUrl)}>
        Todos
      </Button>
      <br />
      Requested: {requested}
      <ul>
        {data.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

/*
Purpose:
Main application component that fetches and displays data (posts or todos) from an API.

State Structure:
- requested: stores the current API URL being requested (posts or todos)

Core Functionality:
- Uses useState to manage which API endpoint is active
- Uses a custom hook (useFetch) to fetch data based on the requested URL
- Provides two buttons:
  1. "Posts" → sets requested to posts API
  2. "Todos" → sets requested to todos API
- Dynamically displays fetched data as a list

Implementation Details:
- useFetch handles the data fetching logic (replaces useEffect + fetch)
- Data is expected to be an array of objects with id and title
- map() is used to render list items for each fetched element
- Includes a Users component (likely separate functionality)

Output:
Renders buttons to switch API data, displays the current URL, and lists fetched items (posts or todos)
*/
