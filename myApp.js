var express = require('express');
var app = express();

// app.get('/', (req, res) => {
//   res.send('Hello Express');
// });
const publicPath = __dirname + '/public';
app.use('/public', express.static(publicPath));

app.get('/', (req, res) => {
  const indexPath = __dirname + '/views/index.html';
  res.sendFile(indexPath);
});

app.get('/json', (req, res) => {
  res.json({message: 'Hello json'});
});




































 module.exports = app;
