import React, { useState, useEffect } from 'react';
import { addUser, updateUser, getUserById } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/UserForm.css';

const UserForm = ({ isEdit }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: '', email: '', company: { name: '' } });

    useEffect(() => {
        if (isEdit) {
            fetchUser();
        }
    }, [id]);

    const fetchUser = async () => {
        const data = await getUserById(id);
        if (data) setUser(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEdit) {
            await updateUser(id, user);
        } else {
            await addUser(user);
        }
        navigate('/');
    };

    return (
        <div className="user-form">
            <h2>{isEdit ? "Edit User" : "Add User"}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Full Name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} required />
                <input type="email" placeholder="Email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required />
                <input type="text" placeholder="Department" value={user.company.name} onChange={(e) => setUser({ ...user, company: { name: e.target.value } })} required />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default UserForm;
