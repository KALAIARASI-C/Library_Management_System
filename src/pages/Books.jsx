import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

function Books({ books, search, setSearch, deleteBook }) {
  return (
    <div>
      <h1>Books</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {books.length === 0 ? (
        <h2>No Books Found</h2>
      ) : (
        books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            deleteBook={deleteBook}
          />
        ))
      )}
    </div>
  );
}

export default Books;