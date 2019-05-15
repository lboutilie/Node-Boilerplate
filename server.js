/*
Importer les composants serveur
*/
  const express = require('express');
  const path = require('path');
//

/*
Config du serveur
*/
  // Définir les var serveur
  const server = express();
  const port = 3000;

  // Définition du dossier static du client
  server.set( 'views', __dirname + '/www');
  server.use( express.static(path.join(__dirname, 'www')) );
//

/*
Lancer le serveur (qui écoute sur un port)
*/
  server.listen( port, () => console.log(`Server listening on port ${port}`) )
//