import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        // Create a new object with only the necessary fields for login
        const loginData = {
            email: formData.email,
            password: formData.password,
        };

        try {
            const response = await axios.post('http://localhost:5000/login', loginData);
            setResponseMessage(response.data.message || 'Login successful!');
        } catch (error) {
            console.error('Error during login:', error);
            setResponseMessage(error.response?.data?.message || 'Login failed. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default Login;