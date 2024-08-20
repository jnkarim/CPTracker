import bcrypt from "bcrypt";
import express from "express";
import { body, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const jwtSecret = "J8nG7T4qPzKdBv1cdp5LmC3sUwH9e";

const router = express.Router();

// Route to create a new user
router.post(
  "/createuser",
  [
    body("email").isEmail().withMessage("Enter a valid email address"),
    body("name")
      .isLength({ min: 4 })
      .withMessage("Name must be at least 4 characters long"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
  ],
  async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, codeforcesUsername} = req.body;

    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ errors: "User already exists" });
      }

      // Hash the password using bcrypt
      const salt = await bcrypt.genSalt(10);
      const secPassword = await bcrypt.hash(password, salt);

      console.log("Hashed Password:", secPassword); // Log the hashed password for debugging

      // Create a new user
      await User.create({
        name,
        email,
        password: secPassword,
        codeforcesUsername,
      });

      res.json({ success: true });
    } catch (error) {
      console.error("Error creating user:", error.message);
      res.status(500).json({ success: false, error: error.message });
    }
  }
);


// Route to log in a user
router.post(
  "/loginuser",
  [
    body("email").isEmail().withMessage("Enter a valid email address"),
    body("password")
      .isLength({ min: 4 })
      .withMessage("Password must be at least 4 characters long"),
  ],
  async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Find the user by email
      const userData = await User.findOne({ email });

      if (!userData) {
        return res.status(400).json({ errors: "Invalid email or password" });
      }

      // Compare the hashed password with the input password
      const passCompare = await bcrypt.compare(password, userData.password);

      if (!passCompare) {
        return res.status(400).json({ errors: "Invalid email or password" });
      }

      // Generate JWT token
      const data = {
        user: {
          id: userData._id,
        },
      };

      const authToken = jwt.sign(data, jwtSecret);
      res.json({ success: true,
        user: {
          _id: userData._id,
          name: userData.name,
          email: userData.email,
          codeforcesUsername: userData.codeforcesUsername,
          
        },
        authToken });
    } catch (error) {
      console.error("Error during login process:", error.message);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  }
);

export default router;