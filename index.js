import express from "express";
import cors from "cors";
import 'dotenv/config';
import path from 'path';

const app = express();

app.use(cors());


const __dirname = path.resolve();

const PORT = process.env.PORT || 2023;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {


    console.log(`This app is listening to port ${PORT} `);
});
