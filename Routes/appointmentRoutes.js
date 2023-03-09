const router = require("express").Router();
const {
  createAppointment,
  fetchAppointments,
} = require("../Controllers/AppointmentController");
const { fetchUsers } = require("../Controllers/UserController");

router.post("/createAppointment", createAppointment);
router.get("/fetchUsers", fetchUsers);
router.get("/fetchAppointments", fetchAppointments);
module.exports = router;
