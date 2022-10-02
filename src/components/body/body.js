import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/home";
import Tracker from "../tracker/tracker";
function Body() {
  return (
    <main className="App-body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<Tracker />} />
      </Routes>
    </main>
  );
}

export default Body;
