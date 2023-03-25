'use strict'
require('dotenv').config({ path: './environments/' + process.env.NODE_ENV + '.env' });
const { Events } = require('discord.js');
const { join } = require('path');
const AutoLoad = require('@fastify/autoload')
const Cors = require('@fastify/cors')
const FastifyRate = require('@fastify/rate-limit')
const FastifyStatic = require('@fastify/static')
const FastifyMultipart = require('@fastify/multipart')
const AGClient = require('./client')
const myIntents = require('./intents')

module.exports = async function (fastify, opts) {

  if (!process.env.ENVIRONMENT) return;

  const data = {
    ENVIRONMENT: process.env.ENVIRONMENT,
    TOKEN: process.env.TOKEN,
    CLIENTID: process.env.CLIENTID,
    CHANNELID: process.env.CHANNELID,
    EMBEDCOLOR: process.env.EMBEDCOLOR
  }

  await fastify
    .register(Cors)
    .register(FastifyRate, {})
    .register(FastifyMultipart)
    .register(FastifyStatic, {
      root: join(__dirname, 'public'),
      prefix: '/public/',
    })
    .register(AutoLoad, {
      dir: join(__dirname, 'routes'),
      options: Object.assign({}, opts)
    });

  fastify.client = new AGClient({ intents: myIntents }, data)
  fastify.client.once(Events.ClientReady, async c => { console.log(`Ready! Logged in as ${c.user.tag}`); })
  fastify.client.login(process.env.TOKEN);

}
