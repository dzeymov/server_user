import { Router } from "express";
import UserControllers from "../controllers/UserControllers.js";

const router  = new Router() // методы автоматом закидываются в класс

// router.get("/user")
// router.get("/users")
router.post("/registration", UserControllers.registration)
// router.patch("/user/:id")
// router.delete("/user/:id")


export default router;