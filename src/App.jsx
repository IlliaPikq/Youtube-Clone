import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ChannelDetail,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetail,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Feed />}></Route>
        <Route path={"/video/:id"} element={<VideoDetail />}></Route>
        <Route path={"/channel/:id"} element={<ChannelDetail />}></Route>
        <Route path={"/search/:searchTerm"} element={<SearchFeed />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
