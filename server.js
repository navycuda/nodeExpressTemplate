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

// routes
const things = require('./routes/things');

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

// setup routes
app.use('/things', things);

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
 */
app.get('/', (request, response) => {
  const templateVars = new TemplateVars('Index Page');
  response.render('index', templateVars);
});
app.get('*', (request, response) => {
  const templateVars = new TemplateVars('GET - Error!');
  response.status(400);
  response.render('error', templateVars);
});

/**
 * ************** POST ************** *
 */
app.post('*', (request, response) => {
  const templateVars = new TemplateVars('POST - Error!');
  response.status(400);
  response.render('error', templateVars);
  console.log(`ERROR! POST '*' > ${request.ip}`);
});

/* Execution & Test Data */
app.listen(tcpHttp.Port, () => {
  console.log(`Node Express server '${tcpHttp.host}' listening on port ${tcpHttp.Port}`);
});