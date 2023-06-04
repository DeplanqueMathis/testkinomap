# Kinomap WebOS

### Initalisation du projet
Pour initialiser le projet il suffit de cloner le repository git.

### Installation d'un émulateur
Pour installer l'émulateur il suffira de suivre les étapes [ici](https://webostv.developer.lge.com/develop/tools/simulator-installation).

### Lancement du projet
Une fois les deux étapes précédentes effectuées il vous suffira d'exécuter la commande suivante :
```
ares-launch -s 23 /le-lien-vers-le-projet/
```

#### Blocage lors du test :
Lors de ce test j'ai rencontré quelques blocage que je n'ai pas pu prendre le temps d'appofondir.<br/>
Dans un premier temps je n'ai pas trouvé de manière "propre" d'instancier un projet VueJS, j'ai donc utilisé le CDN vue.<br/>
Dans un second temps le select du filtre ne fonctionne pas avec la télécommande, la solution que j'aurais proposé si j'en avais eu le temps aurait été de réaliser un composant de select dropdown 100% custom pour le projet.<br/>
Enfin les vidéos reçu était en erreur 403, je ne pouvais donc pas les afficher, j'ai donc du tester avec une vidéo locale.