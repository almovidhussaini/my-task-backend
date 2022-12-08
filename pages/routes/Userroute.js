const router = require("express").Router();
const Usercontroller = require('../controllers/Usercontroller')

router.post('/register',Usercontroller.registeruser)
router.post('/login',Usercontroller.login)
module.exports = router