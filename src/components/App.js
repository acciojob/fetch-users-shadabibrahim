
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
      setData(data.data);
    } catch (error) {}
  };

  return (
    <div>
      <div className="header">
        <h2>Blue Whale</h2>
        <button className="btn" onClick={fetchUsers}>
          Get User List
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>
                    <img src={user.avatar} />
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;