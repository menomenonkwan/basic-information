const express = require('express');
const app = express();

app.listen(8080).listen

app.get('/', (req, res) => {
  res.sendFile('./pages/index.html', { root: __dirname });
});
app.get('/about', (req, res) => {
  res.sendFile('./pages/about.html', { root: __dirname });
});
app.get('/contact', (req, res) => {
  res.sendFile('./pages/contact.html', { root: __dirname });
});
app.use((req, res) => {
  res.status(404).sendFile('./pages/404.html', { root: __dirname });
});