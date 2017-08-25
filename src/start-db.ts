const knex = require('./db');

knex.schema.createTableIfNotExists('sections', function (table: any) {
	table.string('table_name');
}).then();