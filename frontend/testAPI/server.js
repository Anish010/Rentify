const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON bodies
app.use(bodyParser.json());

// Dummy JSON data
const users = [
  { user_id: 1, first_name: 'John', last_name: 'Doe', email: 'john@example.com', phone_number: '1234567890', role: 'seller', password:"12345678" },
  { user_id: 2, first_name: 'Alice', last_name: 'Smith', email: 'alice@example.com', phone_number: '9876543210', role: 'buyer', password:"12345678"  }
];

const properties = [
  { property_id: 1, user_id: 1, place: 'City Center', area: 1000, bedrooms: 2, bathrooms: 1, nearby_hospitals: 'Hospital A, Hospital B', nearby_colleges: 'College X, College Y' },
  { property_id: 2, user_id: 1, place: 'Suburb', area: 2000, bedrooms: 3, bathrooms: 2, nearby_hospitals: 'Hospital C', nearby_colleges: 'College Z' },
  { property_id: 3, user_id: 2, place: 'Downtown', area: 800, bedrooms: 1, bathrooms: 1, nearby_hospitals: 'Hospital D', nearby_colleges: 'College W' }
];

// Routes
app.get('/users', (req, res) => {
  res.json(users);
});

// Login API route
app.post('/api/login', (req, res) => {
    console.log(req.body)
  const email = req.body.email;
  const password = req.body.password;

  // Find user with matching email
  const user = users.find(u => u.email === email);

  // If user not found or password doesn't match, return error
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  // If credentials are correct, send user details
  res.json({
    user_id: user.user_id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
      role: user.role,
    password: user.password
  });
});

app.get('/properties', (req, res) => {
  res.json(properties);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
