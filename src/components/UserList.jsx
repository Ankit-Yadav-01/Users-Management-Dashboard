import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../styles/UserList.css';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, [page]);

    const fetchUsers = async () => {
        setLoading(true);
        const data = await getUsers(page);
        
        if (data.length > 0) {
            setUsers(data);
        } else {
            setHasMore(false); // No more users to load
        }

        setLoading(false);
    };

    const handleDelete = async (id) => {
        await deleteUser(id);
        fetchUsers();
    };

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <div className="user-list">
            <h2>User Management Dashboard</h2>
            <button onClick={() => navigate('/add')} className="add-btn">Add User</button>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.company?.name || "N/A"}</td>
                            <td>
                                <button onClick={() => navigate(`/edit/${user.id}`)} className="edit-btn">Edit</button>
                                <button onClick={() => handleDelete(user.id)} className="delete-btn">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {hasMore && (
                <button onClick={handleNextPage} className="next-button" disabled={loading}>
                    {loading ? 'Loading...' : 'Next Page'}
                </button>
            )}
        </div>
    );
};

export default UserList;
