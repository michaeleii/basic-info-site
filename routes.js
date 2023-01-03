const { createReadStream } = require("fs");
const DEFAULT_HEADER = { "content-type": "text/html" };

const getHome = (req, res) => {
	res.writeHead(200, DEFAULT_HEADER);
	createReadStream("index.html", "utf8").pipe(res);
};

const getAbout = (req, res) => {
	res.writeHead(200, DEFAULT_HEADER);
	createReadStream("about.html", "utf8").pipe(res);
};

const getContact = (req, res) => {
	res.writeHead(200, DEFAULT_HEADER);
	createReadStream("contact-me.html", "utf8").pipe(res);
};

const getError = (req, res) => {
	res.writeHead(404, DEFAULT_HEADER);
	createReadStream("404.html", "utf8").pipe(res);
};

module.exports = { getHome, getAbout, getContact, getError };
