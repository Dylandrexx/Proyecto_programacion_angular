const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Base de datos en memoria
let posts = [
  { id: '1', title: 'Primer Post', content: 'Contenido del primer post', author: 'admin', createdAt: new Date() },
  { id: '2', title: 'Segundo Post', content: 'Contenido del segundo post', author: 'user', createdAt: new Date() }
];

let users = [
  { id: '1', username: 'admin', password: 'admin123', role: 'admin' },
  { id: '2', username: 'user', password: 'user123', role: 'user' }
];

// Routes
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.post('/api/posts', (req, res) => {
  const { title, content, author } = req.body;
  const newPost = {
    id: uuidv4(),
    title,
    content,
    author: author || 'anonymous',
    createdAt: new Date()
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    res.json({ 
      success: true, 
      user: { id: user.id, username: user.username, role: user.role },
      token: 'mock-jwt-token-' + user.id
    });
  } else {
    res.status(401).json({ success: false, message: 'Credenciales inválidas' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 API Server running on http://localhost:${PORT}`);
});
