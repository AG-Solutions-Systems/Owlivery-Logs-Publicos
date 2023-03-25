const { Client } = require('discord.js')

module.exports = class AGClient extends Client {

    /**
     * @param {import('discord.js').ClientOptions} clientOptions
     */
    constructor(clientOptions, data) {
        super(clientOptions)

        this.env = data
    }

    /**
     * **Subject list:**
     * * `channel`
     * * `guild`
     * * `client`
     * 
     * **Types list:** 
     * * `message`
     * * `channel`
     * * `guild`
     * * `user`
     * * `member`
     * * `role`
     * 
     * @param {Discord.Guild|Discord.TextBasedChannel|Discord.Client} subject - A client, a guild or a channel
     * @param {string} id
     * @param {'channel'|'user'|'role'|'guild'|'message'} type
    */
    fetch(subject, id, type) {
        id = id || 'unknown'

        return subject[type + 's'].fetch(id).catch(() => undefined)
    }
}