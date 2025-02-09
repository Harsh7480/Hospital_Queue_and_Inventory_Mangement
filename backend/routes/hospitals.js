import { Router } from "express";
import {
    createHospital,
    getAllHospitals,
    getHospitalById,
    updateHospital,
    deleteHospital,
    hospitalLogin,
    updateBedAvailability,
    getRequests,
    getAppointments,
    createManyHospitals,
    getAvailablity,
    decrementBedAvailability,
    incrementBedAvailability
} from "../controllers/hospitals.js"
import authentication from "../middleware/authentication.js";
const router = Router();

router.post("/login", hospitalLogin);
router.get("/getall", getAllHospitals);
router.post("/create", createHospital);
router.post("/create-many", createManyHospitals);
router.get("/get/:id", authentication, getHospitalById);
router.put("/update/:id", authentication, updateHospital);
router.delete("/delete/:id", authentication, deleteHospital);
router.patch("/update-beds/:id", authentication, updateBedAvailability);
router.get("/get-requests/:id", authentication, getRequests);
router.get("/get-appointments/:id", authentication, getAppointments);
router.get("/get-availablity",authentication,getAvailablity)
router.post("/decrement-availablity",authentication,decrementBedAvailability)
router.post("/increment-availablity",authentication,incrementBedAvailability)

export default router;
