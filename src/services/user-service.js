const UserRepository = require("../repository/user-repository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/serverConfig");
const { use } = require("../routes");
class UserService {
	constructor() {
		this.userRepository = new UserRepository();
	}

	async create(data) {
		try {
			const user = await this.userRepository.create(data);
			return user;
		} catch (error) {
			console.log("Something went wrong in Service Layer");
			throw error;
		}
	}

	async signIn(email, plainPassword) {
		try {
			// fetch user using email
			const user = await this.userRepository.getByEmail(email);

			// compare incoming plain password with stored encrypted password
			const passwordsMatch = this.checkPassword(plainPassword, user.password);

			if (!passwordsMatch) {
				console.log("password dosent match");
				throw { error: "Incorrect Password" };
			}

			// if passwords match then create a token and send it to the user
			const newJWT = this.createToken({
				email: user.email,
				id: user.id,
			});
			console.log(newJWT);
			return newJWT;
		} catch (error) {
			console.log("Something went wrong in the sign in process");
			throw error;
		}
	}

	createToken(user) {
		try {
			const result = jwt.sign(user, JWT_KEY, { expiresIn: "1h" });
			console.log("result", result);
			return result;
		} catch (error) {
			console.log("Something went wrong in token creation");
			throw error;
		}
	}

	verifyToken(token) {
		try {
			const response = jwt.verify(token, JWT_KEY);
			return response;
		} catch (error) {
			console.log("Something went wrong in token validation", error);
			throw error;
		}
	}

	checkPassword(userInputPlainPassword, encryptedPassword) {
		try {
			return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
		} catch (error) {
			console.log("Something went wrong in the password comparison");
			throw error;
		}
	}

	async isAuthenticated(token) {
		try {
			const response = this.verifyToken(token);

			if (!response) {
				throw { error: "Invalid Token" };
			}
			const user = this.userRepository.getById(response.id);

			if (!user) {
				throw { error: "No user with the corresponding token exists" };
			}

			return user.id;
		} catch (error) {
			console.log("Something went wrong in the auth process");
			throw error;
		}
	}
}

module.exports = UserService;
