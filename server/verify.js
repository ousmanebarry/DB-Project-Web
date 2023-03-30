import jwt from "jsonwebtoken";
const secretKey = "my-secret-key";

export const verifyToken = (req, res, next) => {
	const token = req.headers.authorization?.split(" ")[1];

	if (!token) {
		return res.status(401).json({ message: "No token provided" });
	}

	jwt.verify(token, secretKey, (error, decoded) => {
		if (error) {
			return res.status(401).json({ message: "Invalid token" });
		}

		req.user = decoded;
		next();
	});
};
