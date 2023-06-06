const UserService = require("../services/user-service");
const userService = new UserService();

const create = async (req, res) => {
	try {
		const response = await userService.create({
			email: req.body.email,
			password: req.body.password,
		});

		return res.status(201).json({
			success: true,
			message: "Successfuly created a new user",
			data: response,
			err: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: "Something went wrong",
			data: {},
			success: false,
			err: error,
		});
	}
};

const signIn = async (req, res) => {
	try {
		const response = await userService.signIn(
			req.body.email,
			req.body.password
		);

		console.log(response);

		return res.status(200).json({
			success: true,
			data: response,
			err: {},
			message: "Successfully signed In",
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: "Something went wrong",
			data: {},
			success: false,
			err: error,
		});
	}
};

const isAuthenticated = async (req, res) => {
	try {
		const token = req.headers["x-access-token"];
		const response = await userService.isAuthenticated(token);
		res.status(200).json({
			sucess: true,
			err: {},
			data: response,
			message: "user is authenticated and token is valid",
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: "Something went wrong",
			data: {},
			success: false,
			err: error,
		});
	}
};

module.exports = {
	create,
	signIn,
	isAuthenticated,
};
