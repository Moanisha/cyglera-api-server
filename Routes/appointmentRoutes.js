const router = require("express").Router();
const {
  createAppointment,
  fetchAppointments,
  editAppointment,
} = require("../Controllers/AppointmentController");
const { fetchUsers } = require("../Controllers/UserController");

router.post("/createAppointment", createAppointment);
router.put("/:id", editAppointment);
router.get("/fetchUsers", fetchUsers);
router.get("/fetchAppointments", fetchAppointments);
module.exports = router;
