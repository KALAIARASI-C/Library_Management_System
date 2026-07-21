import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/add-book">Add Book</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>
  <Link to="/members">Members</Link></li>
<li>
  <Link to="/issue-book">Issue Book</Link></li>

<li>
  <Link to="/return-book">Return Book</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;