export const requestTrumpTweets = () => {
  return {
    type: "REQUEST_TRUMP_TWEETS",
  };
};

export const receiveTrumpTweets = (tweets) => {
  return {
    type: "RECEIVE_TRUMP_TWEETS",
    payload: tweets,
  };
};

export const requestHillaryTweets = () => {
  return {
    type: "REQUEST_HILLARY_TWEETS",
  };
};

export const receiveHillaryTweets = (tweets) => {
  return {
    type: "RECEIVE_HILLARY_TWEETS",
    payload: tweets,
  };
};
