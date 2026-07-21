function Members() {
  const members = [
    {
      id: 101,
      name: "Abi",
      department: "Information Technology",
      year: "III",
      phone: "9876543210",
    },
    {
      id: 102,
      name: "Priya",
      department: "Computer Science",
      year: "II",
      phone: "9876501234",
    },
    {
      id: 103,
      name: "Arun Kumar",
      department: "Electronics",
      year: "IV",
      phone: "9876549876",
    },
    {
      id: 104,
      name: "Divya",
      department: "Mechanical",
      year: "I",
      phone: "9123456789",
    },
    {
      id: 105,
      name: "Vignesh",
      department: "Civil",
      year: "III",
      phone: "9988776655",
    },
  ];

  return (
    <div className="members">
      <h1>Library Members</h1>
      <p>List of registered library members.</p>

      <table>
        <thead>
          <tr>
            <th>Member ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Year</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.department}</td>
              <td>{member.year}</td>
              <td>{member.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Members;