# MySign

## Démarer avec docker (pour la production)

### Pré-requis

- docker
- docker-compose

### Commandes

Il faut être à la racine du projet pour lancer les commandes

- Lancer le client : `docker-compose up -d` <br>
  puis aller à l'url http://localhost:4200

- Arrêter : `docker-compose down`
- Arrêter et supprimer l'image at les volumes associé : `docker-compose down -v --rmi all`

---

## Démarer sans docker (pour le développement)

### Pré-requis

- nodeJs 16
- npm

### Installation

Il faut être à la racine du projet pour lancer les commandes

- Installation des dépandances : `npm install`

### Execution

Pour executer le projet : `ng serve --open` (ou `npm run start` si on a pas la cli d'angular)

Normalement le navigateur va directement s'ouvrir sur la bonne url, si ce n'est pas le cas voici l'url à entrer : http://localhost:4200
Le projet s'execute sur le port **_4200_**

### Test

à faire
