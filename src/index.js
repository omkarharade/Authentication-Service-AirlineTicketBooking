const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");
console.log(PORT);

const app = express();

const prepareAndStartServer = () => {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.use("/api", apiRoutes);

	app.listen(PORT, () => {
		console.log(`server started on port: ${PORT}`);
	});
};

prepareAndStartServer();
