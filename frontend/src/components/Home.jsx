import React from 'react';
import styled from 'styled-components';
import Navbar from './mise_enPage/Navbar';
import Header from './mise_enPage/Header';
import Footer from './mise_enPage/Footer';
import backgroundImage from '../assets/69.jpg'; // Assurez-vous que le chemin est correct

// Styles avec styled-components
const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background: url(${backgroundImage}) no-repeat center;
    background-size: cover;
    color: #fff;
    padding: 0 20px;
`;

const HomeContent = styled.div`
    text-align: center;
    padding: 2rem;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1.5s ease-in-out;
    margin-top: 2rem;
    max-width: 800px;
    width: 100%;
`;

const Heading = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #fff;
    animation: slideInFromLeft 1.5s ease-out;
`;

const Paragraph = styled.p`
    font-size: 1.5rem;
    color: #ddd;
    animation: slideInFromRight 1.5s ease-out;
`;

const CTAButton = styled.button`
    margin-top: 1.5rem;
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
    color: #fff;
    background-color: #ff6347;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #ff4500;
    }
`;

const AdditionalContent = styled.div`
    margin-top: 2rem;
    text-align: left;
    max-width: 800px;
    color: #fff;

    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: #ff6347;
    }

    p {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        color: #ddd;
    }
`;

const Home = () => {
    return (
        <>
            <Header />
            <Navbar />
            <HomeContainer>
                <HomeContent>
                    <Heading>Welcome to the Online Library</Heading>
                    <Paragraph>
                        Our library offers a wide range of books across various genres. Whether you're looking for the latest bestsellers, classic literature, or academic resources, we have something for everyone.
                    </Paragraph>
                    <CTAButton>Get Started</CTAButton>
                </HomeContent>
                <AdditionalContent>
                    <h2>Discover More</h2>
                    <p>
                        Sign up today to start building your personalized library, save your favorite books, and join our community of book lovers.
                    </p>
                </AdditionalContent>
            </HomeContainer>
            <Footer />
        </>
    );
};

export default Home;
