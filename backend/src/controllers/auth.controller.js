import { generateToken } from "../libs/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "Invalid Form" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .join({ message: "Message should be longer than 6 characters" });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User Already Exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ message: "Invalid User Data" });
    }
  } catch (error) {
    console.log(`Error in sign up controller:${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = (req, res) => {};
export const logout = (req, res) => {
  res.send("Signup");
};
