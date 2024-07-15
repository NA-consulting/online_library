import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';
import ReviewForm from './components/ReviewForm';
import ReviewsList from './components/ReviewsList'; // Importer ReviewsList
import Navbar from './components/mise_enPage/Navbar';
import Footer from './components/mise_enPage/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/review" element={<ReviewForm />} />
          <Route path="/reviews" element={<ReviewsList />} /> {/* Ajouter la route pour ReviewsList */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
