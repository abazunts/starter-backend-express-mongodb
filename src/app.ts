import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import exampleRouter from "./routers/example-router";

const PORT = process.env.PORT || 8888;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/example', exampleRouter);

app.use((req, res) => {
    res.sendStatus(404)
});


app.listen(PORT);
