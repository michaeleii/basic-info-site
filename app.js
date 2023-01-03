const express = require("express");
const app = express();
const port = 3000;
const { getHome, getAbout, getContact, getError } = require("./routes");

app.get("/", getHome);
app.get("/about", getAbout);
app.get("/contact-me", getContact);
app.get("*", getError);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});
