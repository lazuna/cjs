var express = require('express');
var app = express.createServer();
app.get('/recipes', function(req, res){
  res.send('<h1>All Recipes</h1>');
});

// params object gives us access to find any variable give to routes.
app.get('/recipes/:title', function(req, res) {
 res.send('<h1>' + req.params.title + '</h1>');
});

// If request fails to handle by first two handlers, will go to the last one
// Sequence of handler does matter, so default handler always goes last.
app.get('/*', function(req, res) {
 res.send('if all else fails, we hit this page');
});

app.listen(3000);
