const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Basic auth middleware
app.use((req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Basic ')) {
    res.set('WWW-Authenticate', 'Basic realm="Avera Dashboard"');
    return res.status(401).send('Authentication required');
  }

  const credentials = Buffer.from(auth.split(' ')[1], 'base64').toString();
  const [username, password] = credentials.split(':');

  if (username === process.env.AUTH_USER && password === process.env.AUTH_PASS) {
    next();
  } else {
    res.set('WWW-Authenticate', 'Basic realm="Avera Dashboard"');
    res.status(401).send('Invalid credentials');
  }
});

// Serve static files
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Avera dashboard running on port ${PORT}`);
});
