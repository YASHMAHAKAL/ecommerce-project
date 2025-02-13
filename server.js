const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
res.send('Hello World');
});

// Error handling middleware
app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).send('Something broke!');
});

// Start server
app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});

