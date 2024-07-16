import React from 'react';
import styled from 'styled-components';
import Navbar from './mise_enPage/Navbar';
import Header from './mise_enPage/Header';
import Footer from './mise_enPage/Footer';

// Container principal
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 20px;
  background: #f5f5f5;
`;

// Grille des livres
const BookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
`;

// Carte d'un livre
const BookCard = styled.div`
  border: none;
  border-radius: 12px;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

// Image d'un livre
const BookImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

// Titre d'un livre
const BookTitle = styled.h3`
  font-size: 1.4em;
  margin: 10px 0;
  color: #333;
`;

// Auteur d'un livre
const BookAuthor = styled.p`
  font-size: 1em;
  margin: 5px 0;
  color: #777;
`;

// Description d'un livre
const BookDescription = styled.p`
  font-size: 0.9em;
  margin: 10px 0;
  color: #555;
  height: 60px;
  overflow: hidden;
`;

// Bouton pour ajouter au compte
const AddToAccountButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const books = [
  {
    title: 'Le Petit Prince',
    author: 'Antoine de Saint-Exupéry',
    ISBN: '9781853261589',
    genre: 'Fiction',
    description: 'The Little Prince is a philosophical tale, with humanist values, shared from one generation to another for more than 75 years.',
    image: require('../assets/collection/le_petit_prince.jpg'),
    format: 'Paperback',
    interactive: false,
    publication_date: '1943-04-06',
    average_rating: 4.2
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    ISBN: '9780061120084',
    genre: 'Fiction',
    description: 'To Kill a Mockingbird takes readers to the roots of human behavior, to innocence and experience, kindness and cruelty, love and hatred, humor and pathos.',
    image: require('../assets/collection/to_kill_a_mockingbird.jpg'),
    format: 'Hardcover',
    interactive: false,
    publication_date: '1960-07-11',
    average_rating: 4.5
  },
  {
    title: '1984',
    author: 'George Orwell',
    ISBN: '9780451524935',
    genre: 'Science Fiction',
    description: '1984 is a dystopian novella by George Orwell published in 1949, which follows the life of Winston Smith, a low-ranking member of the Party.',
    image: require('../assets/collection/1984.jpg'),
    format: 'Paperback',
    interactive: false,
    publication_date: new Date('1949-06-08'),
    average_rating: 4.3
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    ISBN: '9780141439518',
    genre: 'Romance',
    description: 'Pride and Prejudice is a romantic novel of manners written by Jane Austen.',
    image: require('../assets/collection/pride_and_prejudice.jpg'),
    format: 'Paperback',
    interactive: false,
    publication_date: new Date('1813-01-28'),
    average_rating: 4.4
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    ISBN: '9780743273565',
    genre: 'Fiction',
    description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald.',
    image: require('../assets/collection/the_great_gatsby.jpg'),
    format: 'Hardcover',
    interactive: false,
    publication_date: new Date('1925-04-10'),
    average_rating: 4.2
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    ISBN: '9780316769488',
    genre: 'Fiction',
    description: 'The Catcher in the Rye is a novel by J.D. Salinger, first published in 1951.',
    image: require('../assets/collection/the_catcher_in_the_rye.jpg'),
    format: 'Paperback',
    interactive: false,
    publication_date: new Date('1951-07-16'),
    average_rating: 4.1
  },
  {
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J.K. Rowling',
    ISBN: '9780747532743',
    genre: 'Fantasy',
    description: 'Harry Potter and the Philosopher\'s Stone is the first novel in the Harry Potter series written by J.K. Rowling.',
    image: require('../assets/collection/harry_potter_and_the_philosophers_stone.jpg'),
    format: 'Hardcover',
    interactive: true,
    publication_date: new Date('1997-06-26'),
    average_rating: 4.7
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    ISBN: '9780261102217',
    genre: 'Fantasy',
    description: 'The Hobbit, or There and Back Again, is a children\'s fantasy novel by English author J.R.R. Tolkien.',
    image: require('../assets/collection/the_hobbit.jpg'),
    format: 'Paperback',
    interactive: false,
    publication_date: new Date('1937-09-21'),
    average_rating: 4.6
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    ISBN: '9781853260087',
    genre: 'Adventure',
    description: 'Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville.',
    image: require('../assets/collection/moby_dick.jpg'),
    format: 'Paperback',
    interactive: false,
    publication_date: new Date('1851-10-18'),
    average_rating: 4.0
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    ISBN: '9780261103207',
    genre: 'Fantasy',
    description: 'The Lord of the Rings is an epic high fantasy novel written by English author and scholar J.R.R. Tolkien.',
    image: require('../assets/collection/the_lord_of_the_rings.jpg'),
    format: 'Hardcover',
    interactive: false,
    publication_date: new Date('1954-07-29'),
    average_rating: 4.8
  }
];

const Collection = () => {
  const handleAddToAccount = (book) => {
    console.log(`Added ${book.title} to account`);
    // Ici, vous pouvez ajouter la logique pour ajouter le livre au compte de l'utilisateur
  };

  return (
    <Container>
      <Header />
      <h2>Collection de Livres</h2>
      <BookGrid>
        {books.map((book, index) => (
          <BookCard key={index}>
            <BookImage src={book.image} alt={book.title} />
            <AddToAccountButton onClick={() => handleAddToAccount(book)}>
              Emprunter
            </AddToAccountButton>
            <BookTitle>{book.title}</BookTitle>
            <BookAuthor>{book.author}</BookAuthor>
            <BookDescription>{book.description}</BookDescription>
            
          </BookCard>
        ))}
      </BookGrid>
      <Footer />
    </Container>
  );
};

export default Collection;
