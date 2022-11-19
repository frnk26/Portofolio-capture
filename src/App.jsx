import React, { useState } from "react";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import About from "./pages/About";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <About />
    </div>
  );
}

export default App;
