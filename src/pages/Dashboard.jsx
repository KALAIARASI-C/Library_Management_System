function Dashboard() {
  return (
    <div className="dashboard">

      <h1>📚 Library Dashboard</h1>

      <p className="welcome">
        Welcome to the Library Management System.
        Manage books quickly and efficiently.
      </p>

      <div className="dashboard-cards">

        <div className="card">
          <h2>📚 Total Books</h2>
          <h3>120</h3>
        </div>

        <div className="card">
          <h2>📖 Issued Books</h2>
          <h3>45</h3>
        </div>

        <div className="card">
          <h2>✅ Available Books</h2>
          <h3>75</h3>
        </div>

        <div className="card">
          <h2>👨‍🎓 Members</h2>
          <h3>5</h3>
        </div>

      </div>
      

      <div className="recent-books">
        <h2>📕 Recent Books</h2>

        <table>
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Author</th>
              <th>Category</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Java Programming</td>
              <td>James Gosling</td>
              <td>Programming</td>
            </tr>

            <tr>
              <td>React Basics</td>
              <td>Jordan Walke</td>
              <td>Web Development</td>
            </tr>

            <tr>
              <td>Python Crash Course</td>
              <td>Eric Matthes</td>
              <td>Programming</td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default Dashboard;