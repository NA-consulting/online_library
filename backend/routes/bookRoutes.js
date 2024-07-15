const express = require('express');
const router = express.Router();
const { getAllBooks } = require('../controllers/bookController');

// Route GET pour récupérer tous les livres
router.get('/books', getAllBooks);

module.exports = router;
