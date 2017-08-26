"use strict";
var fs = require("fs");
var screen_path = './plugins/screen';
var routes = {};
function readPlugins() {
    var filenames = fs.readdirSync(screen_path);
    for (var index in filenames) {
        console.log(filenames[index]);
    }
}
module.exports = readPlugins;
//# sourceMappingURL=screen-router.js.map