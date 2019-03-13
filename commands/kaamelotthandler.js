const Command = require('./command')
const Kson = require('./sounds.json')
module.exports = class kaamelotthandler extends Command {

    static match (message) {
        return message.content.startsWith('!a')
}

static action (message) {
  const sounds = Kson[Math.floor(Math.random()*Kson.length)].file
          let VC = message.member.voiceChannel
          VC.join()
              .then(function (connection) {
                  connection.playFile(`./sounds/${sounds}`).on(`end`, function ()
                  //{connection.disconnect()}
                )});
    }
  }
