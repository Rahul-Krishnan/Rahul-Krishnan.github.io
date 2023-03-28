import React from "react";
import {Header} from './components/Header';
import {Resume} from "./components/Resume";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Resume />
    </>
  );
};
