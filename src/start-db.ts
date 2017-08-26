import db_tools = require('./db-tools');

export = (async () => {
	await db_tools.addTable('sections', (table: any) => {
		table.string('table_name');
	});
});
