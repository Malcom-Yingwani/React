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

Purpose:
- Implements a ToDo application using React.
- Uses useReducer for state management and Context API
  to share state across components.

State Structure:
- Managed by useReducer with initial state:
  {
    todos: [
      { id: 1, text: "finishing writing hooks chapter" },
      { id: 2, text: "play with kids" },
      { id: 3, text: "read bible" }
    ]
  }

Core Functionality (Reducer Actions):

1. ADD:
   - Creates a new todo with a unique ID (uuidv4).
   - Adds it to the existing todos array.

2. DELETE:
   - Removes a todo by filtering out the matching ID.

3. EDIT:
   - Finds the todo by ID.
   - Replaces it with an updated version while keeping
     the rest of the list unchanged.

Context API:
- TodosContext is created to provide global access to:
  - state (todos)
  - dispatch (actions)
- Wrapped around ToDoList component to avoid prop drilling.

Component Flow:
- App initializes reducer and provides context.
- ToDoList consumes context to display and update todos.

Data Flow:
User Action -> dispatch(action) -> reducer updates state
-> new state returned -> UI re-renders

Key Concepts:
- useReducer for structured state logic
- Immutable updates using spread and slice
- Context API for global state sharing
- Unique IDs using uuid

Output:
- Displays list of todos
- Supports adding, deleting, and editing tasks
- UI updates automatically on state change
*/
