const { parse } = require("url");
const { createReadStream } = require("fs");
const { controller } = require("./controller");

const DEFAULT_HEADER = { "content-type": "text/html" };

//ROUTE AREA -> URL
const allRoutes = {
	"/:get": (req, res) => controller.getHome(req, res),

	"/about:get": (req, res) => controller.getAbout(req, res),

	"/contact-me:get": (req, res) => controller.getContact(req, res),

	default: (req, res) => {
		res.writeHead(404, DEFAULT_HEADER);
		createReadStream("404.html", "utf8").pipe(res);
	},
};

function handler(req, res) {
	const { url, method } = req;
	const { pathname } = parse(url, true);
	const key = `${pathname}:${method.toLowerCase()}`;

	const chosen = allRoutes[key] || allRoutes.default;

	return Promise.resolve(chosen(req, res)).catch(handlerError(res));
}

function handlerError(res) {
	return (error) => {
		console.log("Something bad has  happened**", error.stack);
		res.writeHead(500, DEFAULT_HEADER);
		res.write(
			JSON.stringify({
				error: "internet server error!!",
			})
		);
		return res.end();
	};
}

module.exports = handler;
