import { Component } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { Table, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showDeleteDialog: false,
      selectedUser: {},
    };
    // Bind handlers once in the constructor instead of on every render
    this.delete = this.delete.bind(this);
    this.closeDeleteDialog = this.closeDeleteDialog.bind(this);
  }

  openDeleteDialog(user) {
    this.setState({
      showDeleteDialog: true,
      selectedUser: user,
    });
  }

  closeDeleteDialog() {
    this.setState({
      showDeleteDialog: false,
      selectedUser: {},
    });
  }

  delete() {
    const db = getDatabase();
    remove(ref(db, "/" + this.state.selectedUser.id))
      .then(() => {
        console.log("SUCCESS");
        this.closeDeleteDialog();
      })
      .catch((error) => {
        alert("Could not delete the user.");
        console.log("ERROR", error);
      });
  }

  componentDidMount() {
    const db = getDatabase();
    const dbRef = ref(db, "/");

    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();

      // Guard against null (empty database)
      if (!data) {
        this.setState({ users: [] });
        return;
      }

      const usersArray = Object.entries(data).map(([id, value]) => ({
        ...value,
        id: id,
      }));

      this.setState({ users: usersArray });
    });
  }

  render() {
    const listUsers = this.state.users.map((user) => (
      <tr key={user.id}>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
          <Link to={`/edit/${user.id}`}>Edit</Link>
        </td>

        <td>
          <Button onClick={this.openDeleteDialog.bind(this, user)}>
            Remove
          </Button>
        </td>
      </tr>
    ));

    return (
      <div>
        <Link to="/add">
          <Button variant="primary">Add</Button>
        </Link>
        <br />
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{listUsers}</tbody>
        </Table>
        <Modal
          show={this.state.showDeleteDialog}
          onHide={this.closeDeleteDialog}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Are you sure you want to delete{" "}
              <strong>{this.state.selectedUser.username}</strong>?
            </p>
            <hr />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.delete}>
              Delete
            </Button>
            <Button onClick={this.closeDeleteDialog}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default User;

// Purpose
// Manages and displays a list of users from a Firebase Realtime Database in a React application.

// Core Functionality

// Retrieves users from the database using onValue() when the component mounts.

// Stores users in component state.

// Converts database data into an array for rendering.

// User Management

// Add → navigates to /add.

// Edit → navigates to /edit/:id using React Router.

// Delete → opens a confirmation modal before removing a user from the database.

// UI Components
// Uses React Bootstrap components:

// Table for displaying users

// Button for actions

// Modal for delete confirmation

// Output
// Displays a table of users (username and email) with options to add, edit, or delete users, including a confirmation dialog before deletion.
