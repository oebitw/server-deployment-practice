'use strict';

//////////////////////////
////// Imports      /////
////////////////////////

const express = require('express');
const internalServerError = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');


//////////////////////////
////// App setup    /////
////////////////////////


const app = express();

//////////////////////////
////// Routes       /////
////////////////////////

app.get('/',homeHandler);
app.get('/error',errorHandler);



/////////////////////
//// Handlers //////
///////////////////

function homeHandler(req,res){
  res.send('Hello from the other Side');
}


function errorHandler(req,res){
  throw new Error('Watch out an error happened');
}

/////////////////////
//// Middleware ////
///////////////////

app.use('*', notFound);

app.use(internalServerError);


/////////////////////////////
//// Server Listening   ////
///////////////////////////

function listen(port) {
  app.listen(port, () => {
    console.log(`The app is up on ${port}`);
  });
}

module.exports={
  app:app,
  listen:listen,
};

