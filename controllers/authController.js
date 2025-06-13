const { hashPassword, comparePassword } = require("../helpers/authHelper");
const userModel = require("../models/user");
const JWT = require("jsonwebtoken");
const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, role } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      return res.send({
        message: "Already user exist",
      });
    }

    const hashPassword1 = await hashPassword(password);
    const newuser = await new userModel({
      name,
      email,
      password: hashPassword1,
      phone,
      address,
    }).save();

    res.send({
      message: "User register",
    });
  } catch (err) {
    console.log(err);
    res.send({
      message: "error",
    });
  }
};

const loginController = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    //validation
    if (!email || !password) res.send("invalid data");
    const user = await userModel.findOne({ email });
    if (!user) res.send("User not found");
    const match = await comparePassword(password, user.password);
    if (!match) return res.send("pwd not match");
    const token = JWT.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.send({
      message: error,
    });
  }
};

const testController = (req , res)=>{
    console.log("protected route");
}

module.exports = {
  registerController,
  loginController,
  testController
};
