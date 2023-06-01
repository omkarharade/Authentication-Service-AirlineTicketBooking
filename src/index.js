const express = require("express");
const { PORT } = require("./config/serverConfig");
console.log(PORT);

const app = express();

const prepareAndStartServer = () => {
	app.listen(PORT, () => {
		console.log(`server started on port: ${PORT}`);
	});
};

prepareAndStartServer();
