import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/mise_enPage/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import ReviewForm from './components/ReviewForm';
import ReviewsList from './components/ReviewsList';
import Footer from './components/mise_enPage/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/review" element={<ReviewComponent />} />
      </Routes>
      <Footer />
    </Router>
  );
}

// Définition de ReviewComponent pour inclure ReviewForm et ReviewsList
function ReviewComponent() {
  return (
    <>
      <ReviewForm />
      <ReviewsList />
    </>
  );
}

export default App;
