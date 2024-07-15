// insert_emprunts.js

const sequelize = require('../config/database');
const Emprunt = require('../models/Emprunt');
const Book = require('../models/book');
const User = require('../models/User');

(async () => {
  try {
    await sequelize.sync(); // Synchronise les modèles avec la base de données (si ce n'est pas déjà fait)

    const users = await User.findAll();
    const books = await Book.findAll();

    if (users.length === 0 || books.length === 0) {
      console.error('Veuillez insérer des utilisateurs et des livres avant d\'ajouter des emprunts.');
      process.exit(1);
    }

    await Emprunt.bulkCreate([
      {
        due_date: new Date('2023-12-31'),
        returned: false,
        BookId: books[0].id,
        UserId: users[0].id,
      },
      {
        due_date: new Date('2024-01-15'),
        returned: false,
        BookId: books[1].id,
        UserId: users[1].id,
      },
      {
        due_date: new Date('2024-01-20'),
        returned: false,
        BookId: books[2].id,
        UserId: users[0].id,
      },
      // Ajoutez ici d'autres emprunts
    ]);

    console.log('Emprunts insérés avec succès.');
    process.exit(0); // Quitte le script une fois l'insertion terminée
  } catch (error) {
    console.error('Erreur lors de l\'insertion des emprunts :', error);
    process.exit(1); // Quitte le script avec une erreur en cas d'échec
  }
})();
