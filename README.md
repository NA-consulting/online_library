# My Library
My Library est une application web permettant aux utilisateurs de gérer et d'emprunter des livres, ainsi que de laisser des avis. Ce projet utilise une architecture frontend-backend pour offrir une expérience utilisateur complète.

# Table des Matières
## Pré-requis front
### Installation
### Démarrage
### Structure du Projet
### Fonctionnalités
## Contributions
## Licence
## Pré-requis back
### Node.js (version 12 ou supérieure)
### npm ou yarn
### Firebase Account
### Installation
### Clonez le dépôt :

bash
Copier le code
git clone https://github.com/votre-utilisateur/my-library.git
cd my-library
Installez les dépendances pour le backend et le frontend :

bash
Copier le code
# Pour le backend
cd backend
npm install

# Pour le frontend
cd ../frontend
npm install
Démarrage
Configurez Firebase pour le backend et le frontend :

Suivez les instructions de Firebase pour configurer votre projet et obtenir les fichiers de configuration.
Mettez à jour backend/config/firebase.js et frontend/src/firebase.js avec les informations de configuration de Firebase.
Démarrez le serveur backend :

bash
Copier le code
cd backend
npm start
Démarrez l'application frontend :

bash
Copier le code
cd ../frontend
npm start
Ouvrez votre navigateur et allez à http://localhost:3000 pour voir l'application en action.

Structure du Projet
Backend
bash
Copier le code
backend/
├── config/
│   ├── database.js       # Configuration de la base de données
│   ├── firebase.js       # Configuration de Firebase
├── controllers/
│   ├── userController.js # Contrôleur pour les utilisateurs
│   ├── bookController.js # Contrôleur pour les livres
│   ├── reviewController.js # Contrôleur pour les avis
├── models/
│   ├── index.js          # Point d'entrée pour les modèles
│   ├── user.js           # Modèle pour les utilisateurs
│   ├── book.js           # Modèle pour les livres
│   ├── review.js         # Modèle pour les avis
├── routes/
│   ├── userRoutes.js     # Routes pour les utilisateurs
│   ├── bookRoutes.js     # Routes pour les livres
│   ├── reviewRoutes.js   # Routes pour les avis
├── services/
│   ├── userService.js    # Services pour les utilisateurs
│   ├── bookService.js    # Services pour les livres
│   ├── reviewService.js  # Services pour les avis
├── middlewares/
│   ├── auth.js           # Middleware d'authentification
├── app.js                # Configuration de l'application Express
├── server.js             # Point d'entrée du serveur
Frontend
php
Copier le code
frontend/
├── public/                # Fichiers statiques
├── src/
│   ├── components/
│   │   ├── Register.jsx   # Composant d'inscription
│   │   ├── Login.jsx      # Composant de connexion
│   │   ├── BookList.jsx   # Composant pour la liste des livres
│   │   ├── BookDetail.jsx # Composant pour le détail d'un livre
│   │   ├── ReviewList.jsx # Composant pour la liste des avis
│   │   ├── ReviewForm.jsx # Composant pour le formulaire d'avis
│   ├── services/
│   │   ├── api.js         # Services API pour communiquer avec le backend
│   ├── firebase.js        # Configuration de Firebase
│   ├── App.js             # Composant principal de l'application
│   ├── index.js           # Point d'entrée de l'application
Fonctionnalités
Backend
Utilisateurs

Inscription et connexion avec Firebase Authentication
Gestion des profils utilisateurs
Livres

Ajouter, mettre à jour et supprimer des livres
Récupérer des informations sur les livres
Avis

### Ajouter et supprimer des avis
### Récupérer des avis pour les livres
Frontend
Inscription et Connexion

### Formulaires pour l'inscription et la connexion des utilisateurs
### Gestion de l'authentification utilisateur
Livres

Afficher la liste des livres
Afficher les détails d'un livre spécifique
Emprunter des livres
Avis

Afficher les avis d'un livre
Ajouter un avis pour un livre
### Contributions
Les contributions sont les bienvenues ! Veuillez ouvrir une issue pour discuter de ce que vous souhaitez changer avant de soumettre une pull request.

### Licence
Ce projet n'est pas sous licence MIT. Voir le fichier LICENSE pour plus de détails.
