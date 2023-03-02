const router = require("express").Router();
const { createAppointment } = require("../Controllers/AppointmentController");
const { fetchUsers } = require("../Controllers/UserController");

router.post("/createAppointment", createAppointment);
router.get("/fetchUsers", fetchUsers);
module.exports = router;
