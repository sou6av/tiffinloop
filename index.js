// index.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// serve your CSS (and any other static assets)
app.use('/style', express.static(path.join(__dirname, 'public', 'style')));

// routes for your pages
app.get('/',    (_, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/become-chef', (_, res) => res.sendFile(path.join(__dirname, 'public', 'become-chef.html')));
app.get('/login',(_, res) => res.sendFile(path.join(__dirname, 'public', 'login.html')));

// catch‑all 404
app.use((req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT, () => {
  console.log(`TiffinLoop server listening on http://localhost:${PORT}`);
});
