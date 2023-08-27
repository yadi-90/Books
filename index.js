import express from "express";
import cors from "cors";
import 'dotenv/config';
import path from 'path';
import BOOKS from "./books.js"; 

const app = express();

app.use(cors());

const __dirname = path.resolve();

const PORT = process.env.PORT || 2023;

app.use(express.static(path.join(__dirname, 'public'))); // assuming your HTML and JS files are in the public folder

app.get('/books',function(req, res){
  res.sendFile(path.join(__dirname, 'public', 'books.html')); 
});

app.get('/api/books', (req, res) => {
    res.json(BOOKS);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); 
});

app.get('/api/books/:id', (req, res) => {
  const bookId = req.params.id;
  const book = BOOKS.find(book => book.id == bookId); // use == instead of ===

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

app.listen(PORT, () => {
  console.log(`This app is listening to port ${PORT}`);
});

