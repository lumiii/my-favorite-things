var knex = require('./db');
knex.schema.createTableIfNotExists('sections', function (table) {
    table.string('table_name');
}).then();
//# sourceMappingURL=start-db.js.map