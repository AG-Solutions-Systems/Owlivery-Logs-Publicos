'use strict'

module.exports = async function (fastify, opts) {
  fastify.post(`/catch`, async function (request, reply) {

    const { user, name, price, guild, productId } = request.body;

    if (!user) return reply.code(400).send({ execution: 'Error', code: 400, response: undefined, error: 'Missing user' });
    if (!name) return reply.code(400).send({ execution: 'Error', code: 400, response: undefined, error: 'Missing name' });
    if (!price) return reply.code(400).send({ execution: 'Error', code: 400, response: undefined, error: 'Missing price' });
    if (!guild) return reply.code(400).send({ execution: 'Error', code: 400, response: undefined, error: 'Missing guild' });
    if (!productId) return reply.code(400).send({ execution: 'Error', code: 400, response: undefined, error: 'Missing productId' });

    const Guild = await fastify.client.fetch(fastify.client, guild.id, 'guild')

    const Channel = await fastify.client.fetch(Guild, fastify.client.env.CHANNELID, 'channel')

    Channel.send(await require('../../../functions/embedLog').run(fastify, request.body)).catch(() => { })

    return true

  })
}