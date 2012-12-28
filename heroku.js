var http = require('http');

module.exports = function heroku (client, bot) {
  // Create a local webserver
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Alive!\n');
  }).listen(process.env.PORT);

  // Ping yourself every 5 minutes to keep dyno alive
  setInterval(function(){
    bot.log('Pinging myself');
    http.get(process.env.HEROKU, function(res) {})
  }, 300000)

  bot.log('Self-awareness server running');
};
