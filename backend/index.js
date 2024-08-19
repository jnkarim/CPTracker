import express from "express";
import mongoDB from "./db.js";
import createUserRouter from "./Routes/CreateUser.js";
import displayDataRouter from "./Routes/DisplayData.js"; // Import the DisplayData route

const app = express();
const PORT = 5000;

// Initialize MongoDB connection
mongoDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("HELLO WORLD!");
});

// Use imported routers for API routes
app.use("/api", createUserRouter);
app.use("/api", displayDataRouter); // Use the imported router

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
