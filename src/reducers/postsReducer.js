export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};

// RULES OF REDUCERS
// 1.) must return any value besides undefined.  if need dummy filler content, try return 123;
// 2.) Produces 'state' or data to be used inside of your app using only previous state and the action
// 3.) must not return reach 'out of itself' to decide what value to return (REDUCERS ARE PURE!!!)
// 4.) must not mutate its input 'state' argument -- adding or removing elements like in an array of colors for example. Objects
//     and arrays can be mutated, numbers and strings can't.
