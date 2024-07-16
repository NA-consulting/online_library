const Book = require('../models/book'); // Assurez-vous que le chemin est correct

// Fonction pour récupérer tous les livres
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



/*
const Book = require('../models/book');
const Emprunt = require('../models/Emprunt');
const User = require('../models/User');

exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Error creating book' });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching books' });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching book' });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      await book.update(req.body);
      res.status(200).json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating book' });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      await book.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting book' });
  }
};

exports.empruntBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      const emprunt = await Emprunt.create({
        userId: req.body.userId,
        bookId: book.id,
        dateEmprunt: new Date()
      });
      res.status(201).json(emprunt);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error borrowing book' });
  }
};

exports.returnBook = async (req, res) => {
  try {
    const emprunt = await Emprunt.findOne({
      where: { bookId: req.params.id, userId: req.body.userId, dateRetour: null }
    });
    if (emprunt) {
      emprunt.dateRetour = new Date();
      await emprunt.save();
      res.status(200).json(emprunt);
    } else {
      res.status(404).json({ error: 'Borrow record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error returning book' });
  }
};
*/