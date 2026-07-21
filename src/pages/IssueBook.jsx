import { useState } from "react";

function IssueBook() {
  const [bookName, setBookName] = useState("");
  const [memberName, setMemberName] = useState("");
  const [issueDate, setIssueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Book Issued Successfully!");

    setBookName("");
    setMemberName("");
    setIssueDate("");
  };

  return (
    <div className="issue-book">
      <h1>📚 Issue Book</h1>

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
          value={issueDate}
          onChange={(e) => setIssueDate(e.target.value)}
          required
        />

        <button type="submit">Issue Book</button>
      </form>
    </div>
  );
}

export default IssueBook;