import React from "react";
import useFetch from "./useFetch";
const Users = () => {
  const users = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <ul>
      {users.map((el) => (
        <li key={el.id}>{el.name}</li>
      ))}
    </ul>
  );
};
export default Users;

/*
Purpose:
Displays a list of users fetched from an external API.

Core Functionality:
- Uses the custom useFetch hook to retrieve user data from an API
- Maps through the fetched users array and renders each user's name in a list

Implementation Details:
- Fetches data from "https://jsonplaceholder.typicode.com/users"
- Assumes each user object contains id and name properties
- Uses id as a unique key for each list item
- Reuses useFetch for cleaner and reusable data-fetching logic

Output:
Renders an unordered list (<ul>) of user names fetched from the API
*/
