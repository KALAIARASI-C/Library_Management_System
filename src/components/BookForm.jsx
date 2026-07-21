import { useState } from "react";

function BookForm({ onAddBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: Date.now(),
      title,
      author,
      category,
    };

    onAddBook(newBook);

    setTitle("");
    setAuthor("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;