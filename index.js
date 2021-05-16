'use strict';

//////////////////////////
////// Imports      /////
////////////////////////

const server = require('./server.js');

//////////////////////////
////// setup        /////
////////////////////////

require('dotenv').config();
const port = process.env.PORT || 3000 ;


/////////////////////////////
///// Start the Server /////
///////////////////////////

server.listen(port);