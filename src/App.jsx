import React from "react";
import Heading from "./Heading/Heading";

import Container from "./Container/Container";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Container>
        <Heading></Heading>
        <Outlet></Outlet>
      </Container>
    </>
  );
}

export default App;
