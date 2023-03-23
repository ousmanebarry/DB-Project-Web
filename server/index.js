import express from "express";
import authRoutes from "./routes/auth.js";

const app = express();

app.use(express.json());
app.use("/api", authRoutes);

app.get("/", (req, res) => {
	res.send("Live");
});

app.listen(8800, () => {
	console.log("Live");
});
