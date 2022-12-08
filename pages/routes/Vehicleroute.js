const router = require("express").Router();
const Vehiclecontroller = require('../controllers/Vehiclecontroller')

router.post('/createvehicle',Vehiclecontroller.createvehicle)
router.get('/getvehicle',Vehiclecontroller.getvehicles)
module.exports = router