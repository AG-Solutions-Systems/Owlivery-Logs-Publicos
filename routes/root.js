'use strict'
module.exports = async function (fastify, opts) {
  fastify.get('/', { config: { rateLimit: { max: 50, timeWindow: "1 minute" } } }, async function (request, reply) {
    return 'Estou Online em: ' + fastify.client.user.tag
  })
}
