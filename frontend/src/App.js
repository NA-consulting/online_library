import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Collection from './components/Collection';
import ReviewForm from './components/ReviewForm';
import ReviewsList from './components/ReviewsList';
import Footer from './components/mise_enPage/Footer';
import Navbar from './components/mise_enPage/Navbar';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProtectedRoute element={Profile} />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/review" element={<ReviewComponent />} />
        {/* Ajoutez d'autres routes ici */}
      </Routes>
    </Router>
  );
};

function ReviewComponent() {
  return (
    <>
      <Navbar />
      <ReviewForm />
      <ReviewsList />
      <Footer />
    </>
  );
}

export default App;
