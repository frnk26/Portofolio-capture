import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
// import components
import Nav from "./components/Nav";
// import page
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/work" element={<OurWork />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
