const { createReadStream } = require("fs");

const DEFAULT_HEADER = { "content-type": "text/html" };

const controller = {
	getHome: (req, res) => {
		res.writeHead(200, DEFAULT_HEADER);
		createReadStream("index.html", "utf8").pipe(res);
	},

	getAbout: (req, res) => {
		res.writeHead(200, DEFAULT_HEADER);
		createReadStream("about.html", "utf8").pipe(res);
	},

	getContact: (req, res) => {
		res.writeHead(200, DEFAULT_HEADER);
		createReadStream("contact-me.html", "utf8").pipe(res);
	},
};

module.exports = { controller };
