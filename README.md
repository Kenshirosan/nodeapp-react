# Express.js , Vue.js demo app

## Installation:

```bash
git clone https://github.com/Kenshirosan/nodeapp.git
```

```bash
cd /chemin/jusqu'a/nodeapp && npm i  && npm run client-install
```

👍

## Demarrer l'application

```bash
cd /path/to/app && npm run watch
```

> Cette commande va demarrer le serveur sur le port 5000 et le client (navigateur) sur le port 8080, et monitorer les changements apporter aux fichiers, serveur ou client. 🔥 🔥 🔥 🔥

> Les pages se rafraichiront automatiquement a chaque sauvegarde de fichiers dans le client. 😄 😄 😄 😄

## Comment ca marche:

> le serveur servira a aller chercher les donnees dans mysql ou ailleurs, aucun client base de donnees n'est configure, ce sera votre boulot. 🛠

> Le routeur du serveur est prefixe avec '/api'

> A partir du navigateur, quand on arrive sur [http://localhost:8080](http://localhost:8080) , les donnees qu'on recoit vienne de l'adresse [http://localhost:5000/api/readme](http://localhost:5000/api/readme) qui est accessible aussi pour la demo. (route definie dans le fichier '/api/index.js').

> Le client demande le fichier README.md ici: [http://localhost:5000/api/readme](http://localhost:5000/api/readme), le serveur prend ce fichier, le convertit en html et l'envoie en reponse. ❕ 👌

> Le routeur du client est configure pour aller chercher les donnees a cette addresse [http://localhost:5000](http://localhost:5000), en ce qui concerne les routes du navigateur, ca ne change rien, pas de prefixe. Regardez l'url quand vous etes sur [http://localhost:8080](http://localhost:8080) et regarder ou part la requete ajax dans network (f12 ➡️ network).

> Dans client, j'ai installe la librairie Vue.js, mais j'aurai pu mettre autre choses, React ou pur JS 🥇 🙆‍♂.

> On a donc bien un **serveur JS** et un **client JS**

> Vous allez construire une api: Le serveur s'occupe d'aller cherche les donnees et les formatter pour le client. C'est l'api.

> Le client fait des requetes a votre api et affiche les reponses.

## Comment on fait:

-   On decide ce qu'on veut afficher
-   On definit une route dans api
-   Dans le client, on cree une route qui va aller chercher les donnees sur l'api
-   On Cree un 'component' Vuejs, qui affichera les donnees. (ExampleComponent.vue)
-   On importe ce 'component' dans App.vue
-   Entre temps on lit les docs.

## Taches:

-   [x] Faire la plomberie pour connecter l'api et l'application.
-   [ ] trouver un librairie pour se connecter a mysql.
-   [ ] Faire des modeles.
-   [ ] Faire des controlleurs.
-   [ ] Lire les docs.
-   [ ] Apprendre le markdown.
-   [ ] Visiter ce **[site](https://www.webfx.com/tools/emoji-cheat-sheet)**
-   [ ] Apprendre l'anglais en regardant des series en VO, c'est plus simple.
-   [ ] **Faire les recherches en anglais**

## Les Environnements, Frameworks, Librairies:

-   [nodejs](https://nodejs.org/fr/): l'interpreteur javascript, detourne pour pouvoir faire du JS sur le serveur.
-   [Express](https://expressjs.com/): Un tres bon framework JS
-   [Vue.js](https://vuejs.org/v2/guide/): Une librairie JS tres facile a prendre en main.
-   [React.js](https://reactjs.org/): Le framework JS de facebook
-   [Body parser](https://github.com/expressjs/body-parser)
-   [dotenv](https://github.com/motdotla/dotenv)
-   [concurrently](https://github.com/kimmobrunfeldt/concurrently)
-   [cors](https://github.com/expressjs/cors)
-   [commonmark](https://github.com/commonmark/commonmark.js)
-   [sass](https://sass-lang.com/)
-   [generateur de gradients 🌜 🌗 🌔](https://cssgradient.io/)
-   [aide pour design de base de donnees de tous types](http://www.databaseanswers.org/data_models/index.htm)

## Lien vers le repo:

[github](https://github.com/Kenshirosan/nodeapp.git)
