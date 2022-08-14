/* Require */
const ncc = require('@navycuda/lotide');
const morgan = require('morgan');
const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const methodOverride = require('method-override');
const cookieSession = require('cookie-session');
const tools = require('./tools');
const TemplateVars = require('./TemplateVars');

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
  const templateVars = new TemplateVars('Index Page');
  tx.render('index', templateVars);
});
app.get('*', (rx, tx) => {
  const templateVars = new TemplateVars('GET - Error!');
  tx.status(400);
  tx.render('error', templateVars);
});

/**
 * ************** POST ************** *
 */
app.post('*', (rx, tx) => {
  const templateVars = new TemplateVars('POST - Error!');
  tx.status(400);
  tx.render('error', templateVars);
});

/* Execution & Test Data */
app.listen(tcpHttp.Port, () => {
  console.log(`Node Express server '${tcpHttp.host}' listening on port ${tcpHttp.Port}`);
});