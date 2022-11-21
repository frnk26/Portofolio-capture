import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
// import components
import Nav from "./components/Nav";
// import page
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";
import OurWork from "./pages/OurWork";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<About />}></Route>
        {/* nested route index for parent page (OurWork Page)  */}
        <Route path="/work">
          <Route index element={<OurWork />} />
          <Route path=":id" element={<MovieDetail />} />
        </Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
