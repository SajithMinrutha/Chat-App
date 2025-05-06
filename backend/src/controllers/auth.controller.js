import User from "../models/user.model";
export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!req.body) {
      return res.status(400).join({ message: "Invalid Form" });
    }

    if (password < 6) {
      return res
        .status(400)
        .join({ message: "Message should be longer than 6 characters" });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).join({ message: "User Already Exists" });
    }
  } catch (error) {}
};
export const login = (req, res) => {
  res.send("Signup");
};
export const logout = (req, res) => {
  res.send("Signup");
};
