const token = process.env.token;
const Discord = require("discord.js");
const bot = new Discord.Client();
const kaamelott = require('./commands/kaamelott')
const kaamelotthandler = require('./commands/kaamelotthandler')
const son = require('./commands/sounds.json')
const leave = require('./commands/sounds.json')

bot.on('message', function (message) {
  let comandUsed = kaamelott.parse(message) || kaamelotthandler.parse(message) || leave.parse(message)
})

bot.login(token)
