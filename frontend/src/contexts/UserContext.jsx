// UserContext.jsx

import React, { createContext, useState } from 'react';

// Création du contexte utilisateur
const UserContext = createContext();

// Fournisseur du contexte utilisateur
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1, // Exemple d'identifiant utilisateur
    name: 'John Doe', // Exemple de nom d'utilisateur
    books: [], // Liste des livres ajoutés au compte utilisateur
  });

  // Fonction pour mettre à jour l'utilisateur
  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  // Fonction pour ajouter un livre au compte utilisateur
  const addBookToUser = (book) => {
    const updatedUser = {
      ...user,
      books: [...user.books, book],
    };
    setUser(updatedUser);
  };

  // Valeur fournie par le contexte
  const contextValue = {
    user,
    updateUser,
    addBookToUser,
  };

  // Fournisseur de contexte enveloppant les composants enfants
  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

// Export du contexte utilisateur
export { UserContext };
// UserProvider est déjà exporté via le composant exporté ci-dessus, pas besoin de le ré-exporter ici
