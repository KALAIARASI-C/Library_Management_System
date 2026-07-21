function BookCard({ book, deleteBook }) {
  return (
    <div className="book-card">

      <h2>{book.title}</h2>

      <p>
        <strong>Author :</strong> {book.author}
      </p>

      <p>
        <strong>Category :</strong> {book.category}
      </p>

      <button
        onClick={() => deleteBook(book.id)}
      >
        Delete
      </button>

    </div>
  );
}

export default BookCard;