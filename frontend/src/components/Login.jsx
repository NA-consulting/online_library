import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';
import styled from 'styled-components';
import Footer from './mise_enPage/Footer';
import Header from './mise_enPage/Header';

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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await loginUser({ email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/profile');
    } catch (error) {
      alert(error.response.data.error);
    }
  };
  
  return (
    <Container>
        <Header/>
        <h2>Login</h2>
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
        <Button onClick={handleLogin}>Login</Button>
        <Footer/>
    </Container>
  );
};

export default Login;
