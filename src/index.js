// Import libs
const express = require('express');
const path = require('path');
const cors = require('cors');	// Connect/Express middleware

const app = express();

//const indexRoutes = require('./routes/index');
const tasksRoutes = require('./routes/tasks');

// Settings *****************
app.set('port', process.env.PORT || 3000);
app.engine('html', require('pug').renderFile);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middlewares **************
app.use(cors());
app.use(express.json()); // No need it body-parser since express 4.16.2
app.use(express.urlencoded({extended: false})); // Receive data form no images

// Routes********************
//app.use(indexRoutes);
app.use('/tasks', tasksRoutes);

// Static files**************
//app.use('/modules',express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'dist')));

// Launch *******************
app.listen(app.get('port'), () => {
	console.log('Server running on port', app.get('port'));
});