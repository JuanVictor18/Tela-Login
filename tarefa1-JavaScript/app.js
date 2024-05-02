// app.js

const express = require('express');
const app = express();
const port = 3000;
const authRouter = require('./src/routers/authRouter'); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(__dirname + '/src/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/public/view/inicio.html');
});


app.post('/login', (req, res) => {

    res.send('Autenticação em andamento...'); 
});


app.get('/welcome', (req, res) => {
    res.sendFile(__dirname + '/src/public/view/welcome.html');
});


app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`Servidor em execução na porta ${port}`);
});
