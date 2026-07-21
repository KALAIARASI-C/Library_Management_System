import BookForm from "../components/BookForm";

function AddBook({ onAddBook }) {
  return (
    <div>
      <h1>Add New Book</h1>
      <BookForm onAddBook={onAddBook} />
    </div>
  );
}

export default AddBook;