import React, { useState } from "react";
import axios from "axios"; // npm install axios
import { BounceLoader } from "react-spinners";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Form, Button } from "react-bootstrap";

function GitHub() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    getData();
  };

  const getData = async () => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchTerm}`,
    );
    setData(res.data.items);
    setIsLoading(false);
  };

  const listUsers = data.map((user) => (
    <Col key={user.id} xs={12} sm={6} md={4} lg={3}>
      <Card>
        <a href={user.html_url}>
          <Card.Img src={user.avatar_url} alt="Generic placeholder" />
        </a>
        <Card.Body>
          <h5>Login: {user.login}</h5>
          <p>Id: {user.id}</p>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <div>
      <Form inline onSubmit={handleSubmit}>
        <Form.Group controlId="formInlineName">
          <Form.Control
            type="text"
            value={searchTerm}
            placeholder="Enter Search Term"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </Form.Group>{" "}
        <Button type="submit">Search</Button>
      </Form>
      <h3>GitHub Users Results</h3>
      {isLoading && <BounceLoader />}
      <Row>{listUsers}</Row>
    </div>
  );
}
export default GitHub;

// Purpose
// A search component built with React that retrieves and displays GitHub users using the GitHub API via Axios.

// Core Functionality

// Maintains state for:

// data → fetched GitHub users

// isLoading → loading indicator

// searchTerm → user input

// handleChange() updates the search term.

// handleSubmit() triggers the API request.

// Data Fetching
// getGitHubData() sends a request to the GitHub API and stores the returned users in state.

// Rendering

// Displays users as cards using React Bootstrap components (Card, Row, Col).

// Shows a loading spinner using React Spinners while data is being fetched.

// Output
// Renders a search form and displays matching GitHub users with their avatar, username, and ID.
