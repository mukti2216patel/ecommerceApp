const bcrypt = require('bcrypt');
const { default: user } = require('../models/user');

const hashPassword = async(password)=>{
    try{
    const salt = 4;
    const newpwd = await bcrypt.hash(password , salt);
    return newpwd;
    }
    catch(err)
    {
        console.log(error);
    }
}

const comparePassword = async (pwd , hashpwd)=>{
    return await bcrypt.compare(pwd , hashpwd);
}

module.exports = {
    hashPassword, comparePassword
}