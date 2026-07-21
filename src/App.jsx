import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import BookDetails from "./pages/BookDetails";
import About from "./pages/About";

import booksData from "./data/books";
import Members from "./pages/Members";
import IssueBook from "./pages/IssueBook";
import ReturnBook from "./pages/ReturnBook";

function App() {

  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : booksData;
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };
  const deleteBook = (id) => {
  const updatedBooks = books.filter((book) => book.id !== id);
  setBooks(updatedBooks);
};

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <BrowserRouter>

      <Navbar />

      <div style={{ display: "flex" }}>

        <Sidebar />

        <div style={{ flex: 1, padding: "20px" }}>

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />
            <Route
  path="/books"
  element={
    <Books
      books={filteredBooks}
      search={search}
      setSearch={setSearch}
      deleteBook={deleteBook}
    />
  }
/>
<Route path="/members" element={<Members />} />
<Route path="/issue-book" element={<IssueBook />} />

<Route path="/return-book" element={<ReturnBook />} />


            <Route
              path="/add-book"
              element={<AddBook onAddBook={addBook} />}
            />

            <Route
              path="/edit-book"
              element={<EditBook />}
            />

            <Route
              path="/book-details"
              element={<BookDetails />}
            />

            <Route
              path="/about"
              element={<About />}
            />

          </Routes>

        </div>

      </div>

      <Footer />

    </BrowserRouter>
  );
}

export default App;