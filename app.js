const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

// Use body-parser middleware to handle JSON requests
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Use item routes
app.use('/api/items', itemRoutes);

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
