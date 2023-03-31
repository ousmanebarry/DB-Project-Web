import express from "express";
import cors from "cors";
import { verifyToken } from "./verify.js";
import authRoutes from "./routes/auth.js";
import profileRoute from "./routes/profile.js";
import bookingsRoute from "./routes/bookings.js";
import rentingsRoute from "./routes/rentings.js";
import customerRoutes from "./routes/customer.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", profileRoute);
app.use("/api", bookingsRoute);
app.use("/api", rentingsRoute);
app.use("/api", customerRoutes);

app.listen(8800, () => {
	console.log(`Server started on http://localhost:8800`);
});
