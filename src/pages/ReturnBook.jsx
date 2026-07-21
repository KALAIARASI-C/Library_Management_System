import { useState } from "react";

function ReturnBook() {
  const [bookName, setBookName] = useState("");
  const [memberName, setMemberName] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Book Returned Successfully!");

    setBookName("");
    setMemberName("");
    setReturnDate("");
  };

  return (
    <div className="return-book">
      <h1>📖 Return Book</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Name"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Member Name"
          value={memberName}
          onChange={(e) => setMemberName(e.target.value)}
          required
        />

        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          required
        />

        <button type="submit">Return Book</button>
      </form>
    </div>
  );
}

export default ReturnBook;