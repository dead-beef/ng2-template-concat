const path = require('path');
const fs = require('fs');

const templates = {};

let lib = {
	getTemplate: function getTemplate(path) {
		var ret = templates[path];
		if(ret === undefined) {
			throw new Error('Template "'.concat(path, '" not found'));
		}
		return ret;
	},

	module: function module(root, files) {
		let templates = {};
		for(let file of files) {
			let relpath = path.relative(root, file);
			file = fs.readFileSync(file);
			templates[relpath] = file.toString();
		}
		return 'const templates = '.concat(
			JSON.stringify(templates),
			';\nexport ', lib.getTemplate.toString()
		);
	}
};

module.exports = lib;
