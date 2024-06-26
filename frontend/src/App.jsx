import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, CreateBook, DeleteBook, EditBook, ShowBook } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
