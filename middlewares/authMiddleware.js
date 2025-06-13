const JWT = require("jsonwebtoken");
const userModel = require('../models/user');
const requireSignIn = async (req, res, next) => {
  try {
    if(!req.user.authorization) res.send("need token");
    const decoded = await JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
const isAdmin = async(req , res , next)=>{
    try {
        const user = await userModel.findById(req.user._id);

        if(user.role !== 1)
        {
            return res.send("Unauthorized Acess");
        }
        next();
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}
module.exports = {requireSignIn , isAdmin};
