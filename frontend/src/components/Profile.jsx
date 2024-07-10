import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../services/api';
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
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getUserProfile();
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
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
        <Footer/>
    </ProfileContainer>
  );
};

export default Profile;
