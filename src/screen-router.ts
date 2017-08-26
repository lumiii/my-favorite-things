import fs = require('fs');
import path_all = require('path');
import assert = require('assert');
import util = require('util');

const path = path_all.posix;

const SCREEN_PATH = './plugins/screen';
const PLUGIN_EXT = '.js';
// map of domain : functions
// and functions should take a URL, and spit out a Buffer (image data)
let routes:  { [key: string]: (url: string) => Buffer; } = {};

function readPlugins(): void {
    const filenames = fs.readdirSync(SCREEN_PATH);
    for (let index in filenames) {
        const filename = filenames[index];
        if (path.extname(filename).toLowerCase() === PLUGIN_EXT) {
            const module_name = path.basename(filename, PLUGIN_EXT);
            const module_path = path.join(SCREEN_PATH, module_name);
            populate_route(module_path);
        }
    }
}

function populate_route(module_path: string): void {
    console.log(util.format('Loading screen plugin: %s', module_path));
    const plugin = require(module_path);
    const domain = plugin.domain;
    assert.strictEqual(domain, undefined,
        util.format('Plugin %s already loaded', domain));
    routes[domain] = plugin.func;
}

readPlugins();

export = readPlugins;
