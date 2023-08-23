import express from "express";
import cors from "cors";
const app = express();
const port = 8080;

app.use(cors());

app.get('/', (req, resp) => {
    resp.send("Hola Mundo")
});

app.listen(port, () => {
    console.log(`this app is listening ${port} port`);
})
