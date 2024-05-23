const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(` Hello Guys Jangan Lupa Subscribe Channel Galang ThejokR Biar Gak Error 😁`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("Server is Ready!!" + Date.now()) });
}
 
module.exports = keepAlive;
