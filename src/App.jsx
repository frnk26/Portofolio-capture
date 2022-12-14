import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
// import components
import Nav from "./components/Nav";
// import page
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";
import OurWork from "./pages/OurWork";
// import animation
import { AnimatePresence, motion as m } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<About />}></Route>
          {/* nested route index for parent page (OurWork Page)  */}
          <Route path="/work">
            <Route index element={<OurWork />} />
            <Route path=":id" element={<MovieDetail />} />
          </Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
