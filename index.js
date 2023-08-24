import express from "express";
import cors from "cors";
import 'dotenv/config';
import path from 'path';


const app = express();


app.use(cors());
const PORT = process.env.PORT || 2023

app.get('/', (req, resp) => {
    resp.send("Hola, Everyone this is my HomePage")
});

app.listen(PORT, () => {
    console.log(`this app is listening ${PORT} server`);
})
