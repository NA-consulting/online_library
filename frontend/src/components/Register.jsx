import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';
import styled from 'styled-components';

import Header from './mise_enPage/Header';
import Footer from './mise_enPage/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  width: 300px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
`;

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await registerUser({ username, email, password });
      alert(response.data.message);
      navigate('/login');
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <Container>
        <Header/>
        <h2>Register</h2>
        <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button onClick={handleRegister}>Register</Button>
        
        <Footer/>
    </Container>
  );
};

export default Register;
