import { FC } from "react";
import React from "react";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { DashBoard } from "./components/Dashboard";
export const App: FC = () => {
  return (
    <>
      <Header />
      <DashBoard />
      <GlobalStyle />
    </>
  );
}

