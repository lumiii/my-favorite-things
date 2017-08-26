import knex = require('./db');
import {Field} from './interfaces';

export async function addTable(table_name: string, resolve: (table: any) => any): Promise<void> {
    await knex.schema.createTableIfNotExists(table_name, resolve);
}

async function checkTable(table_name: string): Promise<void> {
    const hasTable = await knex.schema.hasTable(table_name);
    if (!hasTable) {
        throw new Error('No table ' + table_name + ' found.');
    }
}

export async function addEntry(table_name: string, entry: Object): Promise<void> {
    await checkTable(table_name);
    await knex(table_name).insert(entry);
}

export async function updateEntry(table_name: string, id: Field, update_obj: Object): Promise<void> {
    await checkTable(table_name);
    await knex(table_name).where(id.column, id.value).update(update_obj);
}

export async function deleteEntry(table_name: string, id: Field): Promise<void> {
    await checkTable(table_name);
    await knex(table_name).where(id.column, id.value).delete();
}
