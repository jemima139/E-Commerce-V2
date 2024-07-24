const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3008;

app.use(cors()); 
app.use(express.json());

const db = mysql.createConnection({
  host: 'sql5.freesqldatabase.com',
  user: 'sql5721384',
  password: '38gYmC2Qwc',
  database: 'sql5721384'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    process.exit(1); // Exit the process with failure
  }
  console.log('Connected to database');
});

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Root route
app.get('/', (req, res) => {
  console.log('Root route accessed');
  res.send('Welcome to the API');
});

// API route to get data from the Products table
app.get('/api/products', (req, res) => { 
  db.query('SELECT * FROM `Products`', (err, results) => { 
    if (err) {
      console.error('Error executing query:', err.message);
      console.error(err.stack); // Log the stack trace for more details
      return res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
