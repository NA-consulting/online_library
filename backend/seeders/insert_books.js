// insert_books.js

const sequelize = require('../config/database'); // Assurez-vous que le chemin vers votre fichier de configuration de la base de données est correct
const Book = require('../models/book'); // Assurez-vous que le chemin vers votre modèle Book est correct

(async () => {
  try {
    await sequelize.sync(); // Synchronise le modèle avec la base de données (si ce n'est pas déjà fait)

    await Book.bulkCreate([
      {
        title: 'Le Petit Prince',
        author: 'Antoine de Saint-Exupéry',
        ISBN: '9781853261589',
        genre: 'Fiction',
        description: 'The Little Prince is a philosophical tale, with humanist values, shared from one generation to another for more than 75 years.',
        image: 'backend/assets/le_petit_prince.jpg',
        format: 'Paperback',
        interactive: false,
        publication_date: new Date('1943-04-06'),
        average_rating: 4.2
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        ISBN: '9780061120084',
        genre: 'Fiction',
        description: 'To Kill a Mockingbird takes readers to the roots of human behavior, to innocence and experience, kindness and cruelty, love and hatred, humor and pathos.',
        image: 'backend/assets/to_kill_a_mockingbird.jpg',
        format: 'Hardcover',
        interactive: false,
        publication_date: new Date('1960-07-11'),
        average_rating: 4.5
      },
      {
        title: '1984',
        author: 'George Orwell',
        ISBN: '9780451524935',
        genre: 'Science Fiction',
        description: '1984 is a dystopian novella by George Orwell published in 1949, which follows the life of Winston Smith, a low-ranking member of the Party.',
        image: 'backend/assets/1984.jpg',
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
        image: 'backend/assets/pride_and_prejudice.jpg',
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
        image: 'backend/assets/the_great_gatsby.jpg',
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
        image: 'backend/assets/the_catcher_in_the_rye.jpg',
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
        image: 'backend/assets/harry_potter_and_the_philosophers_stone.jpg',
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
        image: 'backend/assets/the_hobbit.jpg',
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
        image: 'backend/assets/moby_dick.jpg',
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
        image: 'backend/assets/the_lord_of_the_rings.jpg',
        format: 'Hardcover',
        interactive: false,
        publication_date: new Date('1954-07-29'),
        average_rating: 4.8
      }
    ]);

    console.log('Livres insérés avec succès.');
    process.exit(0); // Quitte le script une fois l'insertion terminée
  } catch (error) {
    console.error('Erreur lors de l\'insertion des livres :', error);
    process.exit(1); // Quitte le script avec une erreur en cas d'échec
  }
})();
