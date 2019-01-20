const Command = require('./command')

module.exports = class leave extends Command {
    static match (message) {
        return message.content.startsWith('!le')
    }

    static action (message) {
      auteur = message.author
      voice_channel = auteur.voice_channel
        client.join_voice_channel(voice_channel).disconnect()
        message.channel.send("Déco")
    }
}
