import React, { useEffect } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { requestTrumpTweets, receiveTrumpTweets } from "../actions";

import Tweet from "./Tweet";
import Loading from "./Loading";

const SERVER_URI = process.env.REACT_APP_SERVER_URI;

const Trump = () => {
  const status = useSelector((state) => state.status);
  const tweets = useSelector((state) => state.tweets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestTrumpTweets());

    fetch(`${SERVER_URI}/trump`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => dispatch(receiveTrumpTweets(json.data)));
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <Header>
        {/* <Avatar src="/images/trump-avatar.jpg" alt="Trump Avatar" /> */}
        <h2>Donald J. Trump</h2>
        <p>@realDonaldTrump</p>
        <Bio>45th President of the United States of America</Bio>
      </Header>
      <h3>Trump's Latest Tweets</h3>
      {status !== "idle" ? (
        <Loading />
      ) : (
        <ul>
          {tweets.map((tweet, index) => (
            <Tweet
              key={`trump-${index}`}
              avatar="/images/trump-avatar.jpg"
              name="Donald J. Trump"
              handle="@realDonaldTrump"
              text={tweet.text}
            />
          ))}
        </ul>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60%;
  padding: 30px;
  margin: 30px 0;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  box-shadow: 0 0 5px #d3d3d3;
  background-color: #fff;

  &:hover {
    box-shadow: 0 0 10px #d3d3d3;
  }

  @media (max-width: 1000px) {
    width: 80%;
  }
`;

const Header = styled.div`
  text-align: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #d3d3d3;
`;

const Bio = styled.p`
  padding: 20px 0 10px;
`;

// const Avatar = styled.img`
//   width: 75px;
//   border-radius: 50%;
// `;

export default Trump;
