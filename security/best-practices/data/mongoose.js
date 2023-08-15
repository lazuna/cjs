/*
 Define data schemas.
*/

// Quick example: 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

// Setup connection.
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

// Define schema.
var kittySchema = new mongoose.Schema({
  name: String
});

// Compile schema into a model.
var Kitten = mongoose.model('Kitten', kittySchema);

// Create a sample document.
var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'
