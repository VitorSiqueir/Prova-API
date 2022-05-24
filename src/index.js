import 'dotenv/config'

import express from 'express'
import cors from 'cors'


const server = express();
server.use(cors());

server.use(express.json());

server.get('/ping', (req, resp) => {
    resp.send('pong');
})

server.get('/dobro/:numero', (req, resp) => {
    let numero = Number(req.params.numero);
    let dobro = numero * 2;

    resp.send({
    dobro:dobro
    });
})

server.get('/somar', (req, resp) => {
    let a =Number(req.query.a);
    let b = Number(req.query.b);

    let x =a+b;

    resp.send({
    somar: x
    });
})

server.post('/somar', (req, resp) => {
    let a = req.body.a;
    let b = req.body.b;

    let x =a+b;

    resp.send({
    somar: x
    })
})

server.post('/media', (req, resp) => {
    let a = req.body.a;
    let b = req.body.b;
    let c= req.body.c;

    let x =(a+b+c)/3;

    resp.send({
    media: x
    })
})

server.post('/', (req, resp) => {
    let a = req.body.a;
    let b = req.body.b;
    let c= req.body.c;

    let x =(a+b+c)/3;

    resp.send({
    media: x
    })
})

server.listen(process.env.PORT,
    () => console.log(`API Online na porta ${process.env.PORT}`));