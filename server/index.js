import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.js";

const app = express();

// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", authRoutes);

app.listen(8800, () => {
	console.log(`Server started on http://localhost:8800`);
});
