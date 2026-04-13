// import { useContext, useReducer } from "react";
// import { Button } from "react-bootstrap";
// import { UserContext } from "./index";

// ToDO imports
import React, { useReducer } from "react";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from "uuid";

// const initialState = { count: 0 };
const todosInitialState = {
  todos: [],
};

export const TodosContext = React.createContext();

function App(props) {
  // const value = useContext(UserContext);
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(todosReducer, todosInitialState);
  return (
    <div>
      {/* Example 1 - Props Drilling */}
      {/* {props.username} */}
      {/* Example 2 - Context Object */}
      {/* <UserContext.Consumer>
        {(value) => <div>Received, {value}</div>}
      </UserContext.Consumer> */}
      {/* Example 3 - useContext Hook */}
      {/* Received, {value} */}
      {/* Count: {state.count}
      <br />
      <Button onClick={() => dispatch({ type: "increment" })}>Increment</Button>
      <Button
        variant="secondary"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </Button>
      <Button variant="success" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </Button> */}

      {/* ToDo  */}
      <TodosContext.Provider value={{ state, dispatch }}>
        <ToDoList />
      </TodosContext.Provider>
    </div>
  );
}

export default App;

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     case "reset":
//       return initialState;
//     default:
//       return initialState;
//   }
// }

function todosReducer(state, action) {
  switch (action.type) {
    case "get":
      return { ...state, todos: action.payload };
    case "add":
      const addedToDos = [...state.todos, action.payload];
      return { ...state, todos: addedToDos };
    case "delete":
      const filteredTodoState = state.todos.filter(
        (todo) => todo.id !== action.payload.id,
      );
      return { ...state, todos: filteredTodoState };
    case "edit":
      const updatedToDo = { ...action.payload };
      const updatedToDoIndex = state.todos.findIndex(
        (t) => t.id === action.payload.id,
      );
      const updatedToDos = [
        ...state.todos.slice(0, updatedToDoIndex),
        updatedToDo,
        ...state.todos.slice(updatedToDoIndex + 1),
      ];
      return { ...state, todos: updatedToDos };
    default:
      return todosInitialState;
  }
}

/*
==================================================
ToDo App Summary
==================================================

/*
Purpose:
Main App component that manages global To-Do state using useReducer and provides it via Context API.

State Structure:
- state.todos: array of todo objects (each with id and text)

Context:
- TodosContext provides global access to:
  - state (todos list)
  - dispatch (actions to modify todos)

Core Functionality:
- Uses useReducer with todosReducer to manage all todo state changes
- Wraps ToDoList component in Context Provider

Reducer Actions:
1. "get":
   - Replaces state.todos with fetched todos from API

2. "add":
   - Adds a new todo to the existing array

3. "delete":
   - Removes a todo by filtering out matching id

4. "edit":
   - Finds todo by id and replaces it with updated version
   - Uses slice-based immutable update

Implementation Details:
- Context API avoids prop drilling
- useReducer centralizes state logic
- uuid import is present but not used in current logic
- ToDoList consumes state and dispatch from context

Output:
Provides global state management for a CRUD To-Do application with centralized reducer logic and shared context access
*/
