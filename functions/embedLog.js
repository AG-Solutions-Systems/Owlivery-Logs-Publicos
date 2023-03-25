const { EmbedBuilder } = require('discord.js');

module.exports = {

    async run(fastify, data) {

        const { user, name, price, guild, productId } = data;

        const embed = new EmbedBuilder()
            .setColor(fastify.client.env.EMBEDCOLOR)
            .setTitle('Compra realizada com sucesso!')
            .setDescription('```Uma compra foi realizada no nosso servidor e foi Aprovada com sucesso!```')
            .setThumbnail('https://cdn.discordapp.com/attachments/864381672882831420/1028234365248995368/aprove.gif')
            .addFields(
                { name: '👤 | Comprador: ', value: `<@${user.id}>`, inline: false },
                { name: '🛒 | Produto: ', value: name, inline: false },
                { name: '💵 | Valor: ', value: price.toString(), inline: false },
                { name: '📆 | Data: ', value: '```' + new Date(Date.now()) + '```', inline: false },
            )

        return { embeds: [embed], components: [], files: [], ephemeral: false }
    }
}