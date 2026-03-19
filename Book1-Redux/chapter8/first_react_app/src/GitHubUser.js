import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function GitHubUser() {
  const { login, id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>User Login: {login}</h1>
      <h2>User Id: {id}</h2>
      <Button variant="primary" onClick={() => navigate("/github")}>
        Go to GitHub Users
      </Button>
    </div>
  );
}

export default GitHubUser;

// Purpose
// Displays details of a selected GitHub user in a React app using routing from React Router.

// Core Functionality

// Uses useParams() to retrieve dynamic URL parameters (login and id).

// Uses useNavigate() to programmatically navigate between pages.

// UI Components
// Uses a Button from React Bootstrap.

// Output
// Displays the selected user's login and ID and provides a button to navigate back to the GitHub users page.
