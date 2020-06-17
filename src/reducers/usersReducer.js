export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};

// maintains all of the users we fetch in this application.  Once collected, we send it to userHeader component
