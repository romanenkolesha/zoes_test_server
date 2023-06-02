const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/db.json');
const middlewares = jsonServer.defaults();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

server.use(middlewares);

server.use(bodyParser.json());
server.use('/api', router);

server.listen(PORT, function() {
  console.log('JSON Server is running on port ' + PORT);
});