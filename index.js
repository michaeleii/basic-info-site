const handler = require("./handler");
const http = require("http").createServer(handler);
const PORT = 8080 || process.env.PORT;

http.listen(PORT, () => console.log(`server is running at ${PORT}`));
