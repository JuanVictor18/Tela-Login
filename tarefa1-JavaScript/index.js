// index.js

const express = require('express');
const app = express();
const port = 3000;


app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/src/public/view/inicio.html');
});


app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;
    if (usuario === 'Admin' && senha === '123456') {
        res.redirect('/boas-vindas');
    } else {
        res.send(`
            <html>
            <head><title>Erro de login</title></head>
            <body>
            <h1>Senha e usuário errados!</h1>
            <p>Aguarde 15 segundos para ser redirecionado para a página de login.</p>
            </body>
            </html>
        `);
        setTimeout(() => {
            res.redirect('/login');
        }, 15000);
    }
});


app.get('/boas-vindas', (req, res) => {
    res.sendFile(__dirname + '/src/public/view/welcome.html');
});


app.use(express.static(__dirname + '/src/public'));

app.listen(port, () => {
    console.log(`Servidor em execução na porta ${port}`);
});
