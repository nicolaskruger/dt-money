import styled from "styled-components";
import { FC } from "react";
import React from "react";
const Title = styled.h1`
  font-size: 64px;
  color: #8257e6;
`;
export const App: FC = () => {
  return (
    <div className="App" >
      <Title>Hello Word</Title>
    </div>
  );
}

