import { useReducer } from "react";

const myReducer = (state, action) => {
  switch (action.type) {
    case 'increment': 
      return {count: state.count + 1};
    case 'decrement': 
      return {count: state.count - 1};
    default: 
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(myReducer, {count: 0});

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  )
}

// reps go here
const myReducer1 = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      return state;
  }
}

const Counter1 = () => {
  const [state, dispatch] = useReducer(myReducer, {count: 0});

  return (
    <div>
      <p>Count {state.count}</p>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </div>
  )
}