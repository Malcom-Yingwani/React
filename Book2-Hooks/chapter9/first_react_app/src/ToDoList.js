import React, { useContext, useState, useEffect } from "react";
import { TodosContext } from "./App";
import { Table, Form, Button } from "react-bootstrap";
import useAPI from "./useAPI";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function ToDoList() {
  const { state, dispatch } = useContext(TodosContext);
  const [todoText, setTodoText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editTodo, setEditTodo] = useState(null);
  const buttonTitle = editMode ? "Edit" : "Add";

  const endpoint = "http://localhost:3000/todos/";
  const savedTodos = useAPI(endpoint);

  useEffect(() => {
    dispatch({ type: "get", payload: savedTodos });
  }, [savedTodos]); // dispatch whoever savedTodos changes

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (editMode) {
      await axios.patch(endpoint + editTodo.id, { text: todoText });
      dispatch({ type: "edit", payload: { ...editTodo, text: todoText } });
      console.log("edit Todo:", editTodo);
      setEditMode(false);
      setEditTodo(null);
    } else {
      const newToDo = { text: todoText };
      const response = await axios.post(endpoint, newToDo);
      console.log("HandleSubmit Response", response);
      dispatch({ type: "add", payload: response.data });
    }
    setTodoText("");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter To Do"
            onChange={(event) => setTodoText(event.target.value)}
            value={todoText}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {buttonTitle}
        </Button>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>To Do</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {state.todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.text}</td>
              <td
                onClick={() => {
                  setTodoText(todo.text);
                  setEditMode(true);
                  setEditTodo(todo);
                }}
              >
                <Button variant="secondary">Edit</Button>
              </td>
              <td
                onClick={async () => {
                  await axios.delete(endpoint + todo.id);
                  dispatch({ type: "delete", payload: todo });
                }}
              >
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default ToDoList;

/*
ToDoList Component Summary:

- Uses useContext to access global state (todos) and dispatch actions.
- Local state:
  - todoText: input value
  - editMode: toggles between add/edit
  - editTodo: stores the todo being edited

Functionality:
- Add: dispatch({ type: "add", payload: todoText })
- Edit:
  - Clicking "Edit" loads todo into input and enables editMode
  - On submit, dispatches updated todo with "edit" action
- Delete: dispatch({ type: "delete", payload: todo })

UI:
- Form with controlled input and dynamic button ("Add" / "Edit")
- Table listing todos with Edit and Delete actions

Flow:
User input -> handleSubmit -> dispatch action
-> reducer updates state -> component re-renders with new todos
*/
