n0d3-heroku
===========

A Heroku keepalive plugin for n0d3


## Usage ##

From the terminal, where `<heroku url>` is probably something like `http://mybabybot.herokuapp.com`:

    heroku config:set HEROKU=<heroku url>

And in your n0d3 bot:

    bot.use(require('n0d3-heroku'));
