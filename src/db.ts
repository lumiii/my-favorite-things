import knex = require('knex');

const out_db = knex(require('./knexfile'));
export = out_db;
