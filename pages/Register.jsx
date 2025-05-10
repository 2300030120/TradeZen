import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registered successfully!');
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
        <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: { textAlign: 'center', marginTop: '100px' }
};

export default Register;
