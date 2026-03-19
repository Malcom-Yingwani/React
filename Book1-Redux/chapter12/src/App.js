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
      <Users />
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
