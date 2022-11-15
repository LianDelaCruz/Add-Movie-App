import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound/notFound";
import Layout from "./pages/layout/layout";
import Profile from "./pages/profile/profile";
import Movies from "./pages/moviePage/movies";
import AddMovie from "./pages/moviePage/addmovies";
import MovieItem from "./pages/moviePage/movieItem";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/profile" element={<Profile />}/>
          <Route path="/addmovies" element={<AddMovie />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieitem" element={<MovieItem/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
