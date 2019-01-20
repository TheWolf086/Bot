const Discord = require("discord.js");
const bot = new Discord.Client();
const kaamelott = require('./commands/kaamelott')
const kaamelotthandler = require('./commands/kaamelotthandler')
const son = require('./commands/sounds.json')
const leave = require('./commands/sounds.json')

bot.on('message', function (message) {
  let comandUsed = kaamelott.parse(message) || kaamelotthandler.parse(message)
})

bot.login('NTMyNjIwMzczMjYzNTE1NjQ4.DxfLTQ.OA3AMbX1klCfsJ9ahjQasW_38r0')
