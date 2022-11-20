import React from "react";
import styled from "styled-components";
const NotFound = () => {
  return (
    <Error>
      <h1>404 Error</h1>
    </Error>
  );
};
const Error = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 10em;
  }
`;
export default NotFound;
