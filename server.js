const http = require('http');


const PORT = 3000;




const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');


 if (req.url === '/') {
   res.statusCode = 200;
   res.end('Bem-vindo ao Portal do Aluno do IFAL Campus  Arapiraca!');
 } else if (req.url === '/curso') {
   res.statusCode = 200;
   res.end('Curso Técnico em Informática - PWEB');
 } else if (req.url === '/professora') {
   res.statusCode = 200;
   res.end('Professora responsável: Liliane Mota');
 } else { 
   res.statusCode = 404;
   res.end('Erro 404: Módulo não  encontrado.');
 }
});


server.listen(PORT, () => {
 console.log(`Servidor rodando em http://localhost:${PORT}`);
});
