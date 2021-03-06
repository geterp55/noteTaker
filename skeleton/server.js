/* Note Taker (18.2.6)
 * backend
 * ==================== */ 

// Dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan'); // logs SAFDSADFdfsFdfsSDFSDSFdsfdsfdFSDFSDFSDFSDfdsfd

// set the app up with morgan, body-parser, and a static folder
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(express.static('public'));

//Database configuration
var mongojs = require('mongojs');
var databaseUrl = "week18day2";
var collections = ["notes"];

// hook mongojs config to db variable
var db = mongojs(databaseUrl, collections);

// log any mongojs errors to console
db.on('error', function(err) {
  console.log('Database Error:', err);
});


// Routes
// ======

// Simple index route
app.get('/', function(req, res) {
  res.send(index.html);
});


// TODO: You will make six more routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


// 1. Save a note to the database's collection
// ===========================================




// 2. Retrieve all notes from the database's collection
// ====================================================




// 3. Retrieve one note in the database's collection by it's ObjectId
// TIP: when searching by an id, the id needs to be passed in 
// as (mongojs.ObjectId(IDYOUWANTTOFIND))
// ==================================================================




// 4. Update one note in the database's collection by it's ObjectId 
// (remember, mongojs.ObjectId(IDYOUWANTTOFIND)
// ================================================================




// 5. Delete one note from the database's collection by it's ObjectId
// (remember, mongojs.ObjectId(IDYOUWANTTOFIND)
// ==================================================================




// 6. Clear the entire note collection
// ===================================



// listen on port 3000
app.listen(3000, function() {
  console.log('App running on port 3000!');
});
