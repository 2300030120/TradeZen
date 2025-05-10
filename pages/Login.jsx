import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role as 'user'
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials with role-based authentication
    if (username === 'abhi' && password === 'abhi') {
      if (role === 'admin') {
        navigate('/admin-home'); // Redirect to admin home
      } else if (role === 'user') {
        navigate('/home'); // Redirect to user home
      }
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Login</h2>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={styles.input}
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#f4f4f4',
  },
  card: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '1.5rem',
    fontSize: '24px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '0.8rem',
    margin: '0.8rem 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '0.8rem',
    borderRadius: '4px',
    background: '#4CAF50',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
  error: {
    color: '#e74c3c',
    fontSize: '14px',
  },
};

export default Login;
