const express = require ('express');

const app = express();
// abrindo uma porta para rodar no servidor
//  Mercado Europeu e as vagas de tecnologia
app.listen(3000,() => console.log('Servidor rodando na porta 3000'));
// req = a requisição e res = a resposta
// ip e porta são o endereço = retorna o serviço url endereço da maquina e a porta e o caminho pela qual ela irá responder.
app.get('/',(req,res) => res.send('Servidor Rodando, tudo ok'));