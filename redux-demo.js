const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return { counter: state.counter + 5 };
  }
  if (action.type === "DECREMENT") {
    return { counter: state.counter - 1 };
  }
  return { counter: state.counter + 1 };
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "DECREMENT" });