import React from "react";
import styled from "styled-components";

const Tweet = ({ avatar, name, handle, text }) => {
  return (
    <Wrapper>
      <Avatar src={avatar} alt={`${name} Avatar`} />
      <div>
        <p>
          <strong>{name}</strong> {handle}
        </p>
        <Text>{text}</Text>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  padding: 10px 0;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Text = styled.p`
  padding: 5px 0;
`;

export default Tweet;
