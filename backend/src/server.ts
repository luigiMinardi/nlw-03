import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);

//Driver Nativo = Permite executar as queries do BD(Banco de Dados) direto pelo Node
// mas não oferece nenhum tipo de abstração. Ou seja, voce precisa escrever a query no
// mesmo formato que escreveriamos dentro de um BD.

//Query Builder = Um pouco mais de abstração. Permite você escrever as aueries com JavaScript(JS)
// por exemplo a foma como o knex funciona. No fim ele converte para a query no modo padrão de
// se escrever em um BD. (É basicamente um construtor de queries, ele basicamente da para o 
// programador essa sintaxe mais amigavel pra escrever as queries do BD)

//Object Relational Mapping (ORM) = Maior nivel de abstração possivel. Se cria 1 classe do JS 
// que simboliza uma tabela no BD. O retorno do BD vai ser uma instancia da classe, um objeto 
// derivado da classe que representa a tabela no BD. Faz um relacionamento de objeto para cada
// registro da tabela.

// Usar o Query Builder(QB) ou o ORM nos deixa trocar entre BD's diferentes sem precisar mexer
// na aplicação. Eles integram com quase qualquer banco de dados tudo depende de qual ORM ou QB
// você está usando, consultando a documentação você pode ver quais eles suportam.