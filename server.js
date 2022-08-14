/* Require */
const ncc = require('@navycuda/lotide');
const morgan = require('morgan');
const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const methodOverride = require('method-override');
const cookieSession = require('cookie-session');
const tools = require('./tools');

/* Tcp:Http */
const tcpHttp = {
  Port: 8080,
  host: 'localhost',
  cookieSession: {
    name: "enigmaSecure",
    keys: [ 'EKMFLGDQVZNTOWYHXUSPAIBRCJ', 'BDFHJLCPRTXVZNYEIWGAKMUSQO' ]
  }
};

/* Middleware */
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieSession(tcpHttp.cookieSession));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

/* Endpoints */
///* Create */
///* Read */
///* Update */
///* Delete */
///* Browse */
///* Read */
///* Edit */
///* Add */
///* Delete */

/**
 * ************** GET ************** *
 * rx = request
 * tx = response
 */
app.get('/', (rx, tx) => {
  tx.render('index');
});
app.get('*', (rx, tx) => {
  tx.status(400);
  tx.render('error');
});

/**
 * ************** POST ************** *
 */
app.post('*', (rx, tx) => {

});

/* Execution & Test Data */
app.listen(tcpHttp.Port, () => {
  console.log(`Node Express server '${tcpHttp.host}' listening on port ${tcpHttp.Port}`)
});