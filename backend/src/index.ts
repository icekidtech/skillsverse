import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./api/user";
import jobRoutes from "./api/job";
import credentialRoutes from "./api/credential";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/user", userRoutes);
app.use("/api/job", jobRoutes);
app.use("/api/credential", credentialRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});