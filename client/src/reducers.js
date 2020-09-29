const tweetsReducer = (state = { status: "idle", tweets: [] }, action) => {
  switch (action.type) {
    case "REQUEST_TRUMP_TWEETS":
      return { ...state, status: "loading" };
    case "RECEIVE_TRUMP_TWEETS":
      return { ...state, status: "idle", tweets: action.payload };
    case "REQUEST_HILLARY_TWEETS":
      return { ...state, status: "loading" };
    case "RECEIVE_HILLARY_TWEETS":
      return { ...state, status: "idle", tweets: action.payload };
    default:
      return state;
  }
};

export default tweetsReducer;
