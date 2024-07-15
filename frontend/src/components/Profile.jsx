import React, { useEffect, useState } from 'react';
import { getUserProfile, getUserBooks, getUserEmprunts } from '../services/api';
import styled from 'styled-components';
import Footer from './mise_enPage/Footer';
import Header from './mise_enPage/Header';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const ProfileDetail = styled.div`
  margin: 10px;
  padding: 10px;
  width: 300px;
  background-color: #f9f9f9;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Profile = () => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
  });
  const [books, setBooks] = useState([]);
  const [emprunts, setEmprunts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getUserProfile();
        if (response && response.data) {
          setProfile(response.data);

          const booksResponse = await getUserBooks(response.data.id);
          if (booksResponse) {
            setBooks(booksResponse);
          }

          const empruntsResponse = await getUserEmprunts(response.data.id);
          if (empruntsResponse) {
            setEmprunts(empruntsResponse);
          }
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ProfileContainer>
        <Header/>
        <h2>Profile</h2>
        <ProfileDetail>
            <strong>Username:</strong> {profile.username}
        </ProfileDetail>
        <ProfileDetail>
            <strong>Email:</strong> {profile.email}
        </ProfileDetail>
        <h2>Mes Livres</h2>
        {books.map((book) => (
          <ProfileDetail key={book.id}>
            <strong>Title:</strong> {book.title}
            <br />
            <strong>Author:</strong> {book.author}
          </ProfileDetail>
        ))}
        <h2>Mes Emprunts</h2>
        {emprunts.map((emprunt) => (
          <ProfileDetail key={emprunt.id}>
            <strong>Book Title:</strong> {emprunt.book.title}
            <br />
            <strong>Due Date:</strong> {new Date(emprunt.due_date).toLocaleDateString()}
          </ProfileDetail>
        ))}
        <Footer/>
    </ProfileContainer>
  );
};

export default Profile;
