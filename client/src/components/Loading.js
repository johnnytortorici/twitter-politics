import React from "react";
import styled, { keyframes } from "styled-components";

import { ImSpinner } from "react-icons/im";

const Loading = () => {
  return (
    <Wrapper>
      <Spinner size={30} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  color: #1a91da;
`;

const loader = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(ImSpinner)`
  animation: ${loader} 2000ms infinite;
`;

export default Loading;
