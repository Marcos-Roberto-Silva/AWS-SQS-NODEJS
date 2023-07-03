import express from 'express';
const app = express();
const file = process.env.PWD;
app.use(express.static(file));

app.listen(3000, () => {
    console.log('App listening on 3000 port.')});
