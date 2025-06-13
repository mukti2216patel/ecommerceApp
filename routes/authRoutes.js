const express = require('express');
const router = express.Router();
const { registerController , loginController, testController } = require('../controllers/authController');
const {requireSignIn ,isAdmin} = require('../middlewares/authMiddleware');
router.post('/register', registerController);
router.post('/login', loginController);

router.get('/test' , requireSignIn , isAdmin  , testController);
module.exports = router;
