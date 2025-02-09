import { Router } from "express";
import {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile,
    deleteUser,
    changeUserPassword
} from "../controllers/user.js";
import authentication from "../middleware/authentication.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile/:id", authentication, getUserProfile);
router.put("/update/:id", authentication, updateUserProfile);
router.delete("/delete/:id", authentication, deleteUser);
router.patch("/change-password", authentication, changeUserPassword);

export default router;
