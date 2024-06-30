// src/UserList.js
import React, { useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchUsers = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get('https://reqres.in/api/users');
            setUsers(response.data.data);
        } catch (error) {
            setError('Error fetching users');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button className="btn" onClick={fetchUsers}>Get User List</button>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {users.length === 0 && !loading && !error && <p>No users found</p>}
            {users.length > 0 && (
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
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td><img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UserList;