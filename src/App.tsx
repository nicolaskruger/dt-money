import { FC } from "react";
import React from "react";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/header";
export const App: FC = () => {
  return (
    <>
      <Header />
      <GlobalStyle />
    </>
  );
}

