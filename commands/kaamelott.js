const Command = require('./command')

module.exports = class kaamelott extends Command {

    static match (message) {
        return message.content.startsWith('!k')
    }

    static action (message) {
        var cmd = message.content
        var son = cmd.substring(3, cmd.length)
        let VC = message.member.voiceChannel
        try{
          VC.join()
            .then(connection => {
                connection.playFile(`./sounds/${son}.mp3`).on(`end`, function ()
                {connection.disconnect()}
              )});
            }catch{}
          }
        }
