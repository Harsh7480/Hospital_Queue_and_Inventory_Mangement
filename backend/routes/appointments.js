import express from "express";
import {
    bookAppointment,
    getUserAppointments,
    getHospitalAppointments,
    cancelAppointment,
    confirmAppointment
} from "../controllers/appointments.js";
import authentication from "../middleware/authentication.js";

const router = express.Router();

router.post("/create", authentication, bookAppointment);
router.get("/user", authentication, getUserAppointments);
router.get("/get-hospital-appointments", authentication, getHospitalAppointments);
router.get("/hospital/:hospitalId", authentication, getHospitalAppointments);
router.put("/cancel/:appointmentId", authentication, cancelAppointment);
router.put("/confirm/:appointmentId", authentication, confirmAppointment);

export default router;
