import React, { useEffect } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { requestHillaryTweets, receiveHillaryTweets } from "../actions";

import Tweet from "./Tweet";
import Loading from "./Loading";

const SERVER_URI = process.env.REACT_APP_SERVER_URI;

const Hillary = () => {
  const status = useSelector((state) => state.status);
  const tweets = useSelector((state) => state.tweets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestHillaryTweets());

    fetch(`${SERVER_URI}/hillary`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => dispatch(receiveHillaryTweets(json.data)));
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <Header>
        <h2>Hillary Clinton</h2>
        <p>@HillaryClinton</p>
        <Bio>
          2016 Democratic Nominee, SecState, Senator, hair icon. Mom, Wife,
          Grandma x3, lawyer, advocate, fan of walks in the woods & standing up
          for our democracy.
        </Bio>
      </Header>
      <h3>Hillary's Latest Tweets</h3>
      {status !== "idle" ? (
        <Loading />
      ) : (
        <ul>
          {tweets.map((tweet, index) => (
            <Tweet
              key={`hillary-${index}`}
              avatar="/images/hillary-avatar.jpg"
              name="Hillary Clinton"
              handle="@HillaryClinton"
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

export default Hillary;
